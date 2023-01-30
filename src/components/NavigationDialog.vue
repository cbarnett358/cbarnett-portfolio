<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="dialog = true"
    />

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-right"
      transition-hide="slide-down"
    >
      <q-card id="navigation-dialog" class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <div class="justify-center row">
          <q-card-section>
            <div class="text-h1 text">HOME</div>
            <div class="text-h1 text">ABOUT</div>

            <div class="text-h1 text">PROJECTS</div>

            <div class="text-h1 text">CONTACT</div>

            <div class="text-h1 text">RESUME</div>
            <q-avatar class="q-mt-md q-mr-md">
              <img
                src="https://cdn.quasar.dev/img/avatar.png"
                alt="Chris Barnett"
              />
            </q-avatar>

            <q-avatar class="q-mt-md q-mr-md">
              <img
                src="https://cdn.quasar.dev/img/avatar.png"
                alt="Chris Barnett"
              />
            </q-avatar>

            <q-avatar class="q-mt-md q-mr-md">
              <img
                src="https://cdn.quasar.dev/img/avatar.png"
                alt="Chris Barnett"
              />
            </q-avatar>

            <q-avatar class="q-mt-md q-mr-md">
              <img
                src="https://cdn.quasar.dev/img/avatar.png"
                alt="Chris Barnett"
              />
            </q-avatar>

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

  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
    };
  },
});
</script>
