<template>
  <div class="chart-element">
    <div class="chart-title">
      {{ title }}
      <footer>
        <div
          class="bar"
          :style="style"
          data-aos="slide-right"
          :data-aos-duration="duration"
          :data-aos-delay="delay"
        ></div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 500,
    },
    delay: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "#000",
    },
    percentage: {
      type: String,
      default: "100",
    },
  },
  computed: {
    style() {
      return (
        "background-color: " +
        this.color +
        ";" +
        "width: " +
        this.percentage +
        "%;"
      );
    },
  },
};
</script>

<style lang="scss">
.chart {
  &-element {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;

    footer {
      width: 100%;
      background: #000;
      .bar {
        margin-top: 8px;
        width: 90%;
        height: 4px;
        background: yellow;
      }
    }
  }
  &-title {
    font-size: 1.25em;
    color: #fff;
  }
}
</style>