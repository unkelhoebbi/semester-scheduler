<template>
  <Navigation></Navigation>
  <div class="p-5 mt-6">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<style>
</style>
<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Footer,
    Navigation,
  },
};
</script>
<style scoped>
</style>
