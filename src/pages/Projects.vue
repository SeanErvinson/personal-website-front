<template>
  <section id="projects">
    <h2 class="header">My Projects</h2>
    <table class="project-table">
      <thead>
        <th>Title</th>
        <th>
          <Icon viewBox="0 0 24 24" class="icon">
            <IconGithub />
          </Icon>
        </th>
        <th>
          <Icon viewBox="0 0 24 24" class="icon">
            <IconLink />
          </Icon>
        </th>
        <th>
          <Icon viewBox="0 0 24 24" class="icon">
            <IconPlaystore />
          </Icon>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.title">
          <td>{{item.title}}</td>
          <td>
            <a :href="item.github" target="_blank">
              <Icon
                :iconName="item.title + ' Github'"
                viewBox="0 0 24 24"
                class="icon action blue-highlight"
                :class="{disabled: item.github === null}"
              >
                <IconCircle />
              </Icon>
            </a>
          </td>
          <td>
            <a :href="item.link" target="_blank">
              <Icon
                :iconName="item.title + ' Link'"
                viewBox="0 0 24 24"
                class="icon action blue-highlight"
                :class="{disabled: item.link === null}"
              >
                <IconSquare />
              </Icon>
            </a>
          </td>
          <td>
            <a :href="item.playStore" target="_blank">
              <Icon
                :iconName="item.title + ' PlayStore'"
                viewBox="0 0 24 24"
                class="icon action blue-highlight"
                :class="{disabled: item.playStore === null}"
              >
                <IconTriangle />
              </Icon>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Icon from "@/components/shared/Icon";
import IconCircle from "@/components/shared/Icon/icons/IconCircle";
import IconSquare from "@/components/shared/Icon/icons/IconSquare";
import IconTriangle from "@/components/shared/Icon/icons/IconTriangle";
import IconGithub from "@/components/shared/Icon/icons/IconGithub";
import IconLink from "@/components/shared/Icon/icons/IconLink";
import IconPlaystore from "@/components/shared/Icon/icons/IconPlaystore";

export default {
  components: {
    Icon,
    IconCircle,
    IconSquare,
    IconTriangle,
    IconGithub,
    IconLink,
    IconPlaystore
  },
  data() {
    return {
      items: [
        {
          title: "TextLint",
          github: "https://github.com/SeanErvinson/text-lint-web",
          link: "http://app.seanervinson.com/textlint/",
          playStore: null
        },
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
          github: "https://github.com/SeanErvinson/interrogate-me-web",
          link: null,
          playStore: null
        }
      ]
    };
  }
};
</script>

<style scoped>
#projects {
  width: 90%;
}
.project-table {
  width: 100%;
  text-align: center;
}

.project-table thead th:first-child,
.project-table tbody td:first-child {
  text-align: left;
}

.project-table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.02);
}
.project-table td,
.project-table th {
  padding: 4px;
}
</style>
