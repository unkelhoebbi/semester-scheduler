<template>
  <footer class="section rab-footer">
    <div class="pt-5 divider"></div>
    <div class="container">
      <div class="is-flex-tablet is-justify-content-between is-align-items-center">
        <p>© 2022 Jeremy Stucki, Gregor Stuber</p>
        <div class="py-2 is-hidden-tablet"></div>
        <div class="ml-auto">
          <a class="mr-4 is-inline-block" href="https://github.com/unkelhoebbi/semester-scheduler">
            <i class="fab fa-github fa-2x social"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.divider {
  border-top: 1px solid #dee2e6;
}
.social {
  color: black;
}
.social:hover {
  color: #b12061;
}
</style>
