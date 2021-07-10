<template>
  <kinesis-container class="error">
    <div class="error-body center">
      <h1 class="title-1">
        <rs-base-typewriter
          :speed="100"
          :interval="30"
          :deleted="false"
          words="404 Page not found"
        >
        </rs-base-typewriter>
      </h1>
      <div class="title-2">
        <rs-base-typewriter
          :speed="50"
          :interval="30"
          :deleted="false"
          words="The link you clicked may be broken or the page may have been removed."
        >
        </rs-base-typewriter>
      </div>
      <nuxt-link to="/" class="btn-5">Return to home</nuxt-link>
    </div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </kinesis-container>
</template>

<script>
import ogImage from "@/assets/images/cimb.png";
export default {
  head() {
    return this.$headUtils({
      lang: "en",
      title: "404 - Rattanachat's Portfolio",
      description: "Page not found",
      image: ogImage,
    });
  },
};
</script>

<style lang="scss" scoped>
$bg: #2467f8;
$text-color: #d7b94c;
$caret-color: white;
$text-length: 32;
$animation-time: 3s;

.error {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: $bg;
  overflow: hidden;
  position: relative;
  z-index: -2;

  .error-body {
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

  .circle {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px darken(#0040c1, 8%);
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: circle 8s ease-in forwards infinite;
    z-index: -1;
    border-radius: 50%;

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
  a,
  a::after {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  a {
    background: none;
    border: 3px solid #fff;
    border-radius: 50px;
    color: #fff;
    display: flex;
    font-size: 1.6em;
    font-weight: bold;
    margin: 1em auto;
    padding: 16px;
    position: relative;
    box-sizing: border-box;
    width: auto;
    cursor: pointer;
    text-decoration: unset;
  }

  a::before,
  a::after {
    background: #fff;
    content: "";
    position: absolute;
    z-index: -1;
  }

  a:hover {
    color: $bg;
  }

  /* a 5 */
  .btn-5 {
    overflow: hidden;
  }

  .btn-5::after {
    /*background-color: #f00;*/
    height: 100%;
    left: -35%;
    top: 0;
    transform: skew(50deg);
    transition-duration: 0.6s;
    transform-origin: top left;
    width: 0;
  }

  .btn-5:hover:after {
    height: 100%;
    width: 135%;
  }
}

@keyframes circle {
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
  .error {
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
