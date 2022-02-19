<template>
<div
  class="column module mt-1"
  :key="module.name"
  v-bind:style="{
    'background-color': this.$parent.$parent.getColorForCategory(module.categories[0])
  }">
  <button class="is-pulled-right" v-on:click="removeModule(module.id)">
    <i class="remove-module fab fa fa-times"></i>
  </button>
  <h3>{{module.name}}</h3>
  <p>{{module.ects}} ECTS</p>
</div>
</template>

<script>
export default {
  name: 'BeautifulProgressIndicator',
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
      this.$parent.$parent.removeModule(this.semesterNumber, moduleId);
    },
  },
};
</script>

<style scoped>
  .module {
    background-color: black;
    border-radius: 5px;
  }
  button {
    background: #d63031;
    border: none;
    border-radius: 5px;
    color: white;
    cursor:pointer;
  }
  .remove-module:hover {
    color: red;
  }
</style>
