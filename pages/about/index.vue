<template>
  <kinesis-container>
    <rs-about-me>
      <rs-base-nav :dark="true" />
    </rs-about-me>
    <rs-footer :dark="true"> </rs-footer>
  </kinesis-container>
</template>

<script>
import ogImage from "@/assets/images/cimb.png";
export default {
  head() {
    return this.$seo({
      name: "About",
    });
  },
};
</script>
