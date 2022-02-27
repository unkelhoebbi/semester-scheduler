<template>
  <button class="delete-button is-pulled-right" v-on:click="removeSemester()">
  <i class="remove-module fab fa fa-times"></i>
</button>
<div class="columns is-flex is-flex-direction-column has-text-centered pt-3">
  <h2 class="subtitle">Semester {{ number }}</h2>
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
    <button class="p-2 button-add" v-on:click="isAddingNewModule=true">Add</button>
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

<style scoped>
button {
  background: #d63031;
  border: none;
  border-radius: 5px;
  color: white;
  cursor:pointer;
}
.button-add {
  background-color: black;
}
.semester .delete-button {
  visibility: hidden;
}
.semester:hover .delete-button {
  visibility: visible;
}
</style>
