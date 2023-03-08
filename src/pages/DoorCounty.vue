<template>
  <q-page class="container q-mx-xl q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el
          class="text-secondary"
          label="Door County Travel Poster"
        />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/doorcounty/doorcountythumb.png"
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
              TRAVEL <span>POSTER</span>
            </div>
            <div class="q-mb-lg">
              Travel poster to promote Door County Wisconsin. Within the poster
              the coordinates point to the famous Cana Island Lighthouse
              featured in the illustration.
            </div>
            <div class="q-mb-sm">
              <span class="text-bold text-primary">Software Used:</span>
            </div>
            <div>
              <q-chip
                icon="adobe"
                color="light-gray"
                text-color="primary"
                square
                >Adobe Illustrator</q-chip
              >
              <q-chip square icon="adobe">Adobe InDesign</q-chip>
              <q-chip square icon="adobe">Adobe Illustrator</q-chip>
              <q-chip square icon="adobe">Adobe Photoshop</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Poster,
              Mockup
            </div>
          </div>
        </div>

        <q-img
          class="q-mt-lg"
          src="../assets/images/doorcounty/doorcounty_postermock.jpg"
        />

        <q-img
          class="q-mt-xl"
          src="../assets/images/doorcounty/DoorCountyPoster.jpg"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoorCounty",
});
</script>
