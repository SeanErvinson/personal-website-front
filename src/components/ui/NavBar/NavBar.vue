<template>
  <nav id="menu">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#"></b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto justify-content-end">
          <NavMenu></NavMenu>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
export default {
  components: { NavMenu }
};
</script>

<style scoped>
nav {
  letter-spacing: 8px;
  text-align: right;
}
@media screen and (min-width: 991px) {
  nav {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
  }
}
</style>