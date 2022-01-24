<template>
  <div class="page">
    <main>
      <Intro/>
      <Description/>
      <TopShelf/>
      <Testimonials/>
      <Team/>
      <Footer/>
    </main>
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';
import Team from './components/Team.vue';
import TopShelf from './components/TopShelf.vue';
import Description from './components/Description.vue';

export default {
  name: 'App',
  components: {
    Intro,
    Testimonials,
    Footer,
    Team,
    TopShelf,
    Description,
  },
};
</script>

<style lang="scss">
  .page {
    display: flex;
  }

  main {
    background-color: #212529;
    color: #FFFFFF;
    flex-grow: 1;
    text-align: center;
  }

  .container {
    padding: 0 30px;
    max-width: 920px;
    margin: 0 auto;
  }

  .cta {
    text-align: center;
    margin-top: 60px;
  }

  img {
    max-width: 100%;
  }

  em {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    color: transparent;
  }
  .section {
    margin-top: 160px;
  }
  h2 {
    margin-bottom: 40px !important;
  }
</style>
