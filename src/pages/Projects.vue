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
