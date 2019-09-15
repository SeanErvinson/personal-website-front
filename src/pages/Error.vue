<template>
  <div class="row h-100 align-items-center">
    <div class="col-6 mx-auto">
      <h1 class="error header">Oh no (|:^O</h1>
      <div class="error-description">
        <p>This page cannot be found | Error 404</p>
        <p>Here, let me help you get back.</p>
        <router-link class="return-home" to="/">CANDY</router-link>
      </div>
      <div class="pt-3">
        <h6>
          <strong>Fun Fact:</strong> I'm really bad at html, css, and front-end stuff and design in general.
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #ff5146;
}
.error-description {
  font-size: 1.4em;
}
.return-home {
  color: #0078d7;
}
.description,
.error-description {
  font-family: "Didact Gothic";
}
</style>
