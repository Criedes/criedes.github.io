<template>
  <nav
    :class="{ 'main-menu-light': !dark, 'main-menu-dark': dark }"
    :style="backgroundStyle"
  >
    <nuxt-link to="/"> Home </nuxt-link>
    <nuxt-link to="about"> About </nuxt-link>
    <nuxt-link to="skills"> Skills </nuxt-link>
    <nuxt-link to="portfolio"> Works </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: "transparent",
    },
  },
  computed: {
    backgroundStyle() {
      return "background:" + this.background;
    },
  },
};
</script>

<style lang="scss">
.main-menu-light {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
  width: 100%;
  color: #fff;
  a {
    font-size: 1em;
    position: relative;
    display: block;
    margin: 0 2px;
    padding: 0.625rem 0.85rem;
    text-transform: uppercase;
    overflow: hidden;
    text-decoration: unset;
    box-sizing: border-box;
    color: #fff;
  }

  a:before {
    box-sizing: border-box;
    transform: translateX(100%);
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 99.5%;
    height: 2px;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  a:after {
    box-sizing: border-box;
    transform: translateX(-100%);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 99.5%;
    height: 2px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  a:hover {
    color: inherit;
    text-decoration: none;
  }
  a:hover:before {
    transition: 0.1s transform linear, 0.1s height linear 0.1s;
    transform: translateX(0);
    height: 100%;
    border-color: #fff;
  }
  a:hover:after {
    transition: 0.1s transform linear 0.2s, 0.1s height linear 0.3s;
    transform: translateX(0);
    height: 100%;
    border-color: #fff;
  }
}

.main-menu-dark {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
  width: 100%;
  color: #000;
  a {
    position: relative;
    display: block;
    margin: 0 2px;
    padding: 0.625rem 1.25rem;
    text-transform: uppercase;
    overflow: hidden;
    text-decoration: unset;
    color: #000;
  }

  a:before {
    box-sizing: border-box;
    transform: translateX(100%);
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 99.5%;
    height: 2px;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  a:after {
    box-sizing: border-box;
    transform: translateX(-100%);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 99.5%;
    height: 2px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  a:hover {
    color: inherit;
    text-decoration: none;
  }
  a:hover:before {
    transition: 0.1s transform linear, 0.1s height linear 0.1s;
    transform: translateX(0);
    height: 100%;
    border-color: #000;
  }
  a:hover:after {
    transition: 0.1s transform linear 0.2s, 0.1s height linear 0.3s;
    transform: translateX(0);
    height: 100%;
    border-color: #000;
  }
}
</style>
