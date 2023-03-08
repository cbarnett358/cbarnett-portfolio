<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Golf Character GIF" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="container">
          <div
            class-dark="text-white"
            class="text-h2 text-primary q-mt-none q-mb-sm"
          >
            GOLF CHARACTER <span>GIF</span>
          </div>
          <div class="q-mb-lg">
            Simple animation of an original golf ball character. The character
            and background scenery were created in Adobe Illustrator and
            animated in Adobe Animate.
          </div>
          <div class="q-mb-sm">
            <span class="text-bold text-primary">Software Used:</span>
          </div>
          <div>
            <q-chip icon="adobe" color="light-gray" text-color="primary" square
              >Adobe Illustrator</q-chip
            >
            <q-chip square icon="adobe">Adobe Animate</q-chip>
          </div>
          <div class="q-mt-lg">
            <span class="text-bold text-primary">Deliverables:</span> Gif File
          </div>

          <div class="q-mt-lg">
            <q-img
              class="contain"
              src="../assets/images/animations/golfballguy.gif"
              alt="Chris Barnett"
              contain
            />
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GolfBallAnimation",
});
</script>
