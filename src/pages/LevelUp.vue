<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-my-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el
          class="text-secondary"
          label="levelUP Retro Game Exchange"
        />
      </q-breadcrumbs>

      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/levelup/levelupthumb.png"
              alt="Image of levelUP Games Logo"
              style="max-width: 500px"
              contain
            />
          </div>

          <div class="col-12 col-md-8">
            <div
              class-dark="text-white"
              class="text-h2 text-primary q-mb-sm q-mt-none"
            >
              level<span>UP</span>
            </div>
            <div class="q-my-md">
              (Currently recreating with Nextjs) levelUP Retro Game Exchange
              allows users to buy, sell, and trade retro video games and
              consoles.
            </div>

            <div>
              <q-btn
                id="my-button"
                class="q-mr-md q-mt-sm"
                color="secondary"
                square
                label="Visit Site"
                icon="web"
                href="https://levelup-games.vercel.app/"
              />
              <q-btn
                class="q-mr-md q-mt-sm"
                color="accent"
                square
                id="secondary-button"
                text-color="primary"
                label="View Code"
                icon="fab fa-github"
                href="https://github.com/cbarnett358/levelUP-Retro-Games"
              />
              <div class="container q-mt-lg">
                <div>
                  <div class="q-mb-sm">
                    <span class="text-bold text-primary">Software Used:</span>
                  </div>
                  <q-chip icon="adobe" square>Adobe Illustrator</q-chip>
                  <q-chip square icon="adobe">Adobe InDesign</q-chip>
                  <q-chip square icon="adobe">Adobe Photoshop</q-chip>
                  <q-chip square icon="code">MySQL</q-chip>
                  <q-chip square icon="code">Next.js</q-chip>
                  <q-chip square icon="code">Tailwind</q-chip>
                  <q-chip square icon="code">daisyUI</q-chip>
                </div>

                <div class="q-mt-lg">
                  <span class="text-bold text-primary">Deliverables:</span>
                  Logo, Apparel, Website, Mockups
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-img
          class="q-mt-xl"
          src="../assets/images/levelup/levelup-store.jpg"
        />
        <q-img
          class="q-mt-xl"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/afda4e148785895.6447469edd441.png"
        />

        <q-img
          class="q-mt-xl"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d31bba148785895.62db7fe80bfac.png"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LevelUpGames",

  //q-btn open in new tab

  mounted() {
    const myButton = document.getElementById("my-button");
    const secondaryButton = document.getElementById("secondary-button");
    myButton.setAttribute("target", "_blank");
    secondaryButton.setAttribute("target", "_blank");
  },
});
</script>
