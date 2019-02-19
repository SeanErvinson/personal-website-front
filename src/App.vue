<template>
  <div id="app">
    <nav id="menu">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="#"></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto justify-content-end">
            <NavMenu></NavMenu>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
    <div class="container h-75">
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
  height: 100% !important;
}
p {
  font-family: "Didact Gothic-Regular";
}

.h-75 {
  height: 75% !important;
}

html,
body {
  height: 100%;
  font-size: 16px;
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
  font-family: "SawarabiGothic-Regular";
  letter-spacing: 0.32em;
  line-height: 1;
  font-weight: 600;
}
/* Menu */
#menu {
  margin-right: 30px;
  letter-spacing: 8px;
  padding-top: 20px;
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
.nav-item {
  text-align: right;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.02);
}
.icon {
  width: 24px;
  height: auto;
}
.table-links-data {
  width: 2em;
  height: auto;
}
.highlight:hover {
  fill: #0864c7;
}
.icon.disabled {
  opacity: 0.2;
  fill: #545251;
}

@media only screen and (max-width: 768px) {
  #menu {
    padding-bottom: 40px;
    padding-top: 20px;
    margin-right: 20px;
  }
}
</style>
