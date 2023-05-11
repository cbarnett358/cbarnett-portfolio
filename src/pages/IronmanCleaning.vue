<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Ironman Cleaning" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="container">
          <div
            class-dark="text-white"
            class="text-h2 text-primary q-mt-none q-mb-sm"
          >
            <span> Ironman Industrial Cleaning</span>
          </div>
          <div class="q-mb-sm">
            The client for this site was Ironman Industrial Cleaning. They
            needed a website to showcase their services and to provide a way for
            potential customers to contact them and learn more about their
            services. Besides showing their services we also wanted to show off
            the team and the equipment they use. The site was built using Wix.
          </div>

          <div>
            <q-btn
              id="my-button"
              class="q-mr-md q-mt-sm"
              color="secondary"
              square
              label="Visit Site"
              icon="web"
              href="https://www.ironmanindustrialcleaning.com/"
            />
          </div>
          <div class="q-mb-sm q-mt-lg">
            <span class="text-bold text-primary">Software Used:</span>
          </div>
          <div>
            <q-chip icon="code" color="light-gray" text-color="primary" square
              >Wix</q-chip
            >
          </div>
          <div class="q-mt-lg">
            <span class="text-bold text-primary">Deliverables:</span> Website.
          </div>

          <q-img
            class="contain q-mt-xl"
            src="https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/Ironman-mock.png"
            alt="Ironman Cleaning Mockup"
            contain
          />

          <q-img
            class="contain q-mt-xl"
            src="https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/ironman-homepage.png"
            alt="Ironman Homepage"
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
  name: "IronmanCleaning",

  mounted() {
    const myButton = document.getElementById("my-button");
    myButton.setAttribute("target", "_blank");
  },
});
</script>
