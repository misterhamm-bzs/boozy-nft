<template>
  <div class="description section">
    <div class="container">
      <section class="message-list">
          <section class="message -right quote">
            <!-- Balloon -->
            <img class="drank" src="~@/assets/red-glass.png" alt="">
            <div class="nes-balloon from-right is-dark">
              <p>Own one first and I'll give you the coveted mixologist title.</p>
            </div>
          </section>
        </section>
      <ul>
        <li><img src="~@/assets/drinks/1.png" alt=""></li>
        <li><img src="~@/assets/drinks/2.png" alt=""></li>
        <li><img src="~@/assets/drinks/3.png" alt=""></li>
        <li><img src="~@/assets/drinks/4.png" alt=""></li>
        <li><img src="~@/assets/drinks/5.png" alt=""></li>
        <li><img src="~@/assets/drinks/6.png" alt=""></li>
        <li><img src="~@/assets/drinks/7.png" alt=""></li>
        <li><img src="~@/assets/drinks/8.png" alt=""></li>
        <li><img src="~@/assets/drinks/9.png" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    li {
      margin-bottom: 15px;
       @media (min-width: 768px) {
        flex-basis: calc(33% - 15px);
        margin-bottom: 30px;
       }
    }
  }

  .message-list {
    margin-bottom: 80px;
    margin-top: 60px;

    @media (min-width: 920px) {
      margin-bottom: 120px;
    }

    .drank {
      right: 0;
      left: auto;
    }
  }
</style>
