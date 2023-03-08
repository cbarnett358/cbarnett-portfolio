import { defineStore } from "pinia";
//store for portfolio page data

export const usePortfolioStore = defineStore("cards", {
  state: () => ({
    portfolio: [
      {
        id: 1,
        title: "Dragon Valley Golf Club",
        subtitle: "Subtitle 1",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/199da8128696833.Y3JvcCwxMDg5LDg1Miw4MCwzNDU.png",
      },
      {
        id: 2,
        title: "Canyon Springs",
        subtitle: "Subtitle 2",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/543db5118017291.Y3JvcCwzNTE1LDI3NTAsNjksMA.png",
      },
      {
        id: 3,
        title: "LevelUp Games",
        subtitle: "Subtitle 3",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/db32a8148785895.6369770a3591a.png",
      },
      {
        id: 4,
        title: "Nike Golf",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a0f8d4132715535.Y3JvcCw0NTMsMzU0LDM2MSwyNDE.png",
      },
      {
        id: 5,
        title: "Journey Into The Cosmos",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8e6f1b119402507.Y3JvcCw5MTYsNzE3LDE0MCww.png",
      },
      {
        id: 6,
        title: "Las Vegas Travel Guide",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/359baf118017643.Y3JvcCw1NDgsNDI4LDIyNSwxMTk.png",
      },
      {
        id: 7,
        title: "TaylorMade Big Type",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5f9c85126132195.Y3JvcCw1ODEsNDU0LDEwMCwzODk.png",
      },
      {
        id: 8,
        title: "Koss Headphones",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4b3107132916979.Y3JvcCw5NzksNzY1LDE5OCwxNTU.png",
      },
      {
        id: 9,
        title: "Heckin' Snackers",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e94eb5127530107.Y3JvcCwxNDAwLDEwOTUsMCwxMzg.png",
      },
      {
        id: 10,
        title: "Sargento Cheese",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c7440c131164975.Y3JvcCw4MDIsNjI3LDE0MiwxMTM.png",
      },
      {
        id: 11,
        title: "TW 25th Masters Anniversary",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/766403141406807.Y3JvcCwxMzE3LDEwMzAsNDUzLDI5MA.png",
      },

      {
        id: 12,
        title: "Golf Ball Animation",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8e6268130452031.Y3JvcCwxMTMwLDg4MywwLDU.png",
      },
      {
        id: 13,
        title: "CSB",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f57a9c131478333.Y3JvcCwxOTgxLDE1NTAsMjQsMA.png",
      },
      {
        id: 14,
        title: "CSB",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9c0534131478017.Y3JvcCwxMjI0LDk1OCwyNyww.png",
      },
      {
        id: 15,
        title: "CSB",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1e15e8131477249.Y3JvcCwxNTI3LDExOTUsNDgwLDg2.png",
      },
      {
        id: 16,
        title: "CSB",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4edce9153296511.Y3JvcCwxMDU0LDgyNCwzNTIsMjY2.png",
      },
      {
        id: 17,
        title: "CSB",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6cfcc6119402995.Y3JvcCwzODM1LDMwMDAsNjY0LDA.png",
      },
      {
        id: 18,
        title: "CSB",
        subtitle: "Subtitle 4",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0853f6119402029.Y3JvcCwxOTIwLDE1MDIsMTkwLDA.png",
      },
    ],
  }),

  methods: {
    toggleOverlay: function (card) {
      card.overlay = !card.overlay;
    },
  },
});
