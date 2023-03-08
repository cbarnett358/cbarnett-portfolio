<template>
  <q-page class="container q-mx-xl q-mb-none q-mt-lg">
    <div class="my-container">
      <q-breadcrumbs class="text-h5 text-primary q-my-lg q-mb-none">
        <q-breadcrumbs-el class="text-primary" label="Home" to="/" />
        <q-breadcrumbs-el class="text-secondary" label="About Me" />
      </q-breadcrumbs>

      <q-card class="my-padding" square>
        <div class="row">
          <div class="col-12 col-md-4">
            <q-img
              class="q-mr-md contain q-gutter-lg q-mb-lg"
              id="personal-image"
              src="../assets/images/20221121_124217.png"
              alt="Chris Barnett"
              contain
            />
          </div>
          <div class="col-12 col-md-8">
            <div
              class-dark="text-white"
              class="text-h2 text-primary q-mb-sm q-mt-none"
            >
              HELLO! <span>I'M CHRIS</span>
            </div>
            <div class>
              Growing up, I was always fascinated with the internet creating
              things. Some of my earliest memories were of myself painting,
              constructing tech deck parks out of cardboard, and scanning the
              internet for new flash games to play. It's safe to say that I am
              creative and resourceful through and through, which is why I love
              developing, designing, and curating new and existing ideas to be
              the best that; they can be.
            </div>
            <div class="q-mt-sm">
              My greatest strength is my attention to detail, not only in a
              creative sense but; also from a user's perspective. Whether it be
              identifying inconsistencies in color, margins, or fonts, to
              noticing ways designs can be more user-friendly, I constantly look
              for ways to improve work, both new and old.
            </div>
            <div class="q-mt-sm">
              In my free time, you can find me playing with my dog Winston,
              shaping errant golf shots around trees, exploring new video games
              with friends, binging new shows, lifting heavier than last time,
              and cooking new recipes.
            </div>

            <q-btn
              id="my-button"
              class="q-mt-lg q-mr-md"
              color="secondary"
              square
              label="GET IN TOUCH"
              icon="message"
              to="/contact"
            />
            <q-btn
              class="q-mt-lg q-mr-md"
              color="accent"
              square
              id="secondary-button"
              text-color="primary"
              label="MY RESUME"
              icon="description"
              to="/resume"
            />
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<style lang="sass" scoped>
.about-card
  width: 100%
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
});
</script>
