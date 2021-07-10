<template>
  <kinesis-container>
    <rs-my-skills>
      <rs-base-nav background="#2467f8" />
    </rs-my-skills>
    <rs-footer> </rs-footer>
  </kinesis-container>
</template>

<script>
import ogImage from "@/assets/images/cimb.png";
export default {
  head() {
    return this.$headUtils({
      lang: "en",
      title: "Skills - Rattanachat's Portfolio",
      description: "Get to know all about me, my skills and experiences",
      image: ogImage,
    });
  },
};
</script>
