<template>

<div class="columns is-flex is-flex-direction-column has-text-centered">
  <div class="semester-header">
  <h2 class="subtitle pl-3 mb-2">Semester {{ number }}</h2>
    <button class="delete-button delete is-medium" v-on:click="removeSemester()">
   </button>
  </div>
  <Container
    @drop="onDrop"
    @should-accept-drop="(source, payload) => true"
    group-name="semester"
    :get-child-payload="getChildPayload">
    <Module
      v-for="module in modules"
      :key="module"
      :module="module"
      :semesterNumber="number">
    </Module>
  </Container>
  <div class="column" v-bind:class="{'is-hidden': isAddingNewModule}">
    <button class="button is-dark button-add is-fullwidth" v-on:click="isAddingNewModule=true">
      +
    </button>
  </div>
  <div class="column" v-bind:class="{'is-hidden': !isAddingNewModule}">
    <label for="additionalModule">Select additional module</label>
    <input
      id="additionalModule"
      type="text"
      v-model="additionalModule"
      list="allModules"
      @change="addModule">
    <datalist id="allModules">
      <option v-for="selectableModule in allModules"
              :key="selectableModule.name" v-bind:value="selectableModule.name">
        {{selectableModule.name}}
      </option>
    </datalist>
  </div>
  <div class="column">
    <p>Total ECTS: {{ getTotalEcts }}</p>
  </div>
</div>
</template>

<script>
import { Container } from 'vue-dndrop';
import Module from './Module.vue';

export default {
  name: 'Semester',
  props: {
    number: {
      type: Number,
    },
    modules: {
      type: Array,
    },
    allModules: {
      type: Array,
    },
  },
  components: {
    Module,
    Container,
  },
  computed: {
    getTotalEcts() {
      return this.countTotalEcts();
    },
  },
  data() {
    return {
      additionalModule: null,
      isAddingNewModule: false,
    };
  },
  methods: {
    countTotalEcts() {
      return this.modules.reduce((previousValue, module) => previousValue + module.ects, 0);
    },
    addModule() {
      const blockingSemesterNumber = this.$parent.getPlannedSemesterForModule(
        this.additionalModule,
      );
      if (blockingSemesterNumber) {
        const text = `Module ${this.additionalModule} is already in semester ${blockingSemesterNumber}`;
        // eslint-disable-next-line no-console
        console.warn(text);
        this.$parent.showErrorMsg(text);
        this.additionalModule = null;
        this.isAddingNewModule = false;
        return;
      }
      this.$parent.addModule(this.number, this.additionalModule);
      this.additionalModule = null;
      this.isAddingNewModule = false;
    },
    removeSemester() {
      this.$parent.removeSemester(this.number);
    },
    onDrop({ addedIndex, removedIndex, payload }) {
      const hasRemoval = removedIndex !== null;
      const hasAdd = addedIndex !== null;

      if (hasRemoval) {
        // eslint-disable-next-line vue/no-mutating-props
        this.modules.splice(removedIndex, 1);
      }

      if (hasAdd) {
        // eslint-disable-next-line vue/no-mutating-props
        this.modules.splice(addedIndex, 0, payload);
      }
      this.$parent.updateUrlFragment();
    },
    getChildPayload(index) {
      return this.modules[index];
    },
  },
};
</script>
