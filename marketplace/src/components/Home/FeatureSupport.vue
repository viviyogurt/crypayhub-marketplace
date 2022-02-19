<template>
  <MDBContainer class="pt-5 mt-5">
    <!--Section: Design Block-->
    <section class="mb-8">
      <MDBRow>
        <MDBCol col="12">
          <h2 class="text-center text-uppercase mb-5 pb-3">Support Features</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow class="text-center">
        <MDBCol lg="3" md="6" class="mb-lg-5 mb-4">
          <i class="fas fa-plus-circle text-primary fa-4x mb-4"></i>
<!--          <MDBIcon icon="map-marker-alt" size="2x" class="text-primary mb-3" />-->
          <h5>NFT Creating</h5>
          <p>Create your own NFT with ERC20 or ERC1155 standard</p>
        </MDBCol>
        <MDBCol lg="3" md="6" class="mb-lg-5 mb-4">
<!--          <MDBIcon icon="phone" size="2x" class="text-primary mb-3" />-->
          <i class="fab fa-buysellads text-primary mb-3 fa-4x mb-4"></i>
          <h5>Auction</h5>
          <p>Sellers and buyers interact to agree on a price for the NFT that is being auctioned</p>
        </MDBCol>
        <MDBCol lg="3" md="6" class="mb-lg-5 mb-4">
<!--          <MDBIcon icon="envelope" size="2x" class="text-primary mb-3" />-->
          <i class="fab fa-gratipay text-primary fa-4x mb-4"></i>
          <h5>NFT Liking</h5>
          <p>Like the genesis sale NFTs for liker rewards</p>
        </MDBCol>
        <MDBCol lg="3" md="6" class="mb-lg-5 mb-4">
<!--          <MDBIcon-->
<!--              iconStyle="fab"-->
<!--              icon="facebook"-->
<!--              size="2x"-->
<!--              class="text-primary mb-3"-->
<!--          />-->
          <i class="fas fa-award fa-4x text-primary mb-4"></i>
          <h5>Royalties</h5>
          <p>Set the proportion of the NFT selling revenue offered for the original creator when it sold every time</p>
        </MDBCol>
      </MDBRow>
    </section>
    <!--Section: Design Block-->
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  // MDBIcon
} from "mdb-vue-ui-kit";
import { reactive, toRefs } from "vue";
export default {
  name: "FeatureSupport",
  components: {
    MDBContainer,
    MDBCol,
    MDBRow,
    // MDBIcon,
  },
  setup() {
    const form = reactive({
      name: "",
      email: "",
      message: "",
    });

    const { name, email, message } = toRefs(form);

    return {
      name,
      email,
      message,
    };
  },
};
</script>

<style scoped>

</style>