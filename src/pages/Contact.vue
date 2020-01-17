<template>
  <section id="contact">
    <h1>Contact me</h1>
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
      <button class="action">Send</button>
    </form>
    <div class="prompt success" v-bind:class="{expand : show, success: success, failure : failure}">
      <p v-if="show">{{statusMessage}}</p>
      <span v-on:click="show = !show" class="action" v-if="show">&#9747;</span>
    </div>
  </section>
</template>

<script>
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
    clearInput() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    onSubmit(evt) {
      mailService
        .post("/", JSON.stringify(this.form))
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
<style lang="scss" scoped>
#contact {
  width: 100%;
  .prompt {
    transition: height 0.5s ease-in-out;
    height: 0px;
    color: #ffffff;
    border-radius: 6px;
    &.expand {
      display: flex;
      height: $mlarge;
      padding: 0 $xxsmall;
      & p {
        flex: 1;
        font-size: $small;
      }
    }
    &.success {
      background: #04c986;
    }
    &.failure {
      background: #d75221;
    }
  }
  form {
    label {
      display: block;
    }
    input,
    textarea {
      display: block;
      width: 100%;
      padding: 0.3rem 0.5rem;
      border: 1px solid #c3c3c3;
      border-radius: 6px;
      &:focus {
        outline: 1px solid #007bff;
      }
    }
    textarea {
      min-width: 100%;
      min-width: 100%;
      min-height: 240px;
      max-height: 400px;
    }
    button {
      background: #333;
      color: white;
      border: none;
      padding: 0.3rem 0.8rem;
      border-radius: 6px;
      width: 100%;
      &:active {
        background: #4b4b4b;
      }
      &:hover {
        background: #686868;
      }
    }
  }
}
</style>
