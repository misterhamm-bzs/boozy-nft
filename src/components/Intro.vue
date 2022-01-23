<template>
  <div class="intro">
    <div class="container">
        <img src="~@/assets/red-glass.png" alt="">
      <h1 class="logo">
        <span class="name">Cool Cocktails</span> <span class="nft">NFT</span>
      </h1>
      <div class="nes-container is-dark is-rounded is-centered">
        <p>CoolCocktails<em>NFT</em> are 5,000 collectible ERC-721 Non-Fungible Tokens (NFT) stored on
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
    padding: 120px 0 60px 0;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  img {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
  }
  .logo {
    position: relative;
    padding-bottom: 20px;
    max-width: 280px;
    line-height: 1.1;
    margin-bottom: 60px;

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
