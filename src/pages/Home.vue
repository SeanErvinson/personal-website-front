<template>
  <div class="row h-100 justify-content-center align-items-center">
    <h2 class="header">{{welcome}}</h2>
  </div>
</template>

<script>
import "../assets/css/animate.css";
const interval = 3500;
export default {
  created() {
    this.changeWelcome();
  },
  destroyed() {
    clearInterval(this.timerInterval);
  },
  data() {
    return {
      greetings: ["Welcome", "欢迎", "Mabuhay", "ようこそ"],
      index: 1,
      welcome: "Welcome",
      timerInterval: null
    };
  },
  methods: {
    animateCss(element, animationName, callback) {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);
      node.classList.add("fast");

      function handleAnimationEnd() {
        node.classList.remove("animated", animationName);
        node.removeEventListener("animationend", handleAnimationEnd);

        if (typeof callback === "function") callback();
      }

      node.addEventListener("animationend", handleAnimationEnd);
    },
    changeWelcome() {
      this.timerInterval = setInterval(() => {
        this.animateCss(".header", "flipOutX", () => {
          this.welcome = this.greetings[this.index++];
          this.animateCss(".header", "flipInX");
        });
        this.index %= this.greetings.length;
      }, interval);
    }
  }
};
</script>
<style scoped>
</style>
