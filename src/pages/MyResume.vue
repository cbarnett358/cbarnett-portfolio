<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-my-lg">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Resume" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <q-img
          @click="dialog = true"
          src="../assets/images/personalbrand/cb-resume.png"
        />

        <q-dialog v-model="dialog" maximized>
          <q-card>
            <q-bar class="bg-secondary" size="xl">
              <q-space />

              <q-btn
                dense
                flat
                class="text-white"
                icon="cancel"
                v-close-popup
                size="lg"
                id="nav-btn"
              >
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section>
              <q-img src="../assets/images/personalbrand/cb-resume.png" />
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyResume",
  data() {
    return {
      dialog: false,
      toolbar: false,
    };
  },
});
</script>
