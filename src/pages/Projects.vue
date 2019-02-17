<template>
  <div class="row align-items-center">
    <div class="col-10 mx-auto">
      <h2 class="header">My Projects</h2>
      <b-table
        responsive
        :borderless="true"
        :striped="true"
        :fields="fields"
        :items="items"
        :tbody-tr-class="rowClass"
      >
        <template slot="github" slot-scope="data">
          <template v-if="data.value">
            <a :href="data.value" target="_blank">
              <simple-svg class="icon highlight" :filepath="circle" :width="'24px'" :height="'24px'"/>
            </a>
          </template>
          <template v-else>
            <simple-svg class="icon disabled" :filepath="circle" :width="'24px'" :height="'24px'"/>
          </template>
        </template>
        <template slot="link" slot-scope="data">
          <template v-if="data.value">
            <a :href="data.value" target="_blank">
              <simple-svg class="icon highlight" :filepath="square" :width="'24px'" :height="'24px'"/>
            </a>
          </template>
          <template v-else>
            <simple-svg class="icon disabled" :filepath="square" :width="'24px'" :height="'24px'"/>
          </template>
        </template>
        <template slot="playStore" slot-scope="data">
          <template v-if="data.value">
            <a :href="data.value" target="_blank">
              <simple-svg class="icon highlight" :filepath="triangle" :width="'24px'" :height="'24px'"/>
            </a>
          </template>
          <template v-else>
            <simple-svg class="icon disabled" :filepath="triangle" :width="'24px'" :height="'24px'"/>
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
          tdClass: 'table-links-data'
        },
        link: {
          label: require("../assets/images/link.svg"),
          tdClass: 'table-links-data'
        },
        playStore: {
          label: require("../assets/images/playstore.svg"),
          tdClass: 'table-links-data'
        }
      },
      items: [
        {
          title: "Hello",
          github: null,
          link: "Dickerson",
          playStore: "Macdonald"
        },
        {
          title: "World",
          github: "github 2",
          link: "Dickerson",
          playStore: "Macdonald"
        },
        {
          title: "Bye",
          github: "github 3",
          link: null,
          playStore: "Macdonald"
        }
      ]
    };
  },
  methods: {
    rowClass(item, type) {
      if (!item) return;
      if (this.items.indexOf(item) % 3 == 0) {
        return "table-light-striped";
      }
    }
  }
};
</script>

<style scoped>
</style>
