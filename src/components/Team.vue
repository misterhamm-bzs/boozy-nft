<template>
  <div class="container">
    <h2>The Team</h2>
    <ul>
      <li>
        <img src="~@/assets/drinks/1.png" alt="">
        <span class="name nes-badge">
          <span class="is-error">Ruby</span>
        </span>
        <span class="position">Mr. Business Pants</span>
      </li>
      <li>
        <img src="~@/assets/drinks/2.png" alt="">
        <span class="name nes-badge">
          <span class="is-error">Big Mark</span>
        </span>
        <span class="position">Techno Wizard</span>
      </li>
      <li>
        <img src="~@/assets/drinks/9.png" alt="">
        <span class="name nes-badge">
          <span class="is-error">Hamm</span>
        </span>
        <span class="position">Also Contributed</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {

    };
  },
};
</script>

 <style lang="scss" scoped>
  h2 {
    margin-top: 80px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;

    @media (min-width: 920px) {
      align-items: flex-start;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 40px auto;
    padding: 0;

    @media (min-width: 920px) {
      width: calc(33% - 15px);
      margin-bottom: 0;
    }
  }
  .name, .position {
    display: inline-block;
  }
  .name {
    font-weight: bold;
    font-size: 20px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    span {
      left: 0;
    }
  }
  .position {
    font-weight: 100;
  }
 </style>
