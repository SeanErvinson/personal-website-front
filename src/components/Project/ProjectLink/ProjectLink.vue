<template>
  <div class="link-container">
    <a :href="url" target="_blank">
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  }
};
</script>
<style lang="scss" scoped>
.link-container {
  & + & {
    margin-left: $xxsmall;
  }
}
</style>