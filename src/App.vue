<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/projects">Projects</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
/* @import '/assets/css/fonts.css'; */
/* @import '../node_modules/bootstrap/scss/bootstrap.scss'; */

html {
  background-color: white;
  margin: 0;
  padding: 0;
  height: 100%;
}
* {
    box-sizing: border-box;
}
a {
  font-family: Nunito-Light;
}

</style>
