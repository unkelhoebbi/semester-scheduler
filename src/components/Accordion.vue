<template>
  <div class="columns columns-accordion">
    <button
      @click="toggleAccordion()"
      class="button is-fullwidth button-accordion"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >

      <span><slot name="title" /></span>

      <span class="icon">
        <font-awesome-icon :icon="isOpen ? openIconClass : closedIconClass" />
      </span>
    </button>
  </div>
  <div class="columns">
    <div v-show="isOpen" :id="`collapse${_uid}`" class="column is-full column-accordion">
      <div class="box box-accordion">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      openIconClass: 'chevron-up',
      closedIconClass: 'chevron-down',
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped>
.button-accordion {
  border-radius: 0;
  justify-content: space-between;
}
.column-accordion {
  padding: 0 0 0.75rem 0;
}
.box-accordion {
  border-radius: 0;
}

</style>
