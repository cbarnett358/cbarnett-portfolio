<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Sargento Cheese Ads" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="container">
          <div
            class-dark="text-white"
            class="text-h2 text-primary q-mt-none q-mb-sm"
          >
            SARGENTO <span>ADVERTISING</span>
          </div>
          <div class="q-mb-lg">
            A serious of ads for Sargento Cheese. The theme behind the ads was
            to promote that Sargento cheese is so delicious that they will do
            anything to get it.
          </div>
          <div class="q-mb-sm">
            <span class="text-bold text-primary">Software Used:</span>
          </div>
          <div>
            <q-chip icon="adobe" text-color="primary" square
              >Adobe Photoshop</q-chip
            >
            <q-chip square icon="adobe">Adobe InDesign</q-chip>
          </div>
          <div class="q-mt-lg">
            <span class="text-bold text-primary">Deliverables:</span>
            Advertisements, Mockups
          </div>

          <div class="row">
            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/cheese-ads/ufo.png"
              />
            </div>

            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/cheese-ads/missing.png"
              />
            </div>

            <div class="col-12 col-md">
              <q-img
                class="q-mt-lg"
                src="../assets/images/cheese-ads/robber.png"
              />
            </div>
          </div>
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/cheese-ads/ufo-horizontal.png"
            alt="Door County Travel Poster"
            contain
          />
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/cheese-ads/missing-horizontal.png"
            alt="Door County Travel Poster"
            contain
          />
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/cheese-ads/robber-horizontal.png"
            alt="Door County Travel Poster"
            contain
          />
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/cheese-ads/ufo-mock.png"
            alt="Door County Travel Poster"
            contain
          />
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/cheese-ads/missing-mock.png"
            alt="Door County Travel Poster"
            contain
          />
          <q-img
            class="contain q-mt-lg"
            src="../assets/images/cheese-ads/robber-mock.png"
            alt="Door County Travel Poster"
            contain
          />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheeseAds",
});
</script>
