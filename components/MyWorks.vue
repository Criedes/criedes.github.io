<template>
  <kinesis-container>
    <kinesis-container class="portfolio">
      <slot></slot>
      <kinesis-element class="detail">
        <rs-base-bubble-text
          text="My Portfolio"
          class="title"
          data-aos="fade"
          data-aos-duration="200"
          data-aos-delay="100"
        ></rs-base-bubble-text>
        <rs-base-bubble-text
          text=" A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list. "
          class="paragraph"
          data-aos="fade"
          data-aos-duration="200"
          data-aos-delay="200"
        ></rs-base-bubble-text>
      </kinesis-element>
      <div class="portfolio-content">
        <rs-base-hoverable-image
          tag="Android"
          title="CIMB Thai Digital Banking Application"
          detail="Bond booking feature"
          :background="require('@/assets/images/cimb.png')"
          data-aos="fade-up"
          :data-aos-duration="800"
          :data-aos-delay="100"
        ></rs-base-hoverable-image>
        <rs-base-hoverable-image
          tag="Android"
          title="FinLive"
          detail="Live broadcast application"
          :background="require('@/assets/images/finlive.png')"
          data-aos="fade-up"
          :data-aos-duration="800"
          :data-aos-delay="200"
        ></rs-base-hoverable-image>
        <rs-base-hoverable-image
          tag="Android"
          title="EzSpeak"
          detail="Learning platform (In development)"
          :background="require('@/assets/images/ezspeak.png')"
          data-aos="fade-up"
          :data-aos-duration="800"
          :data-aos-delay="300"
        ></rs-base-hoverable-image>
        <rs-base-hoverable-image
          tag="Nuxt.js"
          title="Vlearn 2"
          detail="Learning platform"
          :background="require('@/assets/images/vlearn.png')"
          data-aos="fade-up"
          :data-aos-duration="800"
          :data-aos-delay="400"
        ></rs-base-hoverable-image>
        <rs-base-hoverable-image
          tag="Nuxt.js"
          title="Buy Don't Pay Backoffice"
          detail="Data Management for Buy Don't Pay"
          :background="require('@/assets/images/bdp.png')"
          data-aos="fade-up"
          :data-aos-duration="800"
          :data-aos-delay="500"
        ></rs-base-hoverable-image>
        <rs-base-hoverable-image
          tag="Nuxt.js"
          title="Acheive Nex HR Management Backoffice"
          detail="Data Management for Acheive Nex HR Management"
          :background="require('@/assets/images/hrm.png')"
          data-aos="fade-up"
          :data-aos-duration="800"
          :data-aos-delay="600"
        ></rs-base-hoverable-image>
      </div>
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
.portfolio {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  min-height: 100vh;
  align-items: center;
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
    padding: 50px 100px;
    box-sizing: border-box;
  }
  img {
    display: flex;
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  &-content {
    display: grid;
    grid-template-columns: 33.33% 33.34% 33.33%;
    width: 100%;
  }
}
@media only screen and (max-width: 1144px) {
  .portfolio {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: center;
    .title {
      font-weight: 700;
      font-size: 3em;
      text-align: center;
    }

    .paragraph {
      font-size: 1em;
      text-align: center;
    }
    .detail {
      padding: 50px 50px;
    }
    img {
      display: flex;
      width: 100%;
      max-width: 500px;
      height: auto;
    }
    &-content {
      display: grid;
      grid-template-columns: 50% 50%;
      width: 100%;
    }
  }
}

@media only screen and (max-width: 768px) {
  .portfolio {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: center;
    .title {
      font-weight: 700;
      font-size: 2em;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75em;
      text-align: center;
    }
    .detail {
      padding: 50px 50px;
    }
    img {
      display: flex;
      width: 100%;
      max-width: 500px;
      height: auto;
    }
    &-content {
      display: grid;
      grid-template-columns: 100%;
      width: 100%;
    }
  }
}

@media only screen and (max-width: 400px) {
  .portfolio {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: center;
    .title {
      font-weight: 700;
      font-size: 1.5em;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75em;
      text-align: center;
    }
    .detail {
      padding: 50px 20px;
    }
    .detail {
      padding: 50px 20px;
    }
    img {
      display: flex;
      width: 100%;
      max-width: 170px;
      height: auto;
    }
    &-content {
      display: grid;
      grid-template-columns: 100%;
      width: 100%;
    }
  }
}
</style>