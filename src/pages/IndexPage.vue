<template>
  <!-- <q-parallax :height="400" class="q-my-none q-py-none">
    <template v-slot:media>
      <video
        poster="https://cdn.quasar.dev/img/polina.jpg"
        autoplay
        loop
        fit
        cover
        muted
        class="q-mt-none q-pt-none"
      >
        <source type="video/mp4" src="../assets/videos/portfolio-banner.mp4" />
      </video>
    </template>

    <div class="text-white text-h1 q-mt-none q-pt-none"></div>
  </q-parallax>-->
  <q-parallax :height="300" :speed="0.5">
    <template v-slot:media>
      <img src="../assets/images/parallax1.jpg" />
    </template>

    <TypeWriter></TypeWriter>
    <div class="row">
      <q-btn
        id="my-button"
        class="q-mt-lg q-mr-md"
        color="secondary"
        square
        label="About Me"
        icon="info"
        to="/about"
      />
      <q-btn
        class="q-mt-lg q-mr-md"
        color="accent"
        square
        id="secondary-button"
        text-color="primary"
        label="Get In Touch"
        icon="message"
        to="/contact"
      />
    </div>
  </q-parallax>

  <q-page class="container q-mx-lg q-mb-none q-mt-lg">
    <q-card square>
      <q-tabs
        v-model="tab"
        dense
        class="text-primary"
        inactive-color="primary"
        active-color="info  bg-primary"
        indicator-color="accent"
        align="justify"
        wide-indicator
      >
        <q-tab name="work" label="ALL WORK" />
        <q-tab name="web" label="WEB ONLY" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="work" class="q-pa-none">
          <PortfolioCards></PortfolioCards>
        </q-tab-panel>

        <q-tab-panel name="web" class="q-px-none">
          <WebCards></WebCards>
        </q-tab-panel> </q-tab-panels
    ></q-card>
  </q-page>
</template>

<script>
import PortfolioCards from "src/components/PortfolioCards.vue";
import TypeWriter from "src/components/TypeWriter.vue";
import WebCards from "src/components/WebCards.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { PortfolioCards, WebCards, TypeWriter },

  data() {
    return {
      tab: "work",
    };
  },
});
</script>
