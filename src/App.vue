<template>
  <div id="app">
    <div id="menu">
      <NavMenu></NavMenu>
    </div>
    <div class="container h-100">
      <transition
        name="transition-animation"
        :duration="250"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/fonts.css";
import NavMenu from "./components/NavMenu.vue";
import "./assets/css/animate.css";

export default {
  name: "app",
  components: { NavMenu }
};
</script>

<style>
#app {
  height: 100%;
}

p {
  font-family: "Didact Gothic-Regular";
}

html,
body {
  height: 100%;
}

h2 {
  font-size: 2em;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.description,
.error-description {
  font-family: "Didact Gothic-Regular";
}
.header {
  font-family: "Komorebi-Gothic";
  letter-spacing: 0.4em;
  line-height: 1;
}
/* Menu */
#menu {
  float: right;
  margin-right: 30px;
  letter-spacing: 8px;
  margin-top: 30px;
  text-align: right;
}
#menu ul {
  list-style-type: none;
  margin: 0;
}
#menu li a {
  display: inline-block;
  color: #0864c7;
}
</style>
