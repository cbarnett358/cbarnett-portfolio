<template>
  <q-btn
    flat
    dense
    round
    icon="brightness_2"
    aria-label="Toggle Dark Mode"
    @click="$q.dark.toggle()"
  />

  //q-toggle for $q.dark

  <q-toggle
    v-model="$q.dark.isActive"
    color="primary"
    label="Toggle Dark Mode"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DarkModeBtn",

  setup() {
    return {};
  },
  //how to make the button change to a outlined icon when clicked and change back to moon when clicked again
});
</script>
