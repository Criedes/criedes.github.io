<template>
  <kinesis-container>
    <rs-my-works>
      <rs-base-nav :dark="true" />
    </rs-my-works>
    <rs-footer> </rs-footer>
  </kinesis-container>
</template>

<script>
export default {
  head() {
    return this.$headUtils({
      title: "Work - Rattanachat's Portfolio",
      description: "Get to know all about me, my skills and experiences",
      site_name: "Rattanachat's Portfolio",
    });
  },
};
</script>
