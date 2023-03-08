<template>
  <q-page class="container q-mx-xl q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el
          class="text-secondary"
          label="Koss Headphone Advertisement"
        />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/headphones/kossthumb.png"
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
              KOSS <span>HEADPHONES</span>
            </div>
            <div class="q-mb-lg">
              This series of ads celebrates Koss Headphones' iconic history of
              deliviring the best audio experience for over 60 years! From
              legends such as Frank Sinatra, Tony Bennet, and Bobby Hackett have
              all relied on Koss Headphones to deliver the best sound quality.
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
              <q-chip square icon="adobe">Adobe Photoshop</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Posters,
              Guerilla Marketing Plan
            </div>
          </div>
        </div>

        <q-img
          class="q-mt-lg"
          src="../assets/images/headphones/koss-mock.png"
        />
        <div class="row">
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/headphones/kossposter.png"
            />
          </div>

          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/headphones/kossguerilla.png"
            />
          </div>
        </div>
        <q-img
          class="q-mt-xl"
          src="../assets/images/headphones/kosshistory.png"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeadphoneAd",
});
</script>
