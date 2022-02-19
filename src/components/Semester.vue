<template>
<div class="columns is-flex is-flex-direction-column has-text-centered">
  <h2>Semester {{ number }}</h2>
  <Module
    v-for="module in modules"
    :key="module"
    :module="module"
    :semesterNumber="number"
  ></Module>
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
  components: { Module },
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
</style>
