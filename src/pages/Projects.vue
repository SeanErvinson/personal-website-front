<template>
  <section id="projects">
    <h2 class="header">My Projects</h2>
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
      projectService.get("/").then(response => {
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
      });
    }
  },
  data() {
    return {
      next: "",
      previous: "",
      count: 0,
      projects: []
    };
  }
};
</script>

<style lang="scss" scoped>
#projects {
  width: 100%;
}
</style>
