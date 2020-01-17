<template>
  <div class="tile">
    <div class="tile-heading">
      <div class="title">{{project.title}}</div>
      <div class="links">
        <ProjectLink v-if="project.github" :url="project.github">
          <Icon
            :iconName="project.title + ' Github'"
            viewBox="0 0 24 24"
            class="icon-md action blue-highlight"
          >
            <IconGithub />
          </Icon>
        </ProjectLink>
        <ProjectLink v-if="project.playstore" :url="project.playstore">
          <Icon
            :iconName="project.title + ' Playstore'"
            viewBox="0 0 24 24"
            class="icon-md action blue-highlight"
          >
            <IconPlaystore />
          </Icon>
        </ProjectLink>
        <ProjectLink v-if="project.site" :url="project.site">
          <Icon
            :iconName="project.title + ' Site'"
            viewBox="0 0 24 24"
            class="icon-md action blue-highlight"
          >
            <IconLink />
          </Icon>
        </ProjectLink>
      </div>
    </div>
    <div class="description">{{project.description}}</div>
    <hr />
    <div class="tags">
      <ProjectTag v-for="tag in mappedTags" :key="tag.id" :tag="tag"></ProjectTag>
    </div>
  </div>
</template>

<script>
import ProjectTag from "@/components/Project/ProjectTag";
import ProjectLink from "@/components/Project/ProjectLink";

import Icon from "@/components/shared/Icon";
import IconGithub from "@/components/shared/Icon/icons/IconGithub";
import IconLink from "@/components/shared/Icon/icons/IconLink";
import IconPlaystore from "@/components/shared/Icon/icons/IconPlaystore";

export default {
  components: {
    Icon,
    IconGithub,
    IconLink,
    IconPlaystore,
    ProjectTag,
    ProjectLink
  },
  computed: {
    mappedTags() {
      this.project.tags.map(item => {
        this.tags.push({
          id: item.id,
          name: item.name,
          type: item.tag_type
        });
      });
      return this.tags;
    }
  },
  props: {
    project: Object
  },
  data() {
    return {
      tags: []
    };
  }
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

  .tile-heading {
    display: flex;
  }

  .title {
    font-family: $secondary-font;
    font-size: $smedium;
    font-weight: bold;
    text-align: center;
    flex: 1;
  }

  .description {
    font-size: $small;
    text-align: center;
  }

  .links {
    display: flex;
  }

  .tags {
    display: flex;
    overflow: auto;
    overflow-y: hidden;
  }
}
</style>