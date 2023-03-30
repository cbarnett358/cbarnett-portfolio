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
import { LocalStorage } from "quasar";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "DarkModeBtn",

  //save $q.dark.toggle() to local storage

  data() {
    return {
      dark: false,
    };
  },

  mounted() {
    const q = useQuasar();
    const darkMode = LocalStorage.getItem("darkMode");
    if (darkMode) {
      q.dark.set(darkMode);
      this.dark = darkMode;
    }
  },

  watch: {
    dark() {
      LocalStorage.set("darkMode", this.dark);
    },
  },

  methods: {
    toggleDarkMode() {
      this.$q.dark.toggle();
    },
  },
});
</script>
