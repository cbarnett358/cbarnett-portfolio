<template>
  <q-page class="container q-mx-lg q-mb-none">
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
              src="../assets/images/myprofile.png"
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
              Greetings, I am Chris Barnett, a dedicated graphic design and
              front-end web development student. With just a few months to
              graduation, I am excited to share that I have gained over a year
              of valuable Graphic/Web Design experience.
            </div>
            <div class="q-mt-sm">
              Pursuing this path has allowed me to combine my two passions:
              design and technology. My skills include working with WordPress,
              Adobe Creative Suite, HTML, Javascript, and CSS frameworks. I take
              pride in my strong attention to detail and ability to manage time
              effectively. Additionally, I am honored to have been on the honor
              roll for both degrees. Looking ahead, I am eager to expand my
              knowledge and experience in UX design and 3D modeling.
            </div>
            <div class="q-mt-sm">
              During my free time, I enjoy playing with my dog Winston, golfing,
              trying out new video games with friends, watching shows,
              weightlifting, and cooking new recipes.
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
            <div class="q-mt-lg">
              <q-btn
                target="_blank"
                round
                class="bg-secondary my-button"
                href="https://www.linkedin.com/in/chrisb-designs"
              >
                <q-avatar size="32px" square text-color="white">
                  <q-icon name="fab fa-linkedin-in"></q-icon>
                </q-avatar>
              </q-btn>
              <q-btn
                target="_blank"
                round
                class="q-mx-sm bg-secondary"
                href="https://www.behance.net/chrisb-designs"
              >
                <q-avatar size="32px" square text-color="white">
                  <q-icon name="fab fa-behance"></q-icon>
                </q-avatar>
              </q-btn>
              <q-btn
                id="my-button"
                target="_blank"
                round
                class="bg-secondary"
                href="https://github.com/cbarnett358"
              >
                <q-avatar size="32px" square text-color="white">
                  <q-icon name="fab fa-github"></q-icon>
                </q-avatar>
              </q-btn>
            </div>
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
