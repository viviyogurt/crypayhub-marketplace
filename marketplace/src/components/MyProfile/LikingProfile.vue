<template>
<MDBContainer class="my-5">
  <h2>NFT Liking Profiles</h2>
  <MDBTable hover striped responsive>
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Likecoin Amount</th>
      <th scope="col">Total Likecoin</th>
      <th scope="col">Proportion</th>
      <th scope="col">Liker Reward%</th>
      <th scope="col">Revenue</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(likingItem, index) in likingProfile" :key="index">
      <th scope="row">{{index + 1}}</th>
      <td>{{likingItem.name}}</td>
      <td>{{ likingItem.amount }}</td>
      <td>{{likingItem.nftTotalReceived}}</td>
      <td>{{ likingItem.holdingRatio }} %</td>
      <td>{{ likingItem.likerReward }} %</td>
      <td>{{ likingItem.revenue }} Eth</td>
    </tr>

    </tbody>
  </MDBTable>
</MDBContainer>
</template>

<script>
import {MDBContainer, MDBTable} from "mdb-vue-ui-kit";

export default {
  name: "LikingProfile",
  components: {
    MDBContainer,
    MDBTable
  },
  setup(){
   const likingProfile = [
       {
         name: "Rocker Leo",
         amount: "25",
         nftTotalReceived: "75",
         holdingRatio: "33",
         likerReward: "5%",
         revenue: "0.17"
       },
     {
       name: "Hello World",
       amount: "11",
       nftTotalReceived: "44",
       holdingRatio: "25",
       likerReward: "7%",
       revenue: "0.04"
     },
     {
       name: "Lazy Monkey",
       amount: "120",
       nftTotalReceived: "600",
       holdingRatio: "20",
       likerReward: "5%",
       revenue: "0.21"
     }
   ]
    return {likingProfile}
  }
}
</script>

<style scoped>

</style>