<template>
<div class="columns is-flex is-flex-direction-column has-text-centered">
  <h2>Semester {{ number }}</h2>
  <div class="column module mt-1" v-for="module in modules" :key="module.name">
    <button class="is-pulled-right" v-on:click="removeModule(module.name)">
      <i class="remove-module fab fa fa-times"></i>
    </button>
    <h3>{{module.name}}</h3>
    <p>{{module.ects}} ECTS</p>
  </div>
  <div class="column" v-bind:class="{'is-hidden': isAddingNewModule}">
    <button class="p-2" v-on:click="isAddingNewModule=true">Add</button>
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
    <p>Total ECTS: {{ ectsTotal }}</p>
  </div>
</div>
</template>

<script>
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
  data() {
    return {
      ectsTotal: 0,
      additionalModule: null,
      isAddingNewModule: false,
    };
  },
  methods: {
    updateEctsTotal() {
      this.ectsTotal = this.modules.reduce((a, b) => a + (b.ects || 0), 0);
    },
    addModule() {
      const module = this.allModules.find((item) => item.name === this.additionalModule);
      // eslint-disable-next-line vue/no-mutating-props
      this.modules.push(module);
      this.additionalModule = null;
      this.isAddingNewModule = false;
      this.updateEctsTotal();
    },
    removeModule(moduleName) {
      const moduleToDelete = this.modules.filter((item) => item.name === moduleName);
      const index = this.modules.indexOf(moduleToDelete[0]);
      // eslint-disable-next-line vue/no-mutating-props
      this.modules.splice(index, 1);
      this.updateEctsTotal();
    },
  },
  mounted() {
    this.updateEctsTotal();
  },
};
</script>

<style scoped>
.module {
  background-color: black;
  color: white;
  border-radius: 5px;
}
button {
  background: black;
  border: none;
  border-radius: 5px;
  color: white;
  cursor:pointer;
}

.remove-module:hover {
  color: red;
}
</style>
