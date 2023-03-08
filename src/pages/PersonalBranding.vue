<template>
  <q-page class="container q-mx-xl q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Personal Branding" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/personalbrand/methumg.png"
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
              PERSONAL <span>BRANDING</span>
            </div>
            <div class="q-mb-md">
              My brand features a characture of myself created in Blender, clean
              fonts, and a color scheme based around my favorite colors.
            </div>
            <q-btn
              id="my-button"
              class="q-mb-md"
              color="secondary"
              square
              label="View Code"
              icon="fab fa-github"
              href="https://github.com/cbarnett358/cbarnett-portfolio"
            />
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
              <q-chip square icon="view_in_ar">Blender</q-chip>
              <q-chip square icon="code">Vue</q-chip>
              <q-chip square icon="code">Quasar</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Logo,
              Buisiness Card, Resume, 3d Model, Mockups
            </div>
          </div>
        </div>

        <q-img
          class="q-mt-lg"
          src="../assets/images/personalbrand/cbbrand-mock.png"
        />

        <div class="row">
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/personalbrand/bc-front.png"
            />
          </div>
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/personalbrand/bc-back.png"
            />
          </div>
        </div>
        <q-img
          class="q-mt-xl"
          src="../assets/images/personalbrand/cb-resume.png"
        />
        <q-img
          class="q-mt-xl"
          src="../assets/images/personalbrand/mycolors.png"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PersonalBranding",
});
</script>
