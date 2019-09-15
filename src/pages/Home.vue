<template>
  <div class="row h-100 wrapper">
    <h2 class="header">{{welcome}}</h2>
    <div class="sub-wrapper">
      <ul id="social-links">
        <li class="social-link">
          <a class="icon" target="_blank" :href="twitter">
            <i class="fa-2x fab fa-twitter"></i>
          </a>
        </li>
        <li class="social-link">
          <a class="icon" target="_blank" :href="github">
            <i class="fa-2x fab fa-github"></i>
          </a>
        </li>
        <li class="social-link">
          <a class="icon" target="_blank" :href="linkedin">
            <i class="fa-2x fab fa-linkedin"></i>
          </a>
        </li>
        <li class="social-link">
          <a class="icon" target="_blank" :href="'mailto:'+email">
            <i class="fa-2x fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="sub-wrapper">
      <div id="status">
        <div>
          <h3>currently:</h3>
        </div>
        <div>
          <span>{{status}}</span>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/animate.css";
import { HTTP } from "../helpers/http-commons";
const interval = 3500;
export default {
  created() {
    this.changeWelcome();
    this.fetch_media("twitter").then(value => (this.twitter = value));
    this.fetch_media("github").then(value => (this.github = value));
    this.fetch_media("linkedin").then(value => (this.linkedin = value));
    this.fetch_media("email").then(value => (this.email = value));
  },
  destroyed() {
    clearInterval(this.timerInterval);
  },
  data() {
    return {
      greetings: ["Welcome", "欢迎", "Mabuhay", "ようこそ"],
      index: 1,
      welcome: "Welcome",
      timerInterval: null,
      status: "doing nothing",
      twitter: "",
      github: "",
      email: "",
      linkedin: ""
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
    },
    fetch_media(socialMedia) {
      return HTTP.get("link/" + socialMedia).then(
        response => response.data[0].url
      );
    }
  }
};
</script>
<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.sub-wrapper {
  padding-top: 1em;
  padding: 1em 0.8em 1em 0.8em;
}

#social-links {
  display: inline;
}

.social-link {
  display: inline;
  padding: 0.8em;
}

.icon {
  color: #727272;
}

.icon:hover {
  color: #484848;
}

#status {
  text-align: center;
}
#status span {
  font-size: 1.2em;
}

.line {
  width: 16em;
  max-width: 208px;
  border: 0.5px solid #484848;
}

@media only screen and (max-width: 768px) {
  .line {
    max-width: 168px;
  }
  .fa-2x {
    font-size: 1.5em;
  }
}
</style>
