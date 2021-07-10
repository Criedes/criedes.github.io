<template>
  <kinesis-container>
    <rs-my-skills>
      <rs-base-nav background="#2467f8" />
    </rs-my-skills>
    <rs-footer> </rs-footer>
  </kinesis-container>
</template>

<script>
export default {
  head() {
    return this.$headUtils({
      title: "Skills - Rattanachat's Portfolio",
      description: "Get to know all about me, my skills and experiences",
      site_name: "Rattanachat's Portfolio",
    });
  },
};
</script>
