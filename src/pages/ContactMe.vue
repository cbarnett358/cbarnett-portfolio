<template>
  <q-page class="container q-mx-xl q-mb-none q-mt-lg">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Contact Me" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="q-mb-lg text-h2 text-secondary">
          LET'S<span> CHAT</span>
        </div>

        <q-form ref="form" @submit.prevent="sendEmail" class="q-gutter-md">
          <q-input
            color="secondary"
            filled
            type="text"
            name="user_name"
            v-model="user_name"
            label="Name"
            hint="What's your name?"
            lazy-rules
            :rules="[(val) => val.length > 0 || 'Please type something']"
          />

          <q-input
            color="secondary"
            filled
            v-model="email"
            name="user_email"
            label="Email"
            hint="What's your email?"
            lazy-rules
            :rules="[(val) => val.length > 0 || 'Please type something']"
          />

          <q-input
            color="secondary"
            filled
            label="Message"
            name="message"
            v-model="message"
            hint="What's your message?"
            lazy-rules
            :rules="[(val) => val.length > 0 || 'Please type something']"
          />

          <div class="row justify-end">
            <q-btn
              icon="send"
              label="Send Message"
              type="submit"
              color="secondary"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "ContactMe",

  data() {
    return {
      user_name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    sendEmail() {
      emailjs

        .sendForm(
          "service_qh9trkf",
          "template_zzf5i2s",
          this.$refs.form.$el,

          "3SnUs-7tdrOK9w-Ac"
        )

        .then(
          (result) => {
            console.log(result.text);

            //send success message
            this.$q.notify({
              message: "Email sent successfully",
              color: "positive",
              position: "top",
              timeout: 3000,
            });
          },
          (error) => {
            console.log(error.text);

            this.$q.notify({
              message: "Email not sent",
              color: "negative",
              position: "top",
              timeout: 2000,
            });

            this.$refs.form.resetValidation();
          }
        );

      //send
    },
  },
});
</script>
