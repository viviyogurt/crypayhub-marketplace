<template>
  <MDBContainer>
    <h1 class="mt-5">Explorer NFTs</h1>
    <Display class="mt-2"></Display>
  </MDBContainer>
</template>

<script>
import { MDBContainer } from 'mdb-vue-ui-kit';
import Display from "../components/Explore/Display";

export default {
  name: "Explore",
  components: {
    MDBContainer,
    Display
  },
};
</script>

<style lang="scss">

</style>