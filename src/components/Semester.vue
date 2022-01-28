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
    <p>Total ECTS: {{ ectsTotal }}</p>
  </div>
</div>
</template>

<script>
const CATEGORY_CLASS_MAP = {
  'Aufbau (I_Auf)': 'category-1',
  'Engineering Practice (I_EP)': 'category-2',
  'Gesellschaft, Wirtschaft und Recht (I-gwr)': 'category-3',
  'Informatik (I_Inf)': 'category-4',
  'Kommunikation und Englisch (I_KomEng)': 'category-5',
  'Mathematik und Physik (Kat_MaPh)': 'category-6',
  'Rahmenausbildung (Kat_RA)': 'category-7',
  'Studien- Bachelorarbeit (I_SaBa)': 'category-8',
};
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
      const blockingSemesterNumber = this.$parent.getPlannedSemesterForModule(
        this.additionalModule,
      );
      if (blockingSemesterNumber) {
        // TODO: display error message
        console.warn(`Module ${this.additionalModule} is already in semester ${blockingSemesterNumber}`);
        return;
      }
      const module = this.allModules.find((item) => item.name === this.additionalModule);
      this.$parent.addModuleToSemester(this.number - 1, module);
      this.additionalModule = null;
      this.isAddingNewModule = false;
      this.updateEctsTotal();
      this.$parent.updateUrlFragment();
    },
    removeModule(moduleName) {
      const moduleToDelete = this.modules.filter((item) => item.name === moduleName);
      const offset = this.modules.indexOf(moduleToDelete[0]);
      this.$parent.removeModuleFromSemester(this.number - 1, offset);
      this.updateEctsTotal();
      this.$parent.updateUrlFragment();
    },
    selectModuleClass() {
      this.modules.forEach((module) => {
        const category = module.categories[0] ?? '';
        // eslint-disable-next-line no-param-reassign
        module.moduleClass = category ? CATEGORY_CLASS_MAP[category] : '';
      });
    },
  },
  mounted() {
    this.updateEctsTotal();
    this.selectModuleClass();
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
