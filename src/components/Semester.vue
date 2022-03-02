<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <draggable v-model="modules"
             group="semester"
             item-key="id"
             class="columns is-flex is-flex-direction-column has-text-centered">
    <template #header>
      <div class="semester-header">
        <h2 class="subtitle pl-3 mb-2">Semester {{ number }}</h2>
        <button class="delete-button delete is-medium" @click="removeSemester()"></button>
      </div>
    </template>
    <template #item="{element}">
      <Module
        @on-delete="$emit('on-module-deleted', $event)"
        :module="element"
        :semesterNumber="number">
      </Module>
    </template>
    <template #footer>
      <div class="column" v-bind:class="{'is-hidden': isAddingNewModule}">
        <button class="button is-dark button-add is-fullwidth" @click="isAddingNewModule=true">
          +
        </button>
      </div>
      <div class="column" v-bind:class="{'is-hidden': !isAddingNewModule}">
        <label for="additionalModule">Select additional module</label>
        <input
          id="additionalModule"
          ref="addModuleInput"
          type="text"
          list="allModules"
          @change="addModule($event.target.value)">
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
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import Module from './Module.vue';

export default {
  name: 'Semester',
  emits: ['on-module-deleted', 'on-add-module', 'on-remove-semester'],
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
    draggable,
  },
  computed: {
    getTotalEcts() {
      return this.countTotalEcts();
    },
  },
  watch: {
    modules: {
      deep: true,
      immediate: false,
      handler() {
        this.isAddingNewModule = false;
      },
    },
    isAddingNewModule(newValue) {
      if (newValue === false) {
        this.$refs.addModuleInput.value = null;
      }
    },
  },
  data() {
    return {
      isAddingNewModule: false,
    };
  },
  methods: {
    addModule(moduleName) {
      this.$emit('on-add-module', moduleName, this.number);
    },
    removeSemester() {
      this.$emit('on-remove-semester', this.number);
    },
    countTotalEcts() {
      return this.modules.reduce((previousValue, module) => previousValue + module.ects, 0);
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
