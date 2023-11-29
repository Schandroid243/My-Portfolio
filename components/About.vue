<template>
  <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About me</div>
      <div class="mb-6 text-center" data-aos="fade-up">
        <img class="me-img" src="@/assets/images/profile_picture.jpeg" />
      </div>
      <div class="quotes text-center mb-10" data-aos="fade-up">
        <q>
          When you're engaged in something thrilling that truly matters to you,
          there's no need for external motivation. The vision itself propels you
          forward.
        </q>
        <br />
      </div>
      <div class="content" data-aos="fade-up">
        <p>
          Hello, I'm a Full Stack developer with five years of experience,
          specializing in both frontend and backend development to craft
          intricate and scalable web applications. I've consistently pursued
          meaningful challenges throughout my journey. Over the past three
          years, I've actively collaborated with exceptional teams, engaging in
          all phases of the software development lifecycle.
        </p>
        <p>
          I have a passion for sketching and crafting, which has instilled in me
          the belief that 'visualizing a problem is halfway to solving it.' Yet,
          "it's my deep involvement in software development that truly
          underscores this mantra."
        </p>
      </div>
      <div data-aos="fade-up">
        <Technologies />
      </div>
    </div>
  </v-container>
</template>

<script>
import Technologies from '@/components/Technologies'

export default {
  components: {
    Technologies
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: white;

  .content {
    padding: 0 3rem;
    p {
      font-size: 1.2rem;
      line-height: 150%;
    }
  }

  .quotes {
    margin: 2rem auto 0;
    font-size: 2rem;
    max-width: 50rem;
  }

  .me-img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 2px solid rgb(54, 51, 51);
    object-fit: cover;
  }
}
@media screen and (max-width: 767px) {
  .content {
    padding: 0 !important;
  }
}
</style>
