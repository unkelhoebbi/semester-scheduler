<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" class="logo-nav">
      </router-link>
      <a v-on:click="onBurgerClick" v-bind:class="{'is-active': isBurgerActive}"
         role="button" class="navbar-burger" aria-label="menu"
         aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" v-bind:class="{'is-active': isBurgerActive}">
      <div class="navbar-start">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isBurgerActive: false,
    };
  },
  methods: {
    onBurgerClick() {
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>

<style scoped>

</style>
