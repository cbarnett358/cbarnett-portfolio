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
            class="q-mt-lg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2a56dc131164975.618f4fcee57b4.png"
          />
          <q-img
            class="q-mt-lg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/73920e131164975.6447473b26bac.png"
          />
          <q-img
            class="q-mt-lg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/f118b3131164975.6447473b25e31.png"
          />
          <q-img
            class="q-mt-lg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1e9637131164975.6447473b2791e.png"
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
