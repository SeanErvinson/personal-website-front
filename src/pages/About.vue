<template>
  <section id="about">
    <h1>About Me</h1>
    <div class="description">
      <p>Hello there! :^)</p>
      <br />
      <p>
        I started programming
        <ICountUp :endVal="years" :options="yearOptions"></ICountUp>&nbsp;and
        <ICountUp :endVal="days" :options="dayOptions"></ICountUp>&nbsp;ago;
        this
        was roughly around the time I started college. I would consider myself as a self-taught programmer even though
        I am currently taking up Information Technology (My school
        <s>sucks</s> is meh).
      </p>
      <br />
      <p>
        I do a lot of C# stuff, but recently I've been using
        <a
          target="_blank"
          href="https://www.python.org/"
        >Python</a> for pretty much everything (Dynamic typing is amazing), and on some occasion I do mobile development using
        <a
          target="_blank"
          href="https://flutter.dev/"
        >Flutter</a>.
      </p>
      <p>
        During my free time, I love exploring new skills such as electronics, server-related,
        machine learning and stuff that interest me.
      </p>
      <br />
      <p>
        If you're interested feel free to check out my
        <router-link to="/projects">stuff</router-link>&nbsp;or
        contact me at
        <a :href="'mailto:' + email">{{email}}</a>.
      </p>
    </div>
    <h4>Elsewhere</h4>
    <ul id="social-links">
      <li v-for="(media, index) in links" :key="index" class="about-social-icon">
        <SocialLink :url="media.url" :name="media.name" />
      </li>
    </ul>
  </section>
</template>

<script>
import ICountUp from "vue-countup-v2";
import { linkService } from "@/actions";
import SocialLink from "@/components/SocialLink.vue";

const beginningTime = new Date(Date.UTC(2016, 7, 15, 6, 0, 0)).getTime();
const interval = 1000;

export default {
  components: { SocialLink, ICountUp },
  beforeMount() {
    this.getPeriod();
    this._fetch_ink("github").then(value =>
      this.links.push({
        name: value.name,
        url: value.site_url
      })
    );
    this._fetch_ink("twitter").then(value =>
      this.links.push({
        name: value.name,
        url: value.site_url
      })
    );
    this._fetch_ink("email").then(value => (this.email = value.username));
  },
  data() {
    return {
      email: "",
      days: 0,
      years: 0,
      errors: [],
      links: []
    };
  },
  computed: {
    yearOptions() {
      return {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        suffix: this.years > 1 ? " years" : " year",
        duration: 5
      };
    },
    dayOptions() {
      return {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        suffix: this.days > 1 ? " days" : " day",
        duration: 3
      };
    }
  },
  methods: {
    getPeriod() {
      let currentTime = new Date().getTime();
      var difference = new Date(currentTime - beginningTime);
      this.days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
      );
      this.years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    },
    _fetch_ink(social) {
      return linkService
        .get(social)
        .then(response => response.data)
        .catch(message => null);
    }
  }
};
</script>

<style lang="scss" scoped>
.description {
  margin: $xxsmall 0;
  p {
    font-size: $small;
    letter-spacing: 0.1rem;
  }
}
h4 {
  font-size: $smedium;
}
#social-links {
  a:hover {
    color: $accent-light-color;
  }
  a:visited {
    color: $accent-dark-color;
  }
}
</style>