<template>
  <div class="q-pl-none">
    <q-btn
      flat
      dense
      square
      id="nav-btn"
      icon="menu"
      aria-label="Menu"
      size="lg"
      @click="dialog = true"
    />

    <q-dialog
      v-model="dialog"
      :maximized="maximizedToggle"
      transition-show="slide-right"
      transition-hide="slide-right"
    >
      <q-card id="navigation-dialog" class="text-white">
        <q-bar class="bg-secondary" size="xl">
          <q-space />

          <q-btn dense flat icon="cancel" v-close-popup size="xl" id="nav-btn">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <div class="justify-center row text-center">
          <q-card-section>
            <router-link to="/">
              <div class="text-h4 text" to="/">HOME</div>
            </router-link>

            <q-separator color="accent " />

            <router-link to="/about">
              <div class="text-h4 text">ABOUT</div>
            </router-link>

            <q-separator color="accent" />

            <router-link to="/contact">
              <div class="text-h4 text">CONTACT</div>
            </router-link>
            <q-separator color="accent" />

            <router-link to="/resume">
              <div class="text-h4 text">RESUME</div>
            </router-link>
            <q-separator color="accent" />
            <div class="q-mt-md">
              <q-btn
                target="_blank"
                round
                class="bg-secondary my-button"
                href="https://www.linkedin.com/in/chrisb-designs"
              >
                <q-avatar size="32px" square text-color="white">
                  <q-icon name="fab fa-linkedin-in"></q-icon>
                </q-avatar>
              </q-btn>
              <q-btn
                target="_blank"
                round
                class="q-mx-sm bg-secondary"
                href="https://www.behance.net/chrisb-designs"
              >
                <q-avatar size="32px" square text-color="white">
                  <q-icon name="fab fa-behance"></q-icon>
                </q-avatar>
              </q-btn>
              <q-btn
                id="my-button"
                target="_blank"
                round
                class="bg-secondary"
                href="https://github.com/cbarnett358"
              >
                <q-avatar size="32px" square text-color="white">
                  <q-icon name="fab fa-github"></q-icon>
                </q-avatar>
              </q-btn>
            </div>

            <q-space />
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavigationDialog",

  //have buttons open  links in new tab

  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
    };
  },

  //close dialog when clicking link
});
</script>
