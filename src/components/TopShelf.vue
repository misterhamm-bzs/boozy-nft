<template>
  <div class="top-shelf section container">
    <h2 class="nes-text is-primary">Not satisfied with the mundane?</h2>
    <p>CoolCocktailNFT has 50 Legendary drinks that are truly the rarest of all. We call these our "Top Shelf" drinks. Each one has been hand crafted and features a different combination of the rarest attributes. Truly a drink for the discriminating palate.</p>

    <div class="legendary">
      <span class="nes-badge tag">
        <span class="is-warning">
          <span class="shiny">
            <span class="inner-shiny">Legendary</span>
          </span>
        </span>
      </span>
      <img src="~@/assets/drinks/5.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopShelf',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.top-shelf {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .legendary {
    position: relative;
    margin-top: 60px;

    .tag {
      position: absolute;
      top: -10px;
      right: 0;
    }

    .nes-badge span.is-warning:first-child {
      background-color: #f7d51d;
      position: relative;
    }
  }
.shiny {
    background-color: black;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
}

    .shiny::before {
        background-position: -180px;
        -webkit-animation: flare 5s infinite;
        -webkit-animation-timing-function: linear;
        background-image: linear-gradient(65deg, transparent 20%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.3) 27%, transparent 27%, transparent 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        content: "Legendary";
        color: #FFF;
        display: block;
        padding-right: 140px;
        position: absolute;
    }

    .shiny::after {
        content: "Legendary";
        color: #FFF;
        display: block;
        position: absolute;
        top: 0;
        z-index: -1;
    }

.inner-shiny::after, .inner-shiny::before {
    -webkit-animation: sparkle 5s infinite;
    -webkit-animation-timing-function: linear;
    background: #FFF;
    border-radius: 100%;
    box-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FFF, 0 0 25px #FFF, 0 0 30px #FFF, 0 0 35px #FFF;
    content: "";
    display: block;
    height: 15px;
    opacity: 0.7;
    position: absolute;
    width: 15px;
}

.inner-shiny::before {
    -webkit-animation-delay: 0.2s;
    height: 12px;
    left: 0.12em;
    top: 0.8em;
    width: 12px;
}

.inner-shiny::after {
    top: 0.32em;
    right: -5px;
}

@-webkit-keyframes flare {
    0% {
        background-position: -180px;
    }


    100% {
        background-position: 500px;
    }
}
@-webkit-keyframes sparkle {
    0% {
        opacity: 0;
    }

    30% {
        opacity: 0;
    }

    40% {
        opacity: 0.8;
    }

    60% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

</style>
