<template>
  <div class="intro">
    <div class="container">
        <img class="drank" src="~@/assets/red-glass.png" alt="">
      <h1 class="logo">
        <img src="~@/assets/logo.png" alt="">
      </h1>
      <div class="nes-container is-dark is-rounded is-centered">
        <p>CoolCocktail<em>NFT</em> are 5,000 collectible ERC-721 Non-Fungible Tokens (NFT) stored on
Ethereum blockchain.</p>
      </div>
      <div class="cta">
        <p>Buy yourself a drink, you deserve it. <br><br>
          <a href="#" class="nes-btn is-primary">OpenSea</a>
        </p>
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
    //background-image: url('~@/assets/Stars.png');
    min-height: 400px;
    padding-top: 120px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .drank {
    position: absolute;
    top: 10px;
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

</style>
