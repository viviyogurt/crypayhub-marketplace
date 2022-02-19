<template>
  <MDBRow :cols="['1', 'md-2', 'lg-3', 'xxl-4']" class="g-4">
    <MDBCol v-for="(imgBase64, index) in nftBase64" :key="index">

      <!--        todo: image src data retrieve from backend instead of injecting through routing param-->
      <router-link :to="{name: 'NftInfo', params: {NftImg: imgBase64}}">

      <!--        todo: write the card as a separated component and pass data through props-->
        <MDBCard class="border border-3 shadow-2-strong mb-5 mx-1" :text="['dark', 'center']">
          <MDBCardTitle class="mt-3">{{ nftData[index].name }}</MDBCardTitle>
          <NftImg :img-source="imgBase64"></NftImg>
          <MDBCardBody :text="['dark', 'start']">
            <dl class="row">
              <dt class="col-sm-5 ">Collection</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData[index].collection }}</div>
              </dd>
              <dt class="col-sm-5">Creator</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData[index].creator }}</div>
              </dd>
              <dt class="col-sm-5">Price</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData[index].price }} ETH</div>
              </dd>
            </dl>
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <MDBIcon icon="gratipay" iconStyle="fab" class="me-2"/>
                {{ nftData[index].likeNum }}
              </div>
              <div>
                <MDBBtn color="info">Like</MDBBtn>
                <MDBBtn color="warning">Buy</MDBBtn>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </router-link>
    </MDBCol>
  </MDBRow>


</template>

<script>
import {MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBBtn} from "mdb-vue-ui-kit";
import nftBase64 from "../../assets/nft/nftBase64"
import NftImg from "../NftImg";

export default {
  name: "Display",
  components: {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBIcon,
    MDBBtn,
    NftImg
  },
  setup() {
    const nftData = [
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      },
      {
        name: "Rocker Leo",
        collection: "Rocker",
        creator: "bigboyclub.near",
        description: "Giraffes from different universes and dimensions have united in a tribe to take over the world!",
        price: 5.5,
        likeNum: 25,
      }
    ]
    return {nftBase64, nftData}
  }
};
</script>

<style lang="scss">

</style>