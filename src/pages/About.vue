<template>
  <div class="row h-100 align-items-center">
    <div class="col-10 mx-auto">
      <h2 class="header">About Me</h2>
      <div class="description">
        <p>Hello there! :^)</p>
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
        <p>I do a lot of C# stuff, and I occasionally try android development and game development.</p>
        <p>
          During my free time, I love exploring new skills such as electronics, server-related,
          machine learning and stuff that interest me.
        </p>
        <p>
          If you're interested feel free to check out my
          <router-link to="/projects">stuff</router-link> or
          contact me at
          <a :href="'mailto:' + emailLink">{{emailLink}}</a>.
        </p>
      </div>
      <!-- <h4 class="header">Elsewhere</h4> -->
      <ul id="about-social-links">
        <li v-for="(media, index) in medias" :key="index" class="about-social-icon">
          <social-links :url="media.url" :label="media.title" :svg="media.imageLocation"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "../assets/css/odometer-theme-default.css";
import "../assets/js/odometer.min.js";

const beginningTime = new Date(Date.UTC(2016, 7, 15, 6, 0, 0)).getTime();
const interval = 1000;

export default {
  beforeMount() {
    this.timer();
  },
  destroyed() {
    clearInterval(this.timerInterval);
  },
  data() {
    return {
      yearText: "year",
      dayText: "day",
      emailLink: "seanervinsonong@gmail.com",
      medias: [],
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
    }
  }
};
</script>

<style scoped>
.description {
  font-size: 1.1em;
  letter-spacing: 0.1em;
}
</style>