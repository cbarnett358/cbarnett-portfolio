<template>
  <q-card class="q-pa-md" style="width: 300px">
    <q-card-section>
      <div class="text-h6">Card Section</div>
    </q-card-section>
    <q-card-section>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        style="width: 100%; height: 200px"
      />
    </q-card-section>
    <q-card-section>
      <div class="text-subtitle2">Card Section</div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Action" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PortfolioCards",
});
</script>
