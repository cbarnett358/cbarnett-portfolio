<template>
  <q-page class="container q-mx-xl q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Tiger Woods Poster" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/gradient-mesh/tw-text.png"
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
              GRADIENT <span>MESH</span>
            </div>
            <div class="q-mb-lg">
              Poster design for Tiger Woods at Augusta National. The
              illustration was made using Adobe Illustrator and Adobe Dimension.
              The gradient mesh was created using Adobe Illustrators
              gradient-mesh tool.
            </div>
            <div class="q-mb-sm">
              <span class="text-bold text-primary">Software Used:</span>
            </div>
            <div>
              <q-chip icon="adobe" square>Adobe Illustrator</q-chip>
              <q-chip square icon="adobe">Adobe InDesign</q-chip>
              <q-chip square icon="adobe">Adobe Dimension</q-chip>
              <q-chip square icon="adobe">Adobe Photoshop</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Logo,
              Poster, Mockup, Typography
            </div>
          </div>
        </div>

        <q-img
          class="q-mt-lg"
          src="../assets/images/gradient-mesh/tw-mock.jpg"
        />

        <q-img
          class="q-mt-lg"
          src="../assets/images/gradient-mesh/tw-poster.jpg"
        />

        <q-img
          class="q-mt-lg"
          src="../assets/images/gradient-mesh/tw-gradient.png"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GradientMesh",
});
</script>
