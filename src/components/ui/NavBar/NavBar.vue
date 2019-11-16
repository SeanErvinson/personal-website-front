<template>
  <nav id="menu">
    <NavMenu></NavMenu>
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
  margin: 1rem 1.5rem;
  letter-spacing: 8px;
  text-align: right;
  position: absolute;
  right: 0%;
}
/* #menu {
  margin-right: 30px;
  letter-spacing: 8px;
  padding-top: 20px;
  text-align: right;
}
#menu li a {
  display: inline-block;
  color: #0864c7;
}
.nav-item {
  text-align: right;
}
@media only screen and (max-width: 768px) {
  #menu {
    padding-bottom: 40px;
    padding-top: 20px;
    margin-right: 20px;
  }
} */
</style>