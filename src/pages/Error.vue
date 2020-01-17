<template>
  <section id="error">
    <h1>Oh no (|:^O</h1>
    <div class="description">
      <p>This page cannot be found | Error 404</p>
      <p>Here, let me help you get back.</p>
      <router-link class="return-home" to="/">CANDY</router-link>
    </div>
    <h6>
      <strong>Fun Fact:</strong> I'm really bad at html, css, and front-end stuff and design in general.
    </h6>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#error {
  text-align: center;
  h1 {
    font-family: $secondary-font, sans-serif;
    font-weight: bold;
    color: $error-color;
  }
  .description {
    font-family: $primary-font;
    p {
      font-size: $smedium;
    }
    .return-home {
      color: $success-color;
      font-size: $mlarge;
    }
  }
}
</style>