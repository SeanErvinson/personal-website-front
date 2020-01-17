<template>
  <nav id="menu">
    <NavbarMenu></NavbarMenu>
  </nav>
</template>

<script>
import NavbarMenu from "@/components/ui/NavbarMenu";
export default {
  components: { NavbarMenu }
};
</script>

<style scoped>
nav {
  letter-spacing: 8px;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}
</style>