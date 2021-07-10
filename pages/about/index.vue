<template>
  <kinesis-container>
    <rs-about-me>
      <rs-base-nav :dark="true" />
    </rs-about-me>
    <rs-footer :dark="true"> </rs-footer>
  </kinesis-container>
</template>

<script>
export default {
  head() {
    return this.$headUtils({
      title: "About - Rattanachat's Portfolio",
      description: "Get to know all about me, my skills and experiences",
      site_name: "Rattanachat's Portfolio",
    });
  },
};
</script>
