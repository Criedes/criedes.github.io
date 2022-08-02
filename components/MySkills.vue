<template>
  <kinesis-container>
    <slot></slot>
    <kinesis-container class="my-skills">
      <kinesis-element class="box" data-aos="fade-up-right" data-aos-duration="200" data-aos-delay="100" :strength="20">
      </kinesis-element>
      <kinesis-element class="box" data-aos="fade-right" data-aos-duration="300" data-aos-delay="100">
      </kinesis-element>
      <kinesis-element class="box" data-aos="fade-up-left" data-aos-duration="300" data-aos-delay="100">
      </kinesis-element>
      <kinesis-element class="detail">
        <rs-base-bubble-text text="Skills & Experiences" class="title" data-aos="fade" data-aos-duration="200"
          data-aos-delay="100"></rs-base-bubble-text>
        <rs-base-bubble-text
          text="I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts."
          class="paragraph" data-aos="fade" data-aos-duration="200" data-aos-delay="200"></rs-base-bubble-text>
        <rs-base-bubble-text
          text="I also have full-stack developer experience in freelance project to create end to end functions"
          class="paragraph" data-aos="fade" data-aos-duration="200" data-aos-delay="200"></rs-base-bubble-text>
      </kinesis-element>

      <kinesis-element class="chart-container">
        <rs-base-bar-chart title="Vue.js/Nuxt.js" percentage="80" color="#b1ff00" :delay="100">
        </rs-base-bar-chart>
        <rs-base-bar-chart title="Spring Boot" percentage="70" color="#b1ff00" :delay="700">
        </rs-base-bar-chart>
        <rs-base-bar-chart title="Android(Kotlin)" percentage="60" color="#b1ff00" :delay="300">
        </rs-base-bar-chart>
        <rs-base-bar-chart title="Angular" percentage="55" color="#b1ff00" :delay="500">
        </rs-base-bar-chart>
        <rs-base-bar-chart title="Node.js" percentage="50" color="#b1ff00" :delay="900">
        </rs-base-bar-chart>
        <flickity :options="settings" data-aos="fade" data-aos-duration="200" data-aos-delay="200">
          <div class="experience-element">
            <div class="experience-title">Associate Software Engineer</div>
            <div class="experience-subtitle">
              SS&C Technologies Holdings, Inc. <br />
              Dec 2021 - Present
            </div>
            <div class="experience-detail">
              Initiate to implement GraphQL for microservices <br />
              Initiate to implement Redis for microservices <br />
              Implement Redis sink connector for messages from Apache Kafka <br />
              Integrate Apache Kafka to microservices <br />
              Pricing and Transactional services for Alternative Investment <br />
            </div>
          </div>
          <div class="experience-element">
            <div class="experience-title">Software Engineer</div>
            <div class="experience-subtitle">
              CIMB Thai Bank Public Company Limited <br />
              Jun 2019 - Dec 2021
            </div>
            <div class="experience-detail">
              Bond Booking Feature: CIMB Thai Digital Banking Application<br />
              OMS Mutual Fund Backoffice Website<br />
            </div>
          </div>
          <div class="experience-element">
            <div class="experience-title">Freelance Developer (Nuxt.js)</div>
            <div class="experience-subtitle">
              Freelance<br />
              Jan 2021 - Jun 2021
            </div>
            <div class="experience-detail">Backoffice HR Management System</div>
          </div>
          <div class="experience-element">
            <div class="experience-title">Freelance Developer (Nuxt.js)</div>
            <div class="experience-subtitle">
              Focalsolution Co.Ltd.<br />
              Oct 2020 - Apr 2021
            </div>
            <div class="experience-detail">True VLearn2<br /></div>
          </div>
          <div class="experience-element">
            <div class="experience-title">Frontend Developer</div>
            <div class="experience-subtitle">
              Better-i-t<br />
              Oct 2018 - May 2019
            </div>
            <div class="experience-detail">
              PTTGC Board Websites (Sharepoint)<br />
              Amazon Claim bot Websites (Angular)
            </div>
          </div>
        </flickity>
      </kinesis-element>
    </kinesis-container>
  </kinesis-container>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        contain: true,
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        adaptiveHeight: true,
      },
    };
  },
};
</script>

<style lang="scss">
$bg: #2467f8;
$text-color: #d7b94c;
$caret-color: white;
$text-length: 32;
$animation-time: 3s;

.my-skills {
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 50px;
  width: 100%;
  height: auto;
  min-height: 100vh;
  align-items: center;
  padding: 0px 100px;
  box-sizing: border-box;
  overflow: hidden;
  justify-content: center;
  background: $bg;

  .title {
    font-weight: 700;
    font-size: 4em;
    color: #fff;
  }

  .paragraph {
    margin-top: 20px;
    font-size: 1.25em;
    color: #fff;
  }

  .detail {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  img {
    display: flex;
    width: 100%;
    max-width: 400px;
    height: auto;
  }
}

.flickity-slide {
  position: absolute;
  width: 50%;
  height: 100%;
}

.box {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 20px darken(#0040c1, 8%);
  z-index: -999;

  &:nth-child(1n) {
    border-color: lighten(#a3c458, 10%);
    width: 200px;
    height: 200px;
  }

  &:nth-child(1) {
    left: 10vw;
    top: 80vh;
  }

  &:nth-child(2n) {
    border-color: lighten(#e78341, 10%);
    width: 500px;
    height: 100px;
  }

  &:nth-child(2) {
    left: -5vw;
    top: 2vh;
  }

  &:nth-child(3n) {
    border-color: lighten(#32c5ff, 10%);
    width: 200px;
    height: 200px;
  }

  &:nth-child(3) {
    left: 80vw;
    top: 70vh;
  }
}

.chart {
  &-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    margin-top: 50px;
  }
}

.experience {
  &-container {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 20px;
    width: 100%;
    overflow: hidden;
    margin-top: 50px;
    flex-wrap: wrap;
    overflow-x: scroll;
  }

  &-element {
    padding: 20px 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: center;
    min-height: 200px;
    background: #fff;
    margin: 10px;
  }

  &-title {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 8px;
  }

  &-subtitle {
    font-size: 1em;
    font-weight: 200;
    margin-bottom: 8px;
  }

  &-detail {
    font-size: 0.75em;
    font-weight: 400;
  }
}

.flickity-slider.is-selected {
  background: #ed2;
}

.flickity-prev-next-button {
  top: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateY(-50%);
}

@media only screen and (max-width: 1144px) {
  .my-skills {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;
    align-items: center;
    padding: 50px 50px;
    justify-content: center;
    box-sizing: border-box;

    .title {
      font-weight: 700;
      font-size: 3em;
      text-align: center;
    }

    .paragraph {
      font-size: 1em;
      text-align: center;
    }

    img {
      display: flex;
      width: 100%;
      max-width: 500px;
      height: auto;
    }
  }
}

@media only screen and (max-width: 768px) {
  .my-skills {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;
    align-items: center;
    padding: 50px 50px;
    justify-content: center;
    box-sizing: border-box;

    .title {
      font-weight: 700;
      font-size: 1.9em;
      text-align: center;
    }

    .paragraph {
      font-size: 0.8em;
      text-align: center;
    }

    img {
      display: flex;
      width: 100%;
      max-width: 500px;
      height: auto;
    }
  }

  .box {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 20px darken(#0040c1, 8%);
    z-index: -999;

    &:nth-child(1n) {
      border-color: lighten(#a3c458, 10%);
      width: 200px;
      height: 200px;
    }

    &:nth-child(1) {
      left: 10vw;
      top: 120vh;
    }

    &:nth-child(2n) {
      border-color: lighten(#0040c1, 10%);
      width: 300px;
      height: 300px;
    }

    &:nth-child(2) {
      left: 70vw;
      top: 5vh;
    }

    &:nth-child(3n) {
      border-color: lighten(#e78341, 10%);
      width: 200px;
      height: 200px;
    }

    &:nth-child(3) {
      left: -10vw;
      top: -27vh;
    }

    &:nth-child(4n) {
      border-color: lighten(#32c5ff, 10%);
      width: 200px;
      height: 200px;
    }

    &:nth-child(4) {
      left: 90vw;
      top: 70vh;
    }
  }
}

@media only screen and (max-width: 400px) {
  .my-skills {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;
    align-items: center;
    padding: 50px 20px;
    box-sizing: border-box;

    .title {
      font-weight: 700;
      font-size: 1.5em;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75em;
      text-align: center;
    }

    img {
      display: flex;
      width: 100%;
      max-width: 170px;
      height: auto;
    }

    .box {
      position: absolute;
      top: 80vh;
      left: 45vw;
      width: 10px;
      height: 10px;
      border: solid 20px darken(#0040c1, 8%);
      z-index: -999;

      &:nth-child(1n) {
        border-color: lighten(#a3c458, 10%);
        width: 200px;
        height: 200px;
      }

      &:nth-child(1) {
        left: 10vw;
        top: 150vh;
      }

      &:nth-child(2n) {
        border-color: lighten(#0040c1, 10%);
        width: 300px;
        height: 300px;
      }

      &:nth-child(2) {
        left: 70vw;
        top: 5vh;
      }

      &:nth-child(3n) {
        border-color: lighten(#e78341, 10%);
        width: 200px;
        height: 200px;
      }

      &:nth-child(3) {
        left: -10vw;
        top: -30vh;
      }

      &:nth-child(4n) {
        border-color: lighten(#32c5ff, 10%);
        width: 200px;
        height: 200px;
      }

      &:nth-child(4) {
        left: 90vw;
        top: 70vh;
      }
    }
  }
}
</style>