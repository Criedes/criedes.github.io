<template>
  <div :class="{ 'footer-light': !dark, 'footer-dark': dark }">
    <div class="footer-body center">
      <div class="social-container">
        <a href="https://www.facebook.com/TomtanZeRoAGE" target="_blank" class="social-icon">
          <mdicon name="facebook" />
        </a>
        <a href="https://www.linkedin.com/in/rattanachat-sooksumpus-b579b9135" target="_blank" class="social-icon">
          <mdicon name="linkedin" />
        </a>
        <a href="https://github.com/Criedes" target="_blank" class="social-icon">
          <mdicon name="github" />
        </a>
        <a href="tel:+66956144176" target="_blank" class="social-icon">
          <mdicon name="phone" />
        </a>
        <a href="mailto:rattanachat.s.work@gmail.com" target="_blank" class="social-icon">
          <mdicon name="email" />
        </a>
      </div>
    </div>
    <div class="made-by">
      Made by me
      <mdicon name="copyright" /> rattanachat.s
    </div>
    <img class="built-with-nuxt" :src="!dark
      ? require('~/assets/images/built-with-nuxt.svg')
      : require('~/assets/images/built-with-nuxt-white.svg')
    " alt="" />
    <div class="made-by mt-5">
      Profile Updated ©2024
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$bg: #fff;
$text-color: #d7b94c;
$caret-color: white;
$text-length: 32;
$animation-time: 3s;

.mt-5 {
  margin-top: 20px;
}

.footer-light {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  background: $bg;
  overflow: hidden;
  position: relative;
  z-index: -2;
  align-items: center;
  padding-bottom: 16px;

  .footer-body {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
  }

  .center {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .social-container {
    display: flex;
    width: auto;
    column-gap: 16px;
  }

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #2467f8;
    border: 1px solid #2467f8;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s all linear;
    background: #fff;

    &:hover {
      background: #2467f8;
      color: #fff;
      border: 1px solid #fff;
    }
  }

  .built-with-nuxt {
    width: 120px;
  }

  .title-1 {
    color: #000;
    font-size: 2.75em;
    letter-spacing: -1px;
    font-weight: 700;
    text-align: center;
  }

  .title-2 {
    font-weight: 100;
    color: #000;
    font-size: 1.75em;
    text-align: center;
  }

  .made-by {
    font-size: 0.8em;
  }
}

.footer-dark {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  background: #2467f8;
  overflow: hidden;
  position: relative;
  z-index: -2;
  align-items: center;
  padding-bottom: 16px;

  .footer-body {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
  }

  .center {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .social-container {
    display: flex;
    width: auto;
    column-gap: 16px;
  }

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s all linear;
    background: #2467f8;

    &:hover {
      background: #fff;
      color: #2467f8;
      border: 1px solid #fff;
    }
  }

  .built-with-nuxt {
    width: 120px;
  }

  .title-1 {
    color: #fff;
    font-size: 2.75em;
    letter-spacing: -1px;
    font-weight: 700;
    text-align: center;
  }

  .title-2 {
    font-weight: 100;
    color: #fff;
    font-size: 1.75em;
    text-align: center;
  }

  .made-by {
    color: #fff;
    font-size: 0.8em;
  }
}
</style>
