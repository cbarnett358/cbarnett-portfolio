<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Nike Golf Posters" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="container">
          <div
            class-dark="text-white"
            class="text-h2 text-primary q-mt-none q-mb-sm"
          >
            GOLF <span>POSTERS</span>
          </div>
          <div class="q-mb-lg">
            A series of ads both print and digital for Nike Golf. Design
            features the players name in a large font and a large image of the
            player along with their current number of wins.
          </div>
          <div class="q-mb-sm">
            <span class="text-bold text-primary">Software Used:</span>
          </div>
          <div>
            <q-chip icon="adobe" square>Adobe Photoshop</q-chip>
            <q-chip square icon="adobe">Adobe InDesign</q-chip>
          </div>
          <div class="q-mt-lg">
            <span class="text-bold text-primary">Deliverables:</span>
            Advertisements, Mockups
          </div>
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/golf-pro-posters/progolf-mock.jpg"
            alt="Door County Travel Poster"
            contain
          />
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/golf-pro-posters/jday-insta.png"
            alt="Door County Travel Poster"
            contain
          />
          <div class="row">
            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/golf-pro-posters/tw.png"
              />
            </div>

            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/golf-pro-posters/wie.png"
              />
            </div>

            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/golf-pro-posters/rory.png"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/golf-pro-posters/jday.png"
              />
            </div>

            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/golf-pro-posters/brooks.png"
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
  name: "GolfPosters",
});
</script>
