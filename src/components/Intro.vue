<template>
  <div class="intro">
    <div class="container">

      <h1 class="logo">
        <img src="~@/assets/logo.png" alt="">
      </h1>

        <section class="message-list">
          <section class="message -left quote">
            <!-- Balloon -->
            <img class="drank" src="~@/assets/red-glass.png" alt="">
            <div class="nes-balloon from-left is-dark">
              <p>Thirsty? You've come to the right place.</p>
            </div>
          </section>
        </section>

        <p>
          Cool Cocktail NFTs are 5,000 AI generated collectibles stored on the ETH blockchain.
            These cocktails have hundreds of uniquely generated attributes, built by our algorithm to
            give you a pixel perfect drink of choice.
        </p>
        <img src="~@/assets/drinks/10.png" alt="">
<br> <br>
        <div class="nes-container is-dark is-centered">
          <p>The best part, we are pledging 10% of our earnings to support <a href="http://bizstreamacademy.com" target="_blank" rel="noreferrer">BizStream Academy</a>, a summer coding bootcamp aimed at high-school students.</p>
        </div>

      <div class="cta">
          <a href="https://opensea.io/collection/coolcocktailnft" class="nes-btn is-primary" target="_blank" rel="noreferrer">OpenSea Collection</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
  .intro {
    position: relative;
    min-height: 400px;
    padding-top: 140px;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .logo {
    position: relative;
    margin: 40px 0 60px 0;
    text-align: center;

    @media (min-width: 920px) {
      margin: 80px 0;
    }

    .nft {
      font-style: italic;
      font-size: 20px;
      position: absolute;
      right: 0;
      bottom: 0;
      color: #b63700;
    }
  }

  p {
    text-align: center;
  };

  .message-list {
    margin-top: 0;
    margin-bottom: 150px;
  }
</style>
