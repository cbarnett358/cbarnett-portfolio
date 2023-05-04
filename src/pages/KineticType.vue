<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Kinetic Typography" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="container">
          <div
            class-dark="text-white"
            class="text-h2 text-primary q-mt-none q-mb-sm"
          >
            KINETIC <span>TYPOGRAPHY</span>
          </div>
          <div class="q-mb-lg">
            Animated kinetic typography music video created in Adobe After
            Effects for Imagine Dragons' song "Enemy".
          </div>
          <div class="q-mb-sm">
            <span class="text-bold text-primary">Software Used:</span>
          </div>
          <div>
            <q-chip icon="adobe" color="light-gray" text-color="primary" square
              >Adobe After Effects</q-chip
            >
          </div>
          <div class="q-mt-lg">
            <span class="text-bold text-primary">Deliverables:</span> MP4 File
          </div>

          <div class="q-mt-lg">
            <div>
              <q-video
                :ratio="16 / 9"
                src="https://www.youtube.com//embed/xmnYea1EIWM"
              />
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KineticType",
});
</script>
