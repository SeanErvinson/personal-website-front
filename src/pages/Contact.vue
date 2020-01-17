<template>
  <section id="contact">
    <h2 class="header">Contact me</h2>
    <form @submit="onSubmit" action>
      <label for="nameField">
        <span>Name</span>
        <input id="nameField" name="name" v-model="form.name" type="text" placeholder="Bob Ross" />
      </label>
      <label for="emailField">
        <span>Email</span>
        <input
          id="emailField"
          name="email"
          v-model="form.email"
          type="email"
          placeholder="notbobross@gmail.com"
        />
      </label>
      <label for="nameField">
        <span>Message</span>
        <textarea
          name="message"
          v-model="form.message"
          id="messageField"
          cols="30"
          rows="10"
          placeholder="Hello there!"
        ></textarea>
      </label>
      <button>Send</button>
    </form>
    <div class="prompt success" v-bind:class="{expand : show, success: success, failure : failure}">
      {{statusMessage}}
      <span v-on:click="closePrompt">&#9747;</span>
    </div>
  </section>
</template>

<script>
import { HTTP } from "../helpers/http-commons";
import { mailService } from "@/actions";
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
      mailService.post("/", JSON.stringify(this.form))
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
.prompt {
  height: 0px;
  letter-spacing: 0.1rem;
  color: #ffffff;
  border-radius: 6px;
  transition: height 0.25s;
}
.prompt.expand {
  display: flex;
  padding: 0.4rem 0.7rem;
  height: 5.2vh;
  justify-content: space-between;
}

.prompt.success {
  background: #04c986;
}
.prompt.failure {
  background: #d75221;
}
#contact {
  width: 85%;
}
form label {
  display: block;
}
form label input,
form label textarea {
  display: block;
  width: 100%;
  padding: 0.3rem 0.5rem;
  border: 1px solid #c3c3c3;
  border-radius: 6px;
}
form label input:focus,
form label textarea:focus {
  outline: 1px solid #007bff;
}
form button {
  background: #333;
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  width: 100%;
}
form button:active {
  background: #4b4b4b;
}
form textarea {
  min-width: 100%;
  min-width: 100%;
  min-height: 240px;
  max-height: 400px;
}
.status {
  padding: 0px 16px;
}
</style>
