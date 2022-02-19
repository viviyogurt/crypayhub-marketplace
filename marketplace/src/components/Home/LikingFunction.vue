<template>
  <MDBContainer class="container">
    <!--Section: Design Block-->
    <section class="mb-8">
      <MDBRow>
        <MDBCol col="12">
          <h2 class="text-center mb-3">Revolutionary NFT Liking Function</h2>
          <p
              class="text-center text-muted mb-5 pb-2 mx-auto"
              style="max-width: 700px">
            NFT creators are at liberty to set the portion of proceed of sales to be shared with NFT
            Likers.

            NFT Likers are able to use NFTLikecoins to like NFT art pieces they find having high
            artistic value.
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow class="gx-lg-5">
        <MDBCol xl="6" lg="12" md="6" class="mb-xl-5 mb-lg-4 mb-md-5 mb-4">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0">
              <div class="p-3 bg-primary rounded-4 shadow-2-strong">
                <i class="fas fa-chart-line text-white fa-fw fa-2x"></i>
              </div>
            </div>
            <div class="flex-grow-1 ms-4">
              <p class="fw-bold mb-1">Solid proof of the NFTs’ art value</p>
              <p class="text-muted mb-0">
                NFTs are arranged according to the number of NFTLikecoins received in descending order.
                The more NFTLikecoins received, the NFT would be displayed at a higher rank
              </p>
            </div>
          </div>
        </MDBCol>

        <MDBCol xl="6" lg="12" md="6" class="mb-xl-5 mb-lg-4 mb-md-5 mb-4">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0">
              <div class="p-3 bg-primary rounded-4 shadow-2-strong">
                <i class="fab fa-adversal text-white fa-fw fa-2x"></i>
<!--                <MDBIcon-->
<!--                    icon="dollar-sign"-->
<!--                    size="lg"-->
<!--                    class="text-white fa-fw"-->
<!--                ></MDBIcon>-->
              </div>
            </div>
            <div class="flex-grow-1 ms-4">
              <p class="fw-bold mb-1">Market launch with minimal marketing cost</p>
              <p class="text-muted mb-0">
                Cater to creators with inadequate marketing resources.
                No cost is incurred by the creators for putting up the NFTs on Rarify for sale
              </p>
            </div>
          </div>
        </MDBCol>

        <MDBCol xl="6" lg="12" md="6" class="mb-xl-5 mb-lg-4 mb-md-0 mb-4">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0">
              <div class="p-3 bg-primary rounded-4 shadow-2-strong">
<!--                <MDBIcon icon="mdb" iconStyle="fab" c/>-->
                <i class="fas fa-dollar-sign text-white fa-fw fa-2x"></i>
<!--                <i class="fab fa-dollar-sign text-white fa-fw fa-2x"></i>-->
              </div>
            </div>
            <div class="flex-grow-1 ms-4">
              <p class="fw-bold mb-1">Alternative NFT investment</p>
              <p class="text-muted mb-0">
                Lower the threshold for NFT project investment. You are able to invest NFT as a Liker instead of a buyer.
                It has the advantage of diversifying investment risk through liking different NFTs
              </p>
            </div>
          </div>
        </MDBCol>

        <MDBCol xl="6" lg="12" md="6" class="mb-xl-5 mb-0">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0">
              <div class="p-3 bg-primary rounded-4 shadow-2-strong">
                <i class="fas fa-balance-scale text-white fa-fw fa-2x"></i>
<!--                <i class="fab fa-chart-line text-white fa-fw fa-2x"></i>-->
              </div>
            </div>
            <div class="flex-grow-1 ms-4">
              <p class="fw-bold mb-1">Early identification of NFTs with high art value</p>
              <p class="text-muted mb-0">
                Relatively free from price manipulation.
                Liking function could dilute of creators’ influence through likings by public
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </section>
    <!--Section: Design Block-->
  </MDBContainer>
</template>

<script>
import {MDBContainer, MDBCol, MDBRow} from "mdb-vue-ui-kit";

export default {
  name: "LikingFunction",
  components: {
    MDBContainer,
    MDBCol,
    MDBRow,
    // MDBIcon,
  },
}
</script>

<style scoped>

</style>