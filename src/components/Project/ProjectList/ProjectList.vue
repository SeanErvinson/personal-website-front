<template>
  <div class="project-list">
    <ProjectTile v-for="project in projects" :key="project.id" :project="project"></ProjectTile>
  </div>
</template>

<script>
import ProjectTile from "@/components/Project/ProjectTile";
export default {
  props: {
    projects: Array
  },
  components: {
    ProjectTile
  }
};
</script>
<style lang="scss" scoped>
.project-list {
  display: grid;
  column-gap: $small;
  row-gap: $small;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: $mediaBp2Width) {
  .project-list {
    grid-template-columns: 1fr;
  }
}
</style>