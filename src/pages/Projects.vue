<template>
  <section id="projects">
    <h1>My Projects</h1>
    <h4 v-if="errorMessage.length > 1">{{errorMessage}}</h4>
    <ProjectList :projects="projects"></ProjectList>
  </section>
</template>

<script>
import ProjectList from "@/components/Project/ProjectList";
import { projectService } from "@/actions";

export default {
  beforeMount() {
    this._fetchProjects();
  },
  components: {
    ProjectList
  },
  methods: {
    _fetchProjects() {
      projectService
        .get("/")
        .then(response => {
          this.next = response.data.next;
          this.previous = response.data.previous;
          response.data.results.map(item => {
            this.projects.push({
              title: item.title,
              slug: item.slug,
              github: item.github_url,
              playstore: item.playstore_url,
              site: item.site_url,
              tags: item.tags,
              created_on: item.created_on
            });
          });
          this.count = response.data.count;
        })
        .catch(error => {
          this.errorMessage =
            "Uh oh! There seems to be a problem with the server.";
        });
    }
  },
  data() {
    return {
      next: "",
      previous: "",
      count: 0,
      projects: [],
      errorMessage: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#projects {
  width: 100%;
}
</style>
