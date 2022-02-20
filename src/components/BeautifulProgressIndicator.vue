<template>
<div class="container">
  <p class="ratio-label">{{earned}} / {{required}}</p>
  <p class="planned-label" v-if="planned > 0">{{planned}} noch geplant</p>

  <div class="progress-container">
    <div class="planned-progress" v-bind:style="{ 'width': plannedProgress }"></div>
    <div class="earned-progress" v-bind:style="{
      'width': earnedProgress,
      'background-color': color,
    }"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BeautifulProgressIndicator',
  props: {
    required: {
      type: Number,
    },
    earned: {
      type: Number,
    },
    planned: {
      type: Number,
    },
    color: {
      type: String,
    },
  },
  computed: {
    earnedProgress() {
      return `${Math.min(100, (100 * this.earned) / this.required)}%`;
    },
    plannedProgress() {
      return `${Math.min(100, (100 * (this.planned + this.earned)) / this.required)}%`;
    },
  },
};
</script>

<style scoped>
  .container {
    width: 12em;
  }

  .progress-container {
    position: relative;
    background-color: lightgray;
  }

  .planned-progress {
    background-color: gray;
  }

  .earned-progress, .planned-progress {
    position: absolute;
    transition: width 1s ease-in-out;
  }

  .progress-container, .earned-progress, .planned-progress {
    height: 20px;
    border-radius: 10px;
  }

  .ratio-label, .planned-label {
    display: inline;
    vertical-align: text-bottom;

    font-size: 0.75em;

    padding-left: 4px;
    padding-right: 4px;
  }

  .planned-label {
    float: right;
    color: gray;
  }
</style>
