<template>
<div class="columns is-flex is-flex-direction-column has-text-centered">
  <h2>Semester {{ number }}</h2>
  <div
    class="column module mt-1"
    v-bind:class="module.moduleClass"
    v-for="module in modules"
    :key="module.name">
    <button class="is-pulled-right" v-on:click="removeModule(module.name)">
      <i class="remove-module fab fa fa-times"></i>
    </button>
    <h3>{{module.name}}</h3>
    <p>{{module.ects}} ECTS</p>
  </div>
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
    removeModule(moduleName) {
      const moduleToDelete = this.modules.filter((item) => item.name === moduleName);
      const index = this.modules.indexOf(moduleToDelete[0]);
      this.$parent.removeModule(this.number, index);
    },
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
  background: #d63031;
  border: none;
  border-radius: 5px;
  color: white;
  cursor:pointer;
}
.button-add {
  background-color: black;
}
.remove-module:hover {
  color: red;
}
.category-1 {
  background-color: #e17055;
  color: white;
}
.category-2 {
  background-color: #e84393;
  color: white;
}
.category-3 {
  background-color: #ff7675;
  color: white;
}
.category-4 {
  background-color: #00cec9;
  color: white;
}
.category-5 {
  background-color: #00b894;
  color: white;
}
.category-6 {
  background-color: #a29bfe;
  color: white;
}
.category-7 {
  background-color: #55efc4;
  color: white;
}
.category-7 {
  background-color: #fdcb6e;
  color: white;
}
</style>
