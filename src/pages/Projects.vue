<template>
  <div class="row h-100 align-items-center">
    <div class="col-10 mx-auto">
      <h2 class="header">My Projects</h2>
      <b-table responsive :borderless="true" :striped="true" :fields="fields" :items="items">
        <template slot="github" slot-scope="data">
          <template v-if="data.value">
            <a :href="data.value" target="_blank">
              <simple-svg
                class="icon highlight"
                :filepath="circle"
                :width="'24px'"
                :height="'24px'"
              />
            </a>
          </template>
          <template v-else>
            <simple-svg class="icon disabled" :filepath="circle" :width="'24px'" :height="'24px'"/>
          </template>
        </template>
        <template slot="link" slot-scope="data">
          <template v-if="data.value">
            <a :href="data.value" target="_blank">
              <simple-svg
                class="icon highlight"
                :filepath="square"
                :width="'24px'"
                :height="'24px'"
              />
            </a>
          </template>
          <template v-else>
            <simple-svg class="icon disabled" :filepath="square" :width="'24px'" :height="'24px'"/>
          </template>
        </template>
        <template slot="playStore" slot-scope="data">
          <template v-if="data.value">
            <a :href="data.value" target="_blank">
              <simple-svg
                class="icon highlight"
                :filepath="triangle"
                :width="'24px'"
                :height="'24px'"
              />
            </a>
          </template>
          <template v-else>
            <simple-svg
              class="icon disabled"
              :filepath="triangle"
              :width="'24px'"
              :height="'24px'"
            />
          </template>
        </template>

        <template slot="HEAD_github" slot-scope="data">
          <simple-svg class="icon" :filepath="data.label" :width="'24px'" :height="'24px'"/>
        </template>
        <template slot="HEAD_link" slot-scope="data">
          <simple-svg class="icon" :filepath="data.label" :width="'24px'" :height="'24px'"/>
        </template>
        <template slot="HEAD_playStore" slot-scope="data">
          <simple-svg class="icon" :filepath="data.label" :width="'24px'" :height="'24px'"/>
        </template>
      </b-table>
      <p>Note: Website is under construction. API endpoint currently not working</p>
    </div>
  </div>
</template>

<script>
import { SimpleSVG } from "vue-simple-svg";
export default {
  components: { "simple-svg": SimpleSVG },
  data() {
    return {
      triangle: require("../assets/images/triangle.svg"),
      square: require("../assets/images/square.svg"),
      circle: require("../assets/images/circle.svg"),
      fields: {
        title: {
          label: "Title",
          sortable: true
        },
        github: {
          label: require("../assets/images/github.svg"),
          tdClass: "table-links-data"
        },
        link: {
          label: require("../assets/images/link.svg"),
          tdClass: "table-links-data"
        },
        playStore: {
          label: require("../assets/images/playstore.svg"),
          tdClass: "table-links-data"
        }
      },
      items: [
        {
          title: "NuWo - Number to Word Converter",
          github: "https://github.com/SeanErvinson/NumbersToWords",
          link: null,
          playStore: null
        },
        {
          title: "Protect It",
          github: null,
          link: null,
          playStore:
            "https://play.google.com/store/apps/details?id=com.SheepLabs.ProtectIt"
        },
        {
          title: "seanervinson.com",
          github: null,
          link: "https://www.seanervinson.com",
          playStore: null
        },
        {
          title: "interrogate.me",
          github: "https://github.com/SeanErvinson/Interrogate-me/tree/master/InterrogateMe.Web",
          link: null,
          playStore: null
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
