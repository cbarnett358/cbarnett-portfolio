<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Canyon Springs" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/canyonsprings/canyonlogo.png"
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
              CANYON <span>SPRINGS</span>
            </div>
            <div class="q-mb-lg">
              Canyon Springs Health Resort Spa is at the center of rejuvenation
              and promises renewel and healing. The logo features the natural
              flowers and flow of the terrain to further enhance the feeling of
              relaxation to the guests.
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
              <q-chip square icon="adobe">Adobe Dimension</q-chip>
              <q-chip square icon="adobe">Adobe Photoshop</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Logo,
              Tri-Fold Brochure, Packaging, Mockups, and Labels Mockups, and
              Labels
            </div>
          </div>
        </div>

        <!---<q-card class="about-card q-mt-lg q-mb-none" flat square>
        <q-card-section horizontal>
          <q-img
            class="q-mr-md contain"
            id="personal-image"
            src="../assets/images/canyonsprings/canyonlogo.png"
            alt="Chris Barnett"
            style="max-width: 400px"
            contain
          />

          <q-card-section class="text-h5 text-primary dark-primary">
            <div
              class-dark="text-white"
              class="text-h2 text-primary q-mt-none q-mb-md"
            >
              <span>CANYON</span> SPRINGS
            </div>
            <div class>
              Located 30 minutes outside of Salt Lake City, Canyon Springs is a
              premier resort community that offers a variety of amenities and
              activities for its residents. The community is home to a 27-hole
              golf course, a 10,000 square foot clubhouse, a 5,000 square foot
              fitness center, a 25,000 square foot spa.
            </div>
            <div class="q-mt-sm">
              <ul>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Adobe Dimensions</li>
              </ul>
            </div>
            <div class="q-mt-sm">
              <span class="text-bold">Deliverables:</span> Logo, Branding,
              Brochure, Mockups, and Labels
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>-->
        <q-img
          class="q-mt-xl"
          src="../assets/images/canyonsprings/canyonmock.png"
        />

        <div class="row">
          <div class="col-12 col-md-6">
            <q-img
              class="q-mt-xl"
              src="../assets/images/canyonsprings/canyonfront.png"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-img
              class="q-mt-xl"
              src="../assets/images/canyonsprings/canyonback.png"
            />
          </div>
        </div>

        <q-img
          class="q-mt-xl"
          src="../assets/images/canyonsprings/canyon-package-mock.png"
        />
        <div class="row">
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/canyonsprings/cs-bw.png"
            />
          </div>

          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/canyonsprings/cs-salts.png"
            />
          </div>

          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/canyonsprings/cs-herbal.png"
            />
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CanyonSprings",
});
</script>
