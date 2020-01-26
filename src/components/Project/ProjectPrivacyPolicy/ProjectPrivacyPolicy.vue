<template>
  <div id="privacy-policy" v-html="content"></div>
</template>

<script>
import { projectService } from "@/actions";
export default {
  data() {
    return {
      content: ""
    };
  },
  beforeMount() {
    this._fetchPrivacyPolicy();
  },
  methods: {
    _fetchPrivacyPolicy() {
      return projectService
        .get(`${this.$route.params.slug}`)
        .then(response => (this.content = response.data.privacy_policy))
        .catch(message => null);
    }
  }
};
</script>

<style lang="scss" scoped>
#privacy-policy {
  padding: $medium 0;
}
</style>