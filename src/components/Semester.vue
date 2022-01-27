<template>
<div class="columns is-flex is-flex-direction-column has-text-centered">
  <h2>{{ name }}</h2>
  <div class="column module mt-1" v-for="module in modules" :key="module.name">
    <h3>{{module.name}}</h3>
    <p>{{module.ects}} ECTS</p>
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
    name: {
      type: String,
    },
    modules: {
      type: Array,
    },
  },
  data() {
    return {
      ectsTotal: 0,
    };
  },
  methods: {
    updateEctsTotal() {
      this.ectsTotal = this.modules.reduce((a, b) => a + (b.ects || 0), 0);
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
</style>
