<template>
  <div class="tag" :style="changeBackgroundColor">
    <p class="name">{{ tag.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tag: Object
  },
  computed: {
    changeBackgroundColor() {
      let backgroundColor = "";
      if (this.tag.type === "L") {
        backgroundColor = "#EFC726";
      }
      if (this.tag.type === "C") {
        backgroundColor = "#247BA0";
      }
      return { background: backgroundColor };
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.tag {
  flex-shrink: 0;
  width: 100%;
  max-width: 104px;
  height: 100%;
  max-height: 40px;
  border-radius: $large;
  overflow: hidden;
  padding: $xxsmall;
  .name {
    font-family: $secondary-font;
    text-overflow: ellipsis;
    text-align: center;
    color: $white-color;
  }
  & + & {
    margin-left: $xxsmall;
  }
}
</style>