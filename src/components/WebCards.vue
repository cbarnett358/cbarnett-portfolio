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
  name: "WebCards",

  //how to overlay with title and subtitle when curser hovers  image or card

  setup() {
    const cards = [
      {
        id: 1,
        title: "Heckin' Snackers",
        subtitle: "Brand Indentity | Website",
        route: "/portfolio/heckinsnackers",
        image:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/39b32c127530107.6447491b55d96.jpg",
      },

      {
        id: 3,
        title: "Dragon Valley Golf Club",
        subtitle: "Brand Indentity | UX | Website",
        route: "/portfolio/dragonvalley",
        image:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e907a3128696833.644748760bc46.png",
      },

      {
        id: 5,
        title: "LevelUp Games",
        route: "/portfolio/levelupgames",
        subtitle: "Brand Indentity | Website",
        route: "/portfolio/levelupgames",
        image:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/afda4e148785895.6447469edd441.png",
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
        id: 18,
        title: "SEWI COAD",
        subtitle: "Website Design",
        route: "/portfolio/SewiCoad",
        image:
          "https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/coadthumb.png",
      },

      {
        id: 19,
        title: "Ironman Industrial Cleaning",
        route: "/portfolio/ironman-cleaning",
        subtitle: "Website Design",
        image:
          "https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/Ironman-mock.png",
      },
    ];

    return { cards };
  },
  //how to overlay with title and subtitle on hover of image

  methods: {
    toggleOverlay: function (card) {
      card.overlay = !card.overlay;
    },
  },
});
</script>
