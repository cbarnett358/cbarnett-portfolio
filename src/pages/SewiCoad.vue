<template>
  <q-page class="container q-mx-lg q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="SEWI COAD" />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="container">
          <div
            class-dark="text-white"
            class="text-h2 text-primary q-mt-none q-mb-sm"
          >
            SEWI<span> COAD</span>
          </div>
          <div class="q-mb-sm">
            The client for this site was SEWI COAD. They are a local non-profit
            organization that helps people in need during natural disasters.
            They needed a new website that was simple and accessible for their
            users. The site was built using Elementor and WordPress. One of the
            clients biggest concerns was acceccibility so I remade their
            existing logo to be a high res vector graphic and tweaked their
            brand colors to pass AAA accessibility standards.
            <br /><br />This project was also a part of a group project. I was
            the lead designer and develop the document library, footer, home
            page, and the preparedness page. Nick Ryan was the project manager
            and Felicia Hoeft was the lead developer and oversaw the plugins.
          </div>

          <div>
            <q-btn
              id="my-button"
              class="q-mr-md q-mt-sm"
              color="secondary"
              square
              label="Visit Site"
              icon="web"
              href="https://nataliec26.sg-host.com/"
            />
          </div>
          <div class="q-mb-sm q-mt-lg">
            <span class="text-bold text-primary">Software Used:</span>
          </div>
          <div>
            <q-chip
              icon="wordpress"
              color="light-gray"
              text-color="primary"
              square
              >WordPress</q-chip
            >
            <q-chip square icon="wordpress">Elementor</q-chip>
            <q-chip square icon="adobe">Photoshop</q-chip>
          </div>
          <div class="q-mt-lg">
            <span class="text-bold text-primary">Deliverables:</span> Brand
            Style Guide, Website.
          </div>

          <q-img
            class="contain q-mt-xl"
            src="https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/Screenshot%202023-05-04%20at%202.01.21%20PM.png"
            alt="SEWI COAD Brand Guide"
            contain
          />

          <q-img
            class="contain q-mt-xl"
            src="https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/coadhome.png"
            alt="SEWI COAD Site Mockup"
            contain
          />

          <q-img
            class="contain q-mt-xl"
            src="https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/Coad_Home.png"
            alt="SEWI COAD Homepage"
            contain
          />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SewiCoad",

  mounted() {
    const myButton = document.getElementById("my-button");
    myButton.setAttribute("target", "_blank");
  },
});
</script>
