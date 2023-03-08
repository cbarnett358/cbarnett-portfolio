<template>
  <q-page class="container q-mx-xl q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="Golf Ball Big Type" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/golf-ball-ads/GolfBigType.png"
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
              GOLF BALL <span>BIG TYPE</span>
            </div>
            <div class="q-mb-lg">
              Using the Big Type logo for Taylormade's line of golf balls the
              goal was to create bold taglines that would stand out on the
              shelf. The illustrations were made using Adobe Illustrator and
              Adobe Dimension.
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
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Logo,
              Labels, Website, Mockups, and Labels
            </div>
          </div>
        </div>

        <q-img
          class="q-mt-lg"
          src="../assets/images/golf-ball-ads/BigTypeMock.png"
        />
        <div class="row">
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/golf-ball-ads/bigtype-blue.png"
            />
          </div>

          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/golf-ball-ads/bigtype-orange.png"
            />
          </div>

          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/golf-ball-ads/bigtype-navy.png"
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
  name: "GolfBigType",
});
</script>
