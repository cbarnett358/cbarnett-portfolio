<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Author Site" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="container">
          <div class-dark="text-white" class="text-h2 text-primary q-mt-none">
            WILLIAM GIBSON <span>WEBSITE</span>
          </div>
          <div class="q-mb-sm">
            A website for the famous cyberpunk author William Gibson. The site
            was built using WordPress with a cutstom theme.
          </div>
          <div>
            <q-btn
              id="my-button"
              class="q-mr-md q-mt-sm"
              color="secondary"
              square
              label="Visit Site"
              icon="web"
              href="https://cbarnett4.bitlampsites.com/wpd/final/"
            />
            <q-btn
              class="q-mr-md q-mt-sm"
              color="accent"
              square
              id="secondary-button"
              text-color="primary"
              label="View Code"
              icon="fab fa-github"
              href="https://github.com/cbarnett358/iwd-demo/tree/wpd-final"
            />
          </div>
          <div class="q-mb-sm q-mt-lg">
            <span class="text-bold text-primary">Software Used:</span>
          </div>
          <div>
            <q-chip
              icon="wordpress"
              color="light-gray"
              text-color="primary"
              square
              >WordPress</q-chip
            >
            <q-chip square icon="php">PHP</q-chip>
            <q-chip square icon="adobe">Adobe Photoshop</q-chip>
          </div>
          <div class="q-mt-lg">
            <span class="text-bold text-primary">Deliverables:</span> Website,
            Custom WordPress Theme, Post Types, Custom Fields, Custom
            Taxonomies, Custom Post Types, Custom Post Type Templates, Custom
            Taxonomy Templates, Custom Fields, Custom Fields, and Plugin.
          </div>

          <q-img
            class="contain q-mt-xl"
            src="../assets/images/authorsite/williamgibsonsite.webp"
            alt="William Gibson Website Mockup"
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
  name: "AuthorSite",

  mounted() {
    const myButton = document.getElementById("my-button");
    const secondaryButton = document.getElementById("secondary-button");
    myButton.setAttribute("target", "_blank");
    secondaryButton.setAttribute("target", "_blank");
  },
});
</script>
