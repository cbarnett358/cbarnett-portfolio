<template>
  <q-page class="container q-mx-md q-mb-none">
    <div class="text-h2 text-secondary q-mt-lg">VIEW PROJECTS</div>

    <PortfolioCards></PortfolioCards>
  </q-page>
</template>

<script>
import PortfolioCards from "src/components/PortfolioCards.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { PortfolioCards },
});
</script>
