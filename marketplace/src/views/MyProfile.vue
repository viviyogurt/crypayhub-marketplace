<template>
  <MDBContainer class="my-5">
    <Stat></Stat>
    <MyNFT></MyNFT>
    <LikingProfile></LikingProfile>
  </MDBContainer>
</template>

<script>
import {MDBContainer} from "mdb-vue-ui-kit";
import MyNFT from "../components/MyProfile/MyNFT";
import LikingProfile from "../components/MyProfile/LikingProfile";
import Stat from "../components/MyProfile/Stat"

export default {
  name: "MyProfile",
  components: {
    MyNFT,
    LikingProfile,
    Stat,
    MDBContainer
  }
}
</script>

<style scoped>

</style>