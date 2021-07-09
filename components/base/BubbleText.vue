<template>
  <div>
    <span v-for="(chr, index) in text" :key="index">
      <span :class="{ class: true, wobble: true }">
        <span v-if="chr === ' '"> &nbsp; </span>
        <span v-else> {{ chr }}</span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.wobble {
  display: inline-block;
  transform: scale(1);
  transition: 0.1s all linear;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.5);
  }
}

@keyframes upscale {
  50% {
    transform: scale(1.5);
  }
}
</style>