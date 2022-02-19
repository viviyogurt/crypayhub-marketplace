<template>
  <MDBContainer class="mt-5">
    <MDBRow class="align-items-start bg-light mb-3">
      <MDBCol class="col-12 col-lg-6 col-xl-4 d-flex flex-column">
        <NftImg :img-source="imgSource"></NftImg>
        <div class="mt-2 mb-4">{{ nftData.description }}</div>
        <MDBInput label="# Likecoin" type="number"/>
        <MDBBtn color="info" class="w-100 mt-2" size="lg">Like</MDBBtn>
        <MDBBtn color="primary" class="w-100 mt-2" size="lg">Buy</MDBBtn>
        <h4 class="mt-5">NFT Revenue Allocation</h4>
        <MDBChart type="doughnut" :data="pieChartData" class="mt-2"/>
      </MDBCol>
      <MDBCol class="col-12 col-lg-6 col-xl-7 offset-xl-1">
        <MDBCard class="border mt-4 mt-lg-0 bg-opacity-50">
          <MDBCardHeader class="text-center h2">NFT Information</MDBCardHeader>
          <MDBCardBody>
            <dl class="row mb-0">
              <dt class="col-sm-5 ">Name</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData.name }}</div>
              </dd>
              <dt class="col-sm-5 ">Collection</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData.creator }}</div>
              </dd>
              <dt class="col-sm-5">Creator</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData.collection }}</div>
              </dd>
              <dt class="col-sm-5">Price</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData.price }} ETH</div>
              </dd>
              <dt class="col-sm-5">Liker Reward</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData.likerReward }}%</div>
              </dd>
              <dt class="col-sm-5">Royalties</dt>
              <dd class="col-sm-7">
                <div class="d-flex justify-content-end">{{ nftData.royalties }}%</div>
              </dd>
            </dl>
          </MDBCardBody>
        </MDBCard>

        <MDBCard class="border mt-4 ">
          <h2 class="mt-4 text-center">Ownership Event History</h2>
          <MDBDatatable :dataset="nftOwnershipEvent">
          </MDBDatatable>
        </MDBCard>

        <MDBCard class="border mt-4">
          <h2 class="mt-4 text-center">NFT Liking Events</h2>
          <MDBDatatable :dataset="nftLikiingEvent">
          </MDBDatatable>
          <MDBCardFooter class="text-muted text-end">
            <h5>Total Likercoin Received: 55</h5>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  // MDBCardTitle,
    MDBChart,
  MDBBtn,
  MDBDatatable,
  MDBCardFooter,
  // MDBBadge
  // MDBCardText,
  MDBCardHeader,
  MDBInput,
} from 'mdb-vue-ui-kit';
import NftImg from "../components/NftImg";
import {useRoute} from "vue-router";
// import {onMounted} from "vue";

export default {
  name: "NftInfo",
  components: {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBChart,
    // MDBCardTitle,
    MDBBtn,
    MDBDatatable,
    MDBCardFooter,
    MDBInput,
    // MDBBadge,
    // MDBCardText,
    MDBCardHeader,
    NftImg
  },
  setup() {
    const route = useRoute()
    const imgSource = route.params.NftImg
    const nftData = {
      name: "Rocker Leo",
      collection: "Rocker",
      creator: "bigboyclub.near",
      description: "Randomly generated and fully on-chain squiggly lines, the first project in the Atlantes series",
      price: 5.5,
      totalSupply: 1,
      likerReward: 10,
      royalties: 5,
      likeNum: 25,
    }
    const nftOwnershipEvent = {
      columns: ["Event", "Price", "From", "To", "Date"],
      rows: [
        [
          "Create",
          "",
          "",
          "CryptoResearch",
          "01-01-2022"
        ],
        [
          "Transfer",
          "0.1",
          "CryptoResearch",
          "CocoBear",
          "01-01-2022"
        ],
        [
          "Transfer",
        "1.1",
        "CocoBear",
        "Sanders333",
        "03-01-2022"
        ],
        [
          "Transfer",
        "2.5",
        "Sanders333",
        "Butters666",
        "26-01-2022"
        ]
      ]
    }
    const nftLikiingEvent = {
      columns: ["Event", "Liker", "Amount", "Date"],
      rows: [
        [
          "Liking",
          "Charles2021",
          "25",
          "01-01-2022"
        ],
        [
          "Liking",
          "Alice",
          "5",
          "01-01-2022"
        ],
        [
          "Liking",
          "Bob Research 12",
          "25",
          "01-01-2022"
        ],
      ]
    }

    const pieChartData = {
      labels: ['Royalties', 'Liker Reward', 'NFT Seller'],
      datasets: [
        {
          label: 'Traffic',
          data: [nftData.likeNum, nftData.royalties, 100 - nftData.royalties - nftData.likerReward],
          backgroundColor: [
            'rgba(63, 81, 181, 0.5)',
            'rgba(77, 182, 172, 0.5)',
            'rgba(66, 133, 244, 0.5)',
          ],
        },
      ],
    };

    return {imgSource, nftData, nftOwnershipEvent, nftLikiingEvent, pieChartData}
  }
}
</script>

<style scoped>

</style>