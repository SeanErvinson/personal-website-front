<template>
  <div class="row h-100 align-items-center">
    <div class="col-7 mx-auto">
      <div>
        <h2 class="header">Login</h2>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group id="usernameInputGroup" label="Username" label-for="usernameInput">
          <b-form-input
            id="usernameInput"
            type="text"
            required
            placeholder="Enter username"
            v-model="form.username"
          />
        </b-form-group>
        <b-form-group id="passwordInputGroup" label="Password" label-for="passwordInput">
          <b-form-input
            id="passwordInput"
            type="password"
            required
            placeholder="Enter password"
            v-model="form.password"
          />
        </b-form-group>
        <b-button type="submit" variant="primary">Log In</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { HTTPSecurity } from "../helpers/http-commons";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      HTTPSecurity.post("accounts/login", this.form)
        .then(function(response) {
            if(localStorage.getItem("user") != null){
                localStorage.removeItem("user");
            }
           localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch(function(error) {
          alert(error);
        });
    }
  }
};
</script>

<style>
</style>
