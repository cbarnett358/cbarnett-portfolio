<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title
            @click="$router.push('/')"
            class="text-h1 q-py-none q-my-none q-mx-sm q-mt-md"
          >
            <span>CHRIS</span> BARNETT <br />
            <div id="sub-title" class="q-mt-none q-mb-sm q-pt-none text-info">
              &nbsp;GRAPHIC DESIGNER | WEB DEVELOPER | USER RESEARCHER
            </div>
          </q-toolbar-title>

          <DarkModeBtn></DarkModeBtn>

          <NavigationDialog></NavigationDialog>
        </q-toolbar>
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
          :duration="500"
          :behavior="'smooth'"
        >
          <q-btn fab icon="arrow_drop_up" color="secondary"></q-btn>
        </q-page-scroller>
      </q-header>

      <router-view />
    </q-page-container>

    <q-footer>
      <q-toolbar-title>
        <div class="containerjustify-center">
          <q-toolbar>
            <div class="q-mx-lg text-center text-white text-h5">
              © 2021 CHRIS <span>BARNETT</span>
            </div>
          </q-toolbar>
        </div>
      </q-toolbar-title>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import DarkModeBtn from "components/DarkModeBtn.vue";
import NavigationDialog from "src/components/NavigationDialog.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,

    NavigationDialog,
    DarkModeBtn,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>
