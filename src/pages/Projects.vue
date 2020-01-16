<template>
  <section id="projects">
    <h2 class="header">My Projects</h2>
    <ProjectList :projects="items"></ProjectList>
  </section>
</template>

<script>
import ProjectList from "@/components/Project/ProjectList";

export default {
  components: {
    ProjectList
  },
  data() {
    return {
      items: [
        {
          title: "TextLint",
          github: "https://github.com/SeanErvinson/text-lint-web",
          site: "http://app.seanervinson.com/textlint/",
          playstore: null
        },
        {
          title: "NuWo - Number to Word Converter",
          github: "https://github.com/SeanErvinson/NumbersToWords",
          site: null,
          playstore: null
        },
        {
          title: "Protect It",
          github: null,
          site: null,
          playstore:
            "https://play.google.com/store/apps/details?id=com.SheepLabs.ProtectIt"
        },
        {
          title: "seanervinson.com",
          github: null,
          site: "https://www.seanervinson.com",
          playstore: null
        },
        {
          title: "interrogate.me",
          github: "https://github.com/SeanErvinson/interrogate-me-web",
          site: null,
          playstore: null
        }
      ]
    };
  }
};
</script>

<style scoped>
#projects {
  width: 100%;
}
.table-wrapper {
  width: 100%;
  overflow: auto;
}
.project-table {
  text-align: center;
  width: 100%;
}

.project-table thead th:first-child,
.project-table tbody td:first-child {
  text-align: left;
}

.project-table thead th {
  width: 10%;
}

.project-table thead th:first-child {
  width: 70%;
}

.project-table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.02);
}
.project-table td,
.project-table th {
  padding: 4px;
}
</style>
