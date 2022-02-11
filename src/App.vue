<template>
  <div class="page">
    <main>
      <div class="links">
        <a href="https://www.twitter.com" target="_blank">
         <i class="nes-icon twitter is-large"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
         <i class="nes-icon instagram is-large"></i>
        </a>
        <a href="https://www.opensea.io" class="nes-btn is-primary" target="_blank">OpenSea</a>
      </div>
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
.links {
display: flex;
align-items: center;
justify-content: center;
z-index: 10;
  @media (min-width: 920px){
    position: absolute;
    top: 15px;
    right: 0;
  }
  a {
    display: inline-block;
    margin: 0 10px;
  }
}
  .page {
    display: flex;
  }

  main {
    background-color: #212529;
    color: #FFFFFF;
    flex-grow: 1;
    text-align: center;
    line-height: 1.8;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .container {
    padding: 0 30px;
    max-width: 920px;
    margin: 0 auto;
  }

  .cta {
    text-align: center;
    margin-top: 20px;
  }

  img {
    max-width: 100%;
  }

  em {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    color: transparent;
  }
  section {
    margin-top: 160px;

    &.message-list {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }

  .message-list {
    & > .message {
      margin-top: 2rem;
      padding-bottom: 100px;
      position: relative;

      @media (min-width: 920px) {
        padding-bottom: 0;
      }
      &.-left {
        @media (min-width: 920px) {
          padding-left: 120px;
        }
        .nes-bcrikko {
          left: 0;
        }
      }
      &.-right {
        @media (min-width: 920px) {
          padding-right: 120px;
        }
        .nes-bcrikko {
          right: 0;
        }
      }
      .nes-bcrikko {
        bottom: 0;
        position: absolute;
      }
    }

  }
  h2 {
    margin-bottom: 40px !important;
  }
</style>
