<template>
  <div class="intro">
    <div class="container">
        <img class="drank" src="~@/assets/red-glass.png" alt="">
      <h1 class="logo">
        <img src="~@/assets/logo.png" alt="">
      </h1>

        <section class="message-list">
          <section class="message -left">
            <!-- Balloon -->
            <i class="nes-bcrikko"></i>
            <div class="nes-balloon from-left is-dark">
              <p>It's been a long day hunting down NFTs.  Why not take a break and grab yourself a unique crypto cocktail
          to sip on in the metaverse.</p>
            </div>
          </section>
        </section>
      <br> <br> <br>
        <p>
          CoolCocktail<em>NFT</em>s are 5,000 AI generated NFTs stored on the ETH blockchain.
            These cocktails have hundreds of uniquely generated attributes, built by our algorithm to
            give you a pixel perfect drink of choice.  Will you be the one to collect one of the 50
            hand crafted Legendary cocktails?
        </p>
        <img src="~@/assets/drinks/1.png" alt="">
<br> <br>
        <div class="nes-container is-dark is-centered">
          <p>The best part, we are pledging 10% of our earnings to support "BLANK CHARITY"</p>
        </div>

      <div class="cta">
          <a href="#" class="nes-btn is-primary">OpenSea</a>
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
  .drank {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
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
  }
</style>
