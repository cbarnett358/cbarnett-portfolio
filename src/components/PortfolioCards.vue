<template>
  <div class="row justify-left q-px-none">
    <!-- / q-col-gutter-xs -->
    <q-card
      id="portfoliocards"
      square
      flat
      class="q-pa-xs row my-card col-12 col-sm-6 col-md-6 col-lg-3"
      v-for="card in cards"
      :key="card.id"
      @click="$router.push(card.route)"
    >
      <q-img :src="card.image">
        <div class="overlay justify-left">
          <div class="text-h6">
            {{ card.title }}
            <div>
              <span>{{ card.subtitle }}</span>
            </div>
          </div>
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PortfolioCards",

  setup() {
    const cards = [
      {
        id: 1,
        title: "Heckin' Snackers",
        subtitle: "Brand Indentity | Website",
        route: "/portfolio/heckinsnackers",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e94eb5127530107.Y3JvcCwxNDAwLDEwOTUsMCwxMzg.png",
      },
      {
        id: 2,
        title: "Las Vegas Travel Guide",
        subtitle: "Typography | Illustration",
        route: "/portfolio/lasvegastravelguide",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/280d14118017643.Y3JvcCw5NjYsNzU1LDIxNyw4OA.jpg",
      },
      {
        id: 3,
        title: "Dragon Valley Golf Club",
        subtitle: "Brand Indentity | UX | Website",
        route: "/portfolio/dragonvalley",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/199da8128696833.Y3JvcCwxMDg5LDg1Miw4MCwzNDU.png",
      },
      {
        id: 4,
        title: "Canyon Springs Health Spa",
        subtitle: "Brand Identity",
        route: "/portfolio/canyonsprings",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ed8c2b118017291.Y3JvcCwxMTU1LDkwNCwyMiww.png",
      },
      {
        id: 5,
        title: "LevelUp Games",
        route: "/portfolio/levelupgames",
        subtitle: "Brand Indentity | Website",
        route: "/portfolio/levelupgames",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2b0e2f148785895.Y3JvcCwxMDQwLDgxMyw2OSww.jpg",
      },
      {
        id: 6,
        title: "Journey Into The Cosmos",
        subtitle: "Package Design | Event Promotion",
        route: "/portfolio/journeyintothecosmos",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8e6f1b119402507.Y3JvcCw5MTYsNzE3LDE0MCww.png",
      },
      {
        id: 7,
        title: "Pro Golf Posters",
        subtitle: "Poster Design | Social Media Promotion",
        route: "/portfolio/golfposter",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e2ef0f132715535.Y3JvcCwxMzk1LDEwOTEsNzc2LDMyNA.jpg",
      },

      {
        id: 8,
        title: "Golf Ball Big Type",
        subtitle: "Poster Design | Typography | Advertising",
        route: "/portfolio/bigtype",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/20fe5d126132195.Y3JvcCwxNTc3LDEyMzQsNTQsMA.png",
      },

      {
        id: 9,
        title: "Author Website",
        subtitle: "Gurella Marketing | Advertising",
        route: "/portfolio/authorsite",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/7a819b164978091.Y3JvcCwyMDA5LDE1NzEsODMwLDgzNQ.jpg",
      },
      {
        id: 10,
        title: "Sargento Ad Campaign",
        subtitle: "Advertising",
        route: "/portfolio/cheeseposter",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c7440c131164975.Y3JvcCw4MDIsNjI3LDE0MiwxMTM.png",
      },
      {
        id: 11,
        title: "Koss Headphone Ad Campaign",
        subtitle: "Advertising",
        route: "/portfolio/headphones",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4b3107132916979.Y3JvcCw5NzksNzY1LDE5OCwxNTU.png",
      },

      {
        id: 12,
        title: "Golf Ball Animation",
        subtitle: "Animation | Illustration",
        route: "/portfolio/golfballanimation",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8e6268130452031.Y3JvcCwxMTMwLDg4MywwLDU.png",
      },
      {
        id: 13,
        title: "Tiger Woods Poster",
        subtitle: "Illustration | Typography",
        route: "/portfolio/twposter",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/039aaf141406807.Y3JvcCwxMDU2LDgyNiwzMyw0MDI.png",
      },

      {
        id: 14,
        title: "Door County Travel Poster",
        subtitle: "Illustration | Typography",
        route: "/portfolio/door-county-poster",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/647f11131477249.Y3JvcCwxMDk3LDg1OCwwLDMxNA.jpg",
      },
      {
        id: 15,
        title: "Personal Brand",
        route: "/portfolio/personalbrand",
        subtitle: "Branding | 3D Modeling | Website",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fdef77127981555.Y3JvcCwxODMyLDE0MzIsMCw0NQ.png",
      },

      {
        id: 16,
        title: "The Kracken",
        subtitle: "Animation | Illustration | Scripting",
        route: "/portfolio/the-kracken",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e24c50153296511.Y3JvcCwxMzkzLDEwOTAsNTgsMjQ.png",
      },
    ];

    return { cards };
  },

  methods: {
    toggleOverlay: function (card) {
      card.overlay = !card.overlay;
    },
  },
});
</script>
