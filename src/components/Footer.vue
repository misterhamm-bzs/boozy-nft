<template>
  <div class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-left">
           <img src="~@/assets/logo.png" alt="">
           <div class="social">
              <a href="https://discord.gg/XGbYUnzEHt" target="_blank" rel="noreferrer" title="link to discord server">
                <img src="~@/assets/discord.jpg" />
              </a>
              <a href="https://twitter.com/CoolCocktailNFT" target="_blank" rel="noreferrer" title="link to twitter account">
                <i class="nes-icon twitter"></i>
              </a>
              <a href="https://www.instagram.com/coolcocktailnft/" target="_blank" rel="noreferrer" title="link to instagram account">
                <i class="nes-icon instagram"></i>
              </a>
              <a href="https://www.facebook.com/CoolCocktail-NFT-100327719255771" target="_blank" rel="noreferrer" title="link to facebook account">
                <i class="nes-icon facebook"></i>
              </a>
              <a href="https://opensea.io/collection/coolcocktailnft" class="nes-btn is-primary" target="_blank" rel="noreferrer">OpenSea</a>
           </div>
        </div>
        <hr>
        <div class="footer-bottom">
          <div class="footer-left">&copy; 2022 CoolCocktailNFT</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 60px;

  @media (min-width: 920px){
    margin-top: 100px;
  }
}
  img {
    max-width: 315px;
  }
  .social {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 920px) {
      margin-left: 40px;
    }

    .nes-icon {
      margin-bottom: 0;
      transform-origin: 0;
    }

    img {
      border-radius: 6px;
      display: block;
      max-width: 34px;
    }

    a {
      display: inline-block;
      margin-right: 10px;
    }

  }
  .footer-left {
    margin-bottom: 20px;

    @media (min-width: 920px){
      display: flex;
      justify-content: space-between;
    }
  }

  .footer-bottom {
    @media (min-width: 920px) {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-bottom: 15px;
    }
  }
</style>
