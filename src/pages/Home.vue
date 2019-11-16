<template>
  <section id="home">
    <h2 class="caption header">{{welcome}}</h2>
    <ul class="social-links">
      <li class="social-link">
        <a target="_blank" :href="twitter">
          <Icon iconName="Twitter" class="icon action" viewBox="0 0 512 512">
            <IconTwitter />
          </Icon>
        </a>
      </li>
      <li class="social-link">
        <a target="_blank" :href="github">
          <Icon iconName="GitHub" class="icon action" viewBox="0 0 24 24">
            <IconGithub />
          </Icon>
        </a>
      </li>
      <li class="social-link">
        <a target="_blank" :href="linkedin">
          <Icon iconName="LinkedIn" class="icon action" viewBox="0 0 448 512">
            <IconLinkedIn />
          </Icon>
        </a>
      </li>
      <li class="social-link">
        <a target="_blank" :href="'mailto:'+email">
          <Icon iconName="Email" class="icon action" viewBox="0 0 24 24">
            <IconMail />
          </Icon>
        </a>
      </li>
    </ul>
    <div id="twitter-status">
      <h3>currently:</h3>
      <span class="status caption">{{status}}</span>
      <div class="line"></div>
      <p>via: Twitter update</p>
    </div>
  </section>
</template>

<script>
import "../assets/css/animate.css";
import { HTTP } from "../helpers/http-commons";
import Icon from "@/components/shared/Icon";
import IconGithub from "@/components/shared/Icon/icons/IconGithub";
import IconTwitter from "@/components/shared/Icon/icons/IconTwitter";
import IconMail from "@/components/shared/Icon/icons/IconMail";
import IconLinkedIn from "@/components/shared/Icon/icons/IconLinkedIn";

const interval = 3500;
export default {
  components: {
    Icon,
    IconGithub,
    IconTwitter,
    IconMail,
    IconLinkedIn
  },
  data: function() {
    return {
      greetInterval: null,
      twitterStatusInterval: null,
      greetings: ["Welcome", "欢迎", "Mabuhay", "ようこそ"],
      status: "doing nothing",
      welcome: "",
      twitter_updates: [],
      twitter: "",
      github: "",
      email: "",
      linkedin: ""
    };
  },
  beforeMount() {
    this._fetchTwitterUpdate();
    this.changeTwitterStatus();
    this.changeWelcome();
    this.fetch_media("twitter").then(value => (this.twitter = value));
    this.fetch_media("github").then(value => (this.github = value));
    this.fetch_media("linkedin").then(value => (this.linkedin = value));
    this.fetch_media("email").then(value => (this.email = value));
  },
  destroyed() {
    clearInterval(this.greetInterval);
    clearInterval(this.twitterStatusInterval);
  },
  created() {
    this.welcome = this.greetings[0];
  },
  methods: {
    _fetchTwitterUpdate() {
      fetch("https://seanervinson.com/api/v1/tasks/twitter/status")
        .then(response => response.json())
        .then(json => this.twitter_updates.push(...json.results));
    },
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
      var index = 1;
      if (this.greetings.length === 0) {
        return false;
      }
      this.greetInterval = setInterval(() => {
        this.animateCss(".header", "flipOutX", () => {
          this.welcome = this.greetings[index++];
          this.animateCss(".header", "flipInX");
        });
        index %= this.greetings.length;
      }, interval);
    },
    changeTwitterStatus() {
      var index = 0;
      if (this.twitter_updates.length === 0) {
        return false;
      }
      this.twitterStatusInterval = setInterval(() => {
        this.animateCss(".status", "rollOut", () => {
          this.status = this.twitter_updates[index++];
          this.animateCss(".status", "rollIn");
        });
        index %= this.twitter_updates.length;
      }, (Math.random() + 1) * interval);
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
#home {
  text-align: center;
}

.social-links {
  display: flex;
}

.social-link {
  padding: 0.8em;
}

.caption {
  height: 100%;
  max-height: 2rem;
}
#twitter-status span {
  font-size: 1.23em;
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
