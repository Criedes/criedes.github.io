<template>
  <kinesis-container event="scroll">
    <kinesis-element>
      <rs-header />
    </kinesis-element>
    <kinesis-element>
      <rs-about-me />
    </kinesis-element>
    <kinesis-element>
      <rs-my-skills />
    </kinesis-element>
    <kinesis-element>
      <rs-my-works />
    </kinesis-element>
    <kinesis-element>
      <rs-footer />
    </kinesis-element>
  </kinesis-container>
</template>

<script>
// import ogImage from "@/assets/images/cimb.png";
export default {
  head() {
    return this.$seo({
      name: "Home",
    });
  },
};
</script>
