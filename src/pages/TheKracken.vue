<template>
  <q-page class="container q-mx-xl q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el
          class="text-secondary"
          label="The Kracken Animation"
        />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/thekracken/thekrackenthumb.png"
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
              THE <span>KRACKEN</span>
            </div>
            <div class="q-mb-lg">
              Pirate animation depicting a sailor depicting a kracken attack
              during a rainstorm.
            </div>
            <div class="q-mb-sm">
              <span class="text-bold text-primary">Software Used:</span>
            </div>
            <div>
              <q-chip icon="adobe" color="light-gray" square
                >Adobe Illustrator</q-chip
              >
              <q-chip square icon="adobe">Adobe Animate</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Logo,
              Labels, Website, Mockups, and Labels
            </div>
          </div>
        </div>
        <div class="q-mt-lg">
          <div class="q-pa-md">
            <q-video
              :ratio="16 / 9"
              src="https://www.youtube.com/embed/ImDIp-DTqDY"
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
  name: "TheKracken",
});
</script>
