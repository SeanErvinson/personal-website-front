<template>
  <a class="socialLink" target="_blank" :href="url">
    <img v-if="src != null" class="socialIcon" :src="src">
    <span class="socialLabel">{{name}}</span>
  </a>
</template>
<script>
export default {
  props: ["name", "url", "src"],
};
</script>
<style scoped>

.socialIcon {
  width: 1em;
  padding: 0px 10px;
}
</style>
