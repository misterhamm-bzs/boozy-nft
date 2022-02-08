<template>
  <div class="description section">
    <div class="container">
      <br><br><br>
      <h2 class="nes-text is-primary">Your favorite drink. <br> Now just for you.</h2>
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
</style>
