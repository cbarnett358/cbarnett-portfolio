<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-my-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Dragon Valley" />
      </q-breadcrumbs>

      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/dragon-valley/dvlogo.png"
              alt="Chris Barnett"
              style="max-width: 500px"
              contain
            />
          </div>

          <div class="col-12 col-md-8">
            <div
              class-dark="text-white"
              class="text-h2 text-primary q-mb-sm q-mt-none"
            >
              DRAGON<span> VALLEY</span>
            </div>
            <div class="q-my-md">
              Dragon Valley Golf Club is the premier golf course of Missouri's
              Ozarks. The course is located in the heart of the Ozarks. The
              course is a par 72, 7,000 yard layout that features three distinct
              nines, each with its own unique character and challenges. Dragon
              Valley Golf Clubs purpose is to offer a challenge to all skill
              levels and to provide a fun and enjoyable golf experience for all
              golfers.
            </div>

            <div class="q-mt-lg">
              <q-btn
                id="my-button"
                class="q-mr-md"
                color="secondary"
                square
                label="Visit Site (In Progress)"
                icon="web"
                href="https://cbarnett4.bitlampsites.com/wpd/dragonvalley-site/"
              />
              <div class="container q-mt-lg">
                <div>
                  <div class="q-mb-sm">
                    <span class="text-bold text-primary">Software Used:</span>
                  </div>
                  <q-chip icon="adobe" square>Adobe Illustrator</q-chip>
                  <q-chip square icon="adobe">Adobe InDesign</q-chip>
                  <q-chip square icon="adobe">Adobe Photoshop</q-chip>
                  <q-chip square icon="code">WordPress</q-chip>
                  <q-chip square icon="code">Elementor</q-chip>
                </div>

                <div class="q-mt-lg">
                  <span class="text-bold text-primary">Deliverables:</span>
                  Logo, Labels, Website, Mockups, and User Personas.
                </div>
              </div>
            </div>
          </div>
        </div>

        <q-img
          class="q-mt-xl"
          src="../assets/images/dragon-valley/dv-site.png"
        />
        <q-img
          class="q-mt-xl"
          src="../assets/images/dragon-valley/dvscorecard.png"
        />
        <q-img
          class="q-mt-xl"
          src="../assets/images/dragon-valley/dv-insta.png"
        />
        <q-img
          class="q-mt-xl"
          src="../assets/images/dragon-valley/dv-hole.png"
        />
        <q-img
          class="q-mt-xl"
          src="../assets/images/dragon-valley/dragonvalleypersona1.jpg"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DragonValley",

  //q-btn open in new tab
});
</script>
