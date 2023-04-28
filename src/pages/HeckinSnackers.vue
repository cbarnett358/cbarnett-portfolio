<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-my-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Heckin' Snackers" />
      </q-breadcrumbs>

      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/heckinsnackers/heckin-logo.png"
              alt="Image of Heckin' Snackers Logo"
              style="max-width: 500px"
              contain
            />
          </div>

          <div class="col-12 col-md-8">
            <div
              class-dark="text-white"
              class="text-h2 text-primary q-mb-sm q-mt-none"
            >
              HECKIN'<span> SNACKERS</span>
            </div>
            <div class="q-my-md">
              Heckin’ Snackers is a fictional brand that provides fresh and
              heckin’ delicious snacks and food your dog will adore, guaranteed!
              Everything is organically sourced from the USA and will leave your
              pup heckin’ happy! The logo, flavors, and color scheme were;
              influenced by my very own dog Winston! The site was developed
              using Vue 3, Quasar, Firestore, and Stripe. All orders get stored
              in Firestore with either “pending” or “complete” depending on
              checkout progress.
            </div>

            <div>
              <q-btn
                id="my-button"
                class="q-mr-md q-mt-sm"
                color="secondary"
                square
                label="Visit Site"
                icon="web"
                href="https://heckin-snackers.web.app/#/"
              />
              <q-btn
                class="q-mr-md q-mt-sm"
                color="accent"
                square
                id="secondary-button"
                text-color="primary"
                label="View Code"
                icon="fab fa-github"
                href="https://github.com/cbarnett358/Heckin-Snackers-Quasar"
              />
              <div class="container q-mt-lg">
                <div>
                  <div class="q-mb-sm">
                    <span class="text-bold text-primary">Software Used:</span>
                  </div>
                  <q-chip icon="adobe" square>Adobe Illustrator</q-chip>
                  <q-chip square icon="adobe">Adobe InDesign</q-chip>
                  <q-chip square icon="adobe">Adobe Animate</q-chip>
                  <q-chip square icon="adobe">Adobe Photoshop</q-chip>
                  <q-chip square icon="code">Vue Js</q-chip>
                  <q-chip square icon="code">Quasar Framework</q-chip>
                  <q-chip square icon="code">Google Firebase</q-chip>
                  <q-chip square icon="code">Stripe API</q-chip>
                </div>

                <div class="q-mt-lg">
                  <span class="text-bold text-primary">Deliverables:</span>
                  Logo, Labels, Website, Mockups, and Labels
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/heckinsnackers/heckin-kibble.png"
            />
          </div>

          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/heckinsnackers/heckin-treats.jpg"
            />
          </div>

          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/heckinsnackers/heckin-can.png"
            />
          </div>
        </div>

        <q-img
          class="q-mt-xl"
          src="../assets/images/heckinsnackers/HeckinSiteMockup.jpg"
        />

        <q-img
          class="q-mt-xl"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aed996127530107.6435966c48d91.png"
        />

        <q-img
          class="q-mt-xl"
          src="../assets/images/heckinsnackers/heckinkibble-label.png"
        />

        <q-img
          class="q-mt-xl"
          src="../assets/images/heckinsnackers/heckintreats-label.png"
        />

        <q-img
          class="q-mt-xl"
          src="../assets/images/heckinsnackers/heckin-can-label.png"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeckinSnackers",

  //q-btn open in new tab

  mounted() {
    const myButton = document.getElementById("my-button");
    const secondaryButton = document.getElementById("secondary-button");
    myButton.setAttribute("target", "_blank");
    secondaryButton.setAttribute("target", "_blank");
  },
});
</script>
