<template>
  <kinesis-container>
    <slot></slot>
    <kinesis-container class="about-me">
      <kinesis-element
        class="bubble"
        data-aos="fade-up-right"
        data-aos-duration="200"
        data-aos-delay="100"
        :strength="20"
      >
      </kinesis-element>
      <kinesis-element
        class="bubble"
        data-aos="fade-down-left"
        data-aos-duration="200"
        data-aos-delay="100"
      >
      </kinesis-element>
      <kinesis-element
        class="bubble"
        data-aos="fade-right"
        data-aos-duration="300"
        data-aos-delay="100"
      >
      </kinesis-element>
      <kinesis-element
        class="bubble"
        data-aos="fade-up-left"
        data-aos-duration="300"
        data-aos-delay="100"
      >
      </kinesis-element>
      <kinesis-element class="detail">
        <rs-base-bubble-text
          text="Hi I'm Rattanachat"
          class="title"
          data-aos="fade"
          data-aos-duration="200"
          data-aos-delay="100"
        ></rs-base-bubble-text>
        <rs-base-bubble-text
          text="Since beginning my journey as a developer nearly 5 years ago, I've worked with prominent companies such as CIMB Thai Bank, SS&C Technologies, and Accenture Thailand. During this time, I’ve developed key features for financial systems, initiated critical backend services like GraphQL, Redis, and Kafka-DB2 integrations, and led multiple teams in designing and developing robust solutions for complex systems. I’m always eager to learn, continually improving my skills to deliver innovative and scalable solutions for enterprise needs."
          class="paragraph"
          data-aos="fade"
          data-aos-duration="200"
          data-aos-delay="200"
        ></rs-base-bubble-text>
      </kinesis-element>
      <kinesis-element>
        <img src="~/assets/images/me.png" />
      </kinesis-element>
    </kinesis-container>
  </kinesis-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-me {
  // position: relative;
  display: grid;
  grid-template-columns: 65% 35%;
  column-gap: 50px;
  width: 100%;
  height: 100vh;
  align-items: center;
  padding: 0px 100px;
  box-sizing: border-box;
  overflow: hidden;
  justify-content: center;

  .title {
    font-weight: 700;
    font-size: 4em;
  }

  .paragraph {
    font-size: 1.25em;
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

  .bubble {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 20px darken(#0040c1, 8%);
    z-index: -999;
    border-radius: 50%;

    &:nth-child(1n) {
      border-color: lighten(#a3c458, 10%);
      width: 500px;
      height: 500px;
    }

    &:nth-child(1) {
      left: -20vw;
      top: 70vh;
    }

    &:nth-child(2n) {
      border-color: lighten(#0040c1, 10%);
      width: 300px;
      height: 300px;
    }

    &:nth-child(2) {
      left: 90vw;
      top: 0vh;
    }

    &:nth-child(3n) {
      border-color: lighten(#e78341, 10%);
      width: 160px;
      height: 160px;
    }

    &:nth-child(3) {
      left: 1vw;
      top: 5vh;
    }
    &:nth-child(4n) {
      border-color: lighten(#32c5ff, 10%);
      width: 200px;
      height: 200px;
    }

    &:nth-child(4) {
      left: 80vw;
      top: 70vh;
    }
  }
}
@media only screen and (max-width: 1144px) {
  .about-me {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding: 0px 50px;
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
  .about-me {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding: 0px 50px;
    justify-content: center;
    box-sizing: border-box;
    .title {
      font-weight: 700;
      font-size: 2em;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75em;
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

@media only screen and (max-width: 400px) {
  .about-me {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding: 0px 50px;
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
  }
}
</style>