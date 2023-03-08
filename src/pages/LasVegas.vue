<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Vegas Travel Guide" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/vegas/vegaslogo.png"
              alt="Chris Barnett"
              style="max-width: 500px"
              contain
            />
          </div>
          <div class="col-12 col-md-8">
            <div
              class-dark="text-white"
              class="text-h2 text-primary q-mt-none q-mb-sm"
            >
              LAS <span>VEGAS</span>
            </div>
            <div class="q-mb-lg">
              Las Vegas Travel Promotion. This promotion was created to help
              promote the city of Las Vegas. The illustration shows off not just
              the city and it's night life but also the beautiful surrounding
              mountains and desert.
            </div>
            <div class="q-mb-sm">
              <span class="text-bold text-primary">Software Used:</span>
            </div>
            <div>
              <q-chip icon="adobe" square>Adobe Illustrator</q-chip>
              <q-chip square icon="adobe">Adobe InDesign</q-chip>
              <q-chip square icon="adobe">Adobe Photoshop</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Logo,
              Book Cover, Book Spine, Poster, and Mockups.
            </div>
          </div>
        </div>

        <q-img class="q-mt-lg" src="../assets/images/vegas/vegasbookmock.jpg" />

        <q-img class="q-mt-xl" src="../assets/images/vegas/vegasbook.png" />
        <q-img
          class="q-mt-xl"
          src="../assets/images/vegas/vegaspostermock.png"
        />
        <q-img class="q-mt-xl" src="../assets/images/vegas/vegasposter.png" />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LasVegas",
});
</script>
