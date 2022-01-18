<template>
  <div>
    <h1>Team</h1>
    <ul>
      <li>
        <img src="~@/assets/ruby.png" alt="">
        <div class="info">
          <h2>Ruby</h2>
          <p>Crypto expert, marketing genius</p>
          <span>
             <i class="nes-icon twitter"></i> @ruby_crypto
          </span>
        </div>
      </li>
      <li>
        <img src="~@/assets/mark.png" alt="">
        <div class="info">
          <h2>Mark</h2>
          <p>Codes anything, lifts anything</p>
          <span>
             <i class="nes-icon twitter"></i> @mark_the_mark
          </span>
        </div>
      </li>
      <li>
        <img src="~@/assets/chris.png" alt="">
        <div class="info">
          <h2>Chris</h2>
          <p>Webmaster, happily not cool</p>
          <span>
              <i class="nes-icon twitter"></i> @chris_the_chris
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    margin-top: 60px;
    padding: 0;

    li {
      width: calc(33% - 20px);
    }
  }
</style>
