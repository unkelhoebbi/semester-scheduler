<template>
  <Draggable>
    <div
      class="column module mt-1"
      :key="module.name"
      v-bind:style="{
        'background-color': this.$parent.$parent.$parent.getColorForCategory(module.categories[0])
      }">
      <button class="delete-button is-pulled-right" v-on:click="removeModule(module.id)">
        <i class="remove-module fab fa fa-times"></i>
      </button>
      <h3 class="has-text-weight-bold">{{module.name}}</h3>
      <p>{{module.ects}} ECTS</p>
    </div>
  </Draggable>
</template>

<script>
import { Draggable } from 'vue-dndrop';

export default {
  name: 'Module',
  components: {
    Draggable,
  },
  props: {
    semesterNumber: {
      type: Number,
    },
    module: {
      type: Object,
    },
  },
  methods: {
    removeModule(moduleId) {
      this.$parent.$parent.$parent.removeModule(this.semesterNumber, moduleId);
    },
  },
};
</script>

<style scoped>
  .module {
    border-radius: 5px;
    color: white;
  }
  .delete-button {
    background: #d63031;
    border: none;
    border-radius: 5px;
    color: white;
    cursor:pointer;
  }
  .remove-module:hover {
    color: red;
  }
  .module .delete-button {
    visibility: hidden;
  }
  .module:hover .delete-button {
    visibility: visible;
  }
</style>
