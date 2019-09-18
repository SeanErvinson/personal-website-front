<template>
  <div class="row h-100 align-items-center">
    <div class="col-8 mx-auto">
      <div class="header-space">
        <h2 class="header">Contact me</h2>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group id="nameFieldGroup">
          <b-form-input id="nameField" type="text" v-model="form.name" required placeholder="Name" />
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
      <div id="prompt" v-bind:class="{expand : show, success: success, failure : failure}">
        <div class="row status">
          <span>{{statusMessage}}</span>
          <span class="ml-auto" v-on:click="closePrompt">X</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../helpers/http-commons";
export default {
  data() {
    return {
      show: false,
      success: false,
      failure: false,
      statusMessage: "",
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    closePrompt() {
      this.show = false;
    },
    clearInput() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    onSubmit(evt) {
      HTTP.post("mail", JSON.stringify(this.form))
        .then(response => {
          this.show = true;
          if (response.status == 200) {
            this.statusMessage = "Successfully sent!";
            this.success = true;
          } else {
            this.statusMessage =
              "Something went wrong. Please try again later, Sorry";
            this.failure = true;
          }
        })
        .catch(error => {
          this.statusMessage =
            "Something went wrong. Please try again later, Sorry. " + error;
          this.failure = true;
        });
      this.clearInput();
      evt.preventDefault();
    }
  }
};
</script>

<style scoped>
.header-space {
  padding-bottom: 20px;
}
.status {
  padding: 0px 16px;
}
#prompt {
  height: 0px;
  width: 100%;
  overflow: hidden;
  position: relative;
  transition: height 0.25s;
}

#prompt.expand {
  height: 5.2vh;
  padding: 8px 16px;
  color: #ffffff;
}

#prompt.expand.success {
  background: #04c986;
  border: 1px solid #157c59;
}

#prompt.expand.failure {
  background: #d75221;
  border: 1px solid #7c2815;
}
</style>
