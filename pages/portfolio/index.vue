<template>
  <kinesis-container>
    <rs-my-works>
      <rs-base-nav :dark="true" />
    </rs-my-works>
    <rs-footer> </rs-footer>
  </kinesis-container>
</template>

<script>
import ogImage from "@/assets/images/cimb.png";
export default {
  head() {
    return this.$seo({
      name: "Work",
    });
  },
};
</script>
