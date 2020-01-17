<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <transition
        name="transition-animation"
        :duration="250"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import "./assets/css/animate.css";
import Navbar from "@/components/ui/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,
html,
#app {
  height: 100%;
}
body {
  font-family: "Didact Gothic", sans-serif;
  line-height: 1.5;
}
a {
  text-decoration: none;
  color: $secondary-dark-color;
}

ul {
  list-style: none;
}

p {
  font-size: 0.75rem;
  margin-bottom: 0;
}

hr {
  margin: 1rem 0px;
}

%icon-base {
  height: auto;
}

.icon {
  &-xsm {
    @extend %icon-base;
    width: $xsmall;
  }
  &-sm {
    @extend %icon-base;
    width: $small;
  }
  &-md {
    @extend %icon-base;
    width: $medium;
  }
  &-lg {
    @extend %icon-base;
    width: $large;
  }
}

.action {
  cursor: pointer;
  fill: $accent-light-color;
  &:hover {
    fill: $accent-dark-color;
  }
}

%btn-base {
  display: inline-block;
  border: none;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: 1rem;
  margin: 0px auto;
}

.container {
  min-height: 100%;
  width: 60%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  letter-spacing: 0.29em;
  line-height: 1;
  margin-bottom: $xxsmall;
}
// .description,
// .error-description {
//   font-family: "Didact Gothic";
// }

// .table-links-data {
//   width: 2em;
//   height: auto;
// }
</style>
