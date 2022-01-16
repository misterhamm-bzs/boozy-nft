<template>
    <nav>
      <h1>Cool Drinks</h1>
      <ul class="nes-list is-disc main-menu nes-container is-rounded">
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
      <img src="~@/assets/drank.png" class="drank" alt="">
    </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      links: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Team',
          path: '/team',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  nav {
    background-image: url('~@/assets/paper.png');
    padding: 40px;
    position: relative;
    width: 260px;
  }
  .main-menu {
    margin-top: 40px !important;
    padding-left: 42px !important;

    a {
      color: black;
      padding-left: 10px;
    }

    li {
      margin-bottom: 20px;
    }
  }
  .drank {
    position: absolute;
    bottom: -46px;
    right: -32px;
  }
</style>
