<template>
    <nav>
      <img src="~@/assets/cc-logo.png" class="logo" alt="">
      <div class="nes-container is-rounded">
        <h2>Drink menu</h2>
        <ul class="nes-list is-disc main-menu">
          <li v-for="link in links" :key="link.name">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      links: [
        {
          name: 'Info',
          path: '/',
        },
        {
          name: 'Uniqueness Index',
          path: '/uniqueness-index',
        },
        {
          name: 'Top Shelf Drinks',
          path: '/top-shelf',
        },
        {
          name: 'Testimonials',
          path: '/testimonials',
        },
        {
          name: 'Team',
          path: '/team',
        },
        {
          name: 'Contact',
          path: '/contact',
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
    width: 460px;
  }
  .nes-container {
    margin-top: 40px !important;
  }
  .main-menu {
    padding-left: 42px !important;

    a {
      color: black;
      padding-left: 10px;
    }

    li {
      margin-bottom: 20px;
    }
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 30px;
    text-decoration: underline;
  }
  .logo {
    max-width: 100%;
  }
</style>
