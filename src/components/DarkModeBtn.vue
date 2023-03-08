<template>
  <q-toggle
    size="md"
    class="q-pl-xs"
    v-model="dark"
    color="secondary"
    checked-icon="mode_night"
    unchecked-icon="light_mode"
    label-position="left"
    @click="$q.dark.toggle()"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DarkModeBtn",
  data() {
    return {
      dark: false,
    };
  },
});
</script>
