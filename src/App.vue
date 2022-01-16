<template>
  <div class="page">
    <Menu/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    height: 100vh;
  }

  main {
    background-color: rgba(251, 243, 231, 0.5);
    flex-grow: 1;
    padding: 60px;
  }
</style>
