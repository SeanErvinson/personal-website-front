<template>
  <div class="tile">
    <div class="title">{{project.title}}</div>
    <div class="description">{{project.description}}</div>
    <hr />
    <div class="tags">
      <ProjectTag :tag="tag"></ProjectTag>
      <ProjectTag :tag="tag2"></ProjectTag>
      <ProjectTag :tag="tag3"></ProjectTag>
      <ProjectTag :tag="tag4"></ProjectTag>
      <ProjectTag :tag="tag5"></ProjectTag>
    </div>
  </div>
</template>

<script>
import ProjectTag from "@/components/Project/ProjectTag";
export default {
  components: {
    ProjectTag
  },
  props: {
    project: Object
  },
};
</script>

<style lang="scss" scoped>
.tile {
  box-shadow: $light-box-shadow;
  border-radius: $xxsmall;
  padding: $xxsmall $xsmall;
  transition: all 0.15s ease-in-out;
  &:hover {
    transform: scale($grow-scale);
  }

  .title {
    font-family: $secondary-font;
    font-size: $smedium;
    font-weight: bold;
    text-align: center;
  }

  .description {
    font-size: $small;
    text-align: center;
  }

  .tags {
    display: flex;
    overflow: auto;
    overflow-y: hidden;
  }
}
</style>