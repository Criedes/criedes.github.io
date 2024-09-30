<template>
  <div class="header">
    <rs-base-nav />
    <div class="header-body center">
      <h1 class="title-1">
        <rs-base-typewriter
          :speed="100"
          :interval="30"
          :deleted="false"
          words="Full Stack Developer"
        >
        </rs-base-typewriter>
      </h1>
      <div class="title-2">
        <rs-base-typewriter
          :speed="100"
          :interval="30"
          :deleted="false"
          words="I develop simple things, and I love what I do."
        >
        </rs-base-typewriter>
      </div>
    </div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$bg: #2467f8;
$text-color: #d7b94c;
$caret-color: white;
$text-length: 32;
$animation-time: 3s;

.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: $bg;
  overflow: hidden;
  position: relative;
  z-index: -2;

  .header-body {
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

  .title-1 {
    color: white;
    font-size: 4em;
    letter-spacing: -1px;
    font-weight: 700;
    text-align: center;
  }

  .title-2 {
    font-weight: 100;
    color: white;
    font-size: 1.75em;
    text-align: center;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }

  // Typing style
  .typing {
    position: relative;
    &::after {
      content: "|";
      position: absolute;
      right: 0;
      width: 100%;
      color: $caret-color;
      background: $bg;
      animation: typing $animation-time steps($text-length) forwards,
        caret 1s infinite;
    }
  }

  .cube {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px darken(#0040c1, 8%);
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 8s ease-in forwards infinite;
    z-index: -1;

    &:nth-child(2n) {
      border-color: lighten(#0040c1, 10%);
    }

    &:nth-child(2) {
      animation-delay: 1s;
      left: 25vw;
      top: 40vh;
    }

    &:nth-child(3) {
      animation-delay: 4s;
      left: 75vw;
      top: 50vh;
    }

    &:nth-child(4) {
      animation-delay: 6s;
      left: 90vw;
      top: 10vh;
    }

    &:nth-child(5) {
      animation-delay: 8s;
      left: 10vw;
      top: 85vh;
    }

    &:nth-child(6) {
      animation-delay: 10s;
      left: 50vw;
      top: 10vh;
    }
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

// Animation
@keyframes typing {
  to {
    width: 0;
  }
}
@keyframes caret {
  50% {
    color: transparent;
  }
}

@media only screen and (max-width: 400px) {
  .header {
    .title-1 {
      color: white;
      font-size: 2.25em;
      letter-spacing: -1px;
      font-weight: 700;
      text-align: center;
    }

    .title-2 {
      font-weight: 100;
      color: white;
      font-size: 1.25em;
      text-align: center;
    }
  }
}
</style>
