<template>
  <!-- Container for demo purpose -->
  <MDBContainer class="container mt-3 py-3">
    <div class="col-12">
      <h3 class="mb-4">Listed NFT</h3>
    </div>

    <MDBRow>
      <MDBCol class="col-xl-3 col-sm-6 col-12" v-for="(img, index) in listedNFT" :key="index">
        <NFTImg  :img-source="img" class="mt-4"></NFTImg>
        <div class="d-flex">
          <MDBBtn class="w-50 btn-info mt-2 me-2">Detail</MDBBtn>
          <MDBBtn class="w-50 btn-dark mt-2">Sell</MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>

    <div class="col-12 mt-5">
      <h3 class="mb-4">Non Listed NFT</h3>
    </div>

    <MDBRow>
      <MDBCol class="col-xl-3 col-sm-6 col-12" v-for="(img, index) in nonListedNFT" :key="index">
        <NFTImg  :img-source="img" class="mt-4"></NFTImg>
        <div class="d-flex">
          <MDBBtn class="w-50 btn-info mt-2 me-2">Detail</MDBBtn>
          <MDBBtn class="w-50 btn-danger mt-2">Take Down</MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-vue-ui-kit";
import nftBase64 from "../../assets/nft/nftBase64";
import NFTImg from "../NftImg"


export default {
  name: "MyNFT",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    NFTImg,
    MDBBtn
  },
  setup(){
    const listedNFT = nftBase64.slice(0,2)
    const nonListedNFT = nftBase64.slice(3,7)
    return {listedNFT, nonListedNFT}
  }
}
</script>

<style scoped>

</style>