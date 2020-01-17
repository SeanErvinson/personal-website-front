<template>
  <section id="about">
    <h1>About Me</h1>
    <div class="description">
      <p>Hello there! :^)</p>
      <br />
      <p>
        I started programming
        <span class="odometer odometer-theme-default years"></span>
        {{yearText}} and
        <span class="odometer odometer-theme-default days"></span>
        {{dayText}} ago;
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
import "@/assets/css/odometer-theme-default.css";
import "@/assets/js/odometer.min.js";
import { linkService } from "@/actions";
import SocialLink from "@/components/SocialLink.vue";

const beginningTime = new Date(Date.UTC(2016, 7, 15, 6, 0, 0)).getTime();
const interval = 1000;

export default {
  components: { SocialLink },
  beforeMount() {
    this.timer();
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
  destroyed() {
    clearInterval(this.timerInterval);
  },
  data() {
    return {
      yearText: "year",
      dayText: "day",
      email: "",
      errors: [],
      links: [],
      timerInterval: null
    };
  },
  methods: {
    timer() {
      this.timerInterval = setInterval(() => {
        let currentTime = new Date().getTime();
        var difference = new Date(currentTime - beginningTime);
        var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        var days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
        );
        if (years > 1) this.yearText = "years";
        if (days > 1) this.dayText = "days";
        var yearsElement = document.querySelector(".years");
        var daysElement = document.querySelector(".days");
        var yearOdometer = new Odometer({
          el: yearsElement,
          value: 0,
          format: "d",
          theme: "default",
          duration: 500
        });
        yearOdometer.update(years);
        var dayOdometer = new Odometer({
          el: daysElement,
          value: 0,
          format: "d",
          theme: "default",
          duration: 500
        });
        dayOdometer.update(days);
      }, interval);
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