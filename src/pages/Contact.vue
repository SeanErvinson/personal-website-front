<template>
  <div class="row h-100 align-items-center">
    <div class="col-8 mx-auto">
      <div class="header-space">
        <h2 class="header">Contact me</h2>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group id="nameFieldGroup">
          <b-form-input id="nameField" type="text" v-model="form.name" required placeholder="Name"/>
        </b-form-group>
        <b-form-group id="emailFieldGroup">
          <b-form-input
            id="emailField"
            type="email"
            v-model="form.email"
            required
            placeholder="Email"
          />
        </b-form-group>
        <b-form-group id="messageFieldGroup" description="Come say hi!">
          <b-form-textarea
            id="messageField"
            placeholder="Message"
            v-model="form.message"
            rows="5"
            max-rows="6"
          />
        </b-form-group>
        <b-button type="submit" variant="dark">Send</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style scoped>
.header-space{
    padding-bottom: 20px;
}
</style>
