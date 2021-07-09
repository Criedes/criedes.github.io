<template>
  <figure class="hoverable effect-move">
    <div class="hoverable-image effect-image" :style="style" alt=""></div>
    <figcaption class="hoverable-content">
      <span class="hero-tag effect-target effect-tag">{{ tag }}</span>
      <h2 class="hoverable-title effect-target effect-title">
        {{ title }}
      </h2>
      <p class="hoverable-text effect-target effect-text">
        {{ detail }}
      </p>
      <!-- <a class="hoverable-link" href="#">View more</a> -->
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    detail: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
  },
  computed: {
    style() {
      return {
        backgroundImage: `url(${this.background})`,
        height: "350px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$effect-background: #1d1d1d;
// Setting up blocks
.hoverable {
  position: relative;
  float: left;
  overflow: hidden;
  background: $effect-background;
  cursor: default;
  // will need to be changed
  margin: 0px;
}

.hoverable-image {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.2;
  background-position: 40% 60%;
  background-size: cover;
  background-repeat: no-repeat;
}

.hoverable-content {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hoverable-content::before,
.hoverable-content::after {
  pointer-events: none;
}

.hoverable-link {
  // make the link cover everything but show nothing
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.hoverable-title {
  letter-spacing: -1px;
  font-weight: 300;
  margin: 0;
  padding: 0.25em 0;
  line-height: 1;
  opacity: 0;
}

.hoverable-title span {
  font-weight: 800;
}

.hero-tag {
  display: inline-block;
  font-size: 0.5em;
  padding: 0.5em;
  background: #fff;
  color: #000;
  width: 50px;
  text-align: center;
}

.hoverable h2,
.hoverable p {
  margin: 0;
}

.hoverable p {
  letter-spacing: 1px;
  font-size: 68.5%;
  overflow: hidden;
}

// effect start

.effect-image {
  max-width: none;
  width: -webkit-calc(100% + 50px);
  width: calc(100% + 50px);
  opacity: 1;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

.effect-target {
  -webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
}

.effect-target {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

.effect-text {
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}

.effect-title {
  color: rgba(255, 255, 255, 1);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}

.effect-tag {
  color: rgba(0, 0, 0, 1);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}

.effect-move:hover .effect-text,
.effect-move:hover .effect-title,
.effect-move:hover .effect-tag {
  opacity: 1;
}

.effect-move:hover .effect-image {
  opacity: 0.2;
}

.effect-move:hover .effect-target,
.effect-move:hover .effect-image {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.effect-move:hover .effect-text {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}
</style>