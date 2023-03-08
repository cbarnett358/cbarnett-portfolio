<template>
  <q-page class="container q-mx-xl q-mb-none">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-mb-lg q-mt-md">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el
          class="text-secondary"
          label="Journey Into The Cosmos"
        />
      </q-breadcrumbs>
      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/space-museum/CosmosLogo.png"
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
              MUSEUM <span>EVENT</span>
            </div>
            <div class="q-mb-lg">
              "Journey Into The Cosmos" is an event created to celebrate the
              history of space exploration. The event was held at the American
              Museum of Natural History in New York City. The event was a
              success and was attended by over 100 people. The event includes
              promotional posters, tickets, private invitations for an after
              party, and a fun envelope for the invitiees.
            </div>
            <div class="q-mb-sm">
              <span class="text-bold text-primary">Software Used:</span>
            </div>
            <div>
              <q-chip
                icon="adobe"
                color="light-gray"
                text-color="primary"
                square
                >Adobe Illustrator</q-chip
              >
              <q-chip square icon="adobe">Adobe InDesign</q-chip>
              <q-chip square icon="adobe">Adobe Dimension</q-chip>
              <q-chip square icon="adobe">Adobe Photoshop</q-chip>
            </div>
            <div class="q-mt-lg">
              <span class="text-bold text-primary">Deliverables:</span> Logo,
              Poster, Tickets, Invite, Envelope, Mockups
            </div>
          </div>
        </div>

        <q-img
          class="q-mt-lg"
          src="../assets/images/space-museum/ticketmock.png"
        />

        <div class="row">
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/space-museum/Barnett_MuseumEventPromotion6.jpg"
            />
          </div>
          <div class="col-12 col-md">
            <q-img
              class="q-mt-xl"
              src="../assets/images/space-museum/Barnett_MuseumEventPromotion7.jpg"
            />
          </div>
        </div>
        <q-img
          class="q-mt-xl"
          src="../assets/images/space-museum/museum-invite-mock.png"
        />
        <q-img
          class="q-mt-xl"
          src="../assets/images/space-museum/space-poster-mock.png"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "JourneyIntoTheCosmos",
});
</script>
