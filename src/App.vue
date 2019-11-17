<template>
  <div id="app">
    <NavBar />
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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/animate.css";
import NavBar from "@/components/ui/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
  font-family: "Didact Gothic", sans-serif;
}

.container {
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}

ul {
  margin: 0;
  list-style-type: none;
}

.description,
.error-description {
  font-family: "Didact Gothic";
}
.header {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  letter-spacing: 0.29em;
  line-height: 1;
}
.table-links-data {
  width: 2em;
  height: auto;
}
</style>
