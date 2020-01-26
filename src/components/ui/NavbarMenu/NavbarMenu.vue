<template>
  <ul>
    <li v-for="(route, index) in routes" :key="index">
      <router-link
        v-if="!route.hidden && route.display != null"
        :to="route.path"
        class="menu-item"
      >{{route.display}}</router-link>
    </li>
  </ul>
</template>
<script>
import { routes } from "@/models/routes";

export default {
  data() {
    return {
      routes
    };
  }
};
</script>
<style lang="scss" scoped>
.menu-item.router-link-exact-active {
  background: rgb(230, 230, 230);
  &::after {
    content: "|";
    background: #0864c7;
  }
}
a {
  margin-right: $xxsmall;
  font-family: $primary-font;
  letter-spacing: $xxsmall;
  color: $secondary-color;
}
@media only screen and (max-width: 768px) {
  a {
    opacity: 0;
    transition: opacity 100ms ease-in-out;
  }
}
</style>