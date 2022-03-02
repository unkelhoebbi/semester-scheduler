<template>
  <Draggable :drag-not-allowed="isMobile">
    <div
      class="column module mt-1"
      :key="module.name"
      v-bind:style="{
        'background-color': this.getColorForCategory(module.categories[0])
      }">
      <button class="delete-button delete is-pulled-right" @click="$emit('on-delete', module.id)">
      </button>
      <h3 class="has-text-weight-bold">{{module.name}}</h3>
      <p>{{module.ects}} ECTS</p>
    </div>
  </Draggable>
</template>

<script>
import { getColorForCategory } from '@/helpers/color-helper';
import { isMobile } from '@/helpers/mobile-checker';
import { Draggable } from 'vue-dndrop';

export default {
  name: 'Module',
  components: {
    Draggable,
  },
  emits: ['on-delete'],
  props: {
    semesterNumber: {
      type: Number,
    },
    module: {
      type: Object,
    },
  },
  computed: {
    isMobile() {
      return isMobile();
    },
  },
  methods: {
    getColorForCategory,
  },
};
</script>
