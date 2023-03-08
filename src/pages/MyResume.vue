<template>
  <q-page class="container q-mx-xl q-my-md q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Resume" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <q-img
          class="q-mt-lg"
          src="../assets/images/personalbrand/cb-resume.png"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyResume",
});
</script>
