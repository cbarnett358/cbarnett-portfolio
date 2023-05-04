const routes = [
  //remove hashtag from url

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  //DragonValley path

  {
    path: "/portfolio/dragonvalley",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/DragonValley.vue") }],
  },

  {
    path: "/portfolio/headphones",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HeadphoneAd.vue") }],
  },

  {
    path: "/portfolio/golfposter",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GolfPosters.vue") }],
  },
  {
    path: "/portfolio/levelupgames",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LevelUp.vue") }],
  },
  {
    path: "/portfolio/personalbrand",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/PersonalBranding.vue") },
    ],
  },

  {
    path: "/portfolio/cheeseposter",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CheeseAds.vue") }],
  },

  {
    path: "/portfolio/canyonsprings",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/CanyonSprings.vue") },
    ],
  },
  {
    path: "/portfolio/twposter",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GradientMesh.vue") }],
  },

  {
    path: "/resume",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/MyResume.vue") }],
  },

  {
    path: "/portfolio/golfballanimation",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/GolfBallAnimation.vue") },
    ],
  },

  {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ContactMe.vue") }],
  },
  {
    path: "/portfolio/bigtype",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GolfBigType.vue") }],
  },
  {
    path: "/portfolio/authorsite",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AuthorSite.vue") }],
  },
  {
    path: "/portfolio/lasvegastravelguide",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LasVegas.vue") }],
  },
  {
    path: "/portfolio/journeyintothecosmos",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/JourneyIntoTheCosmos.vue") },
    ],
  },
  {
    path: "/portfolio/the-kracken",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/TheKracken.vue") }],
  },

  {
    path: "/portfolio/heckinsnackers",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HeckinSnackers.vue") },
    ],
  },
  {
    path: "/portfolio/door-county-poster",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/DoorCounty.vue") }],
  },
  {
    path: "/portfolio/kinetic-type",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/KineticType.vue") }],
  },

  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AboutMe.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
