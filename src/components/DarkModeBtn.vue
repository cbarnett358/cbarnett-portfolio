<template>
  <q-btn
    class="q-mr-md"
    round
    dense
    flat
    icon="brightness_2"
    @click="$q.dark.toggle()"
  />
  <q-toggle
    v-model="$q.dark.isActive"
    color="secondary"
    label-position="left"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DarkModeBtn",
});
</script>
