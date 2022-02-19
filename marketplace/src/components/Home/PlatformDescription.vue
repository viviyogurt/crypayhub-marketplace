<template>
  <MDBContainer class="text-center mt-5 px-5">
    <h2>Discover, collect and sell extraordinary NFTs</h2>
    <p>Rarify is the next Generation NFT Marketplace to lower NFT launching and investment threshold</p>
    <router-link to="/Explore">
      <MDBBtn size="lg" class="me-4"> Explore </MDBBtn>
    </router-link>
    <router-link to="/Create">
      <MDBBtn size="lg"> Create </MDBBtn>
    </router-link>
  </MDBContainer>
</template>

<script>

import {MDBContainer, MDBBtn} from "mdb-vue-ui-kit"

export default {
  name: "PlatformDescription",
  components: {
    MDBContainer,
    MDBBtn
  }
}
</script>

<style scoped>

</style>