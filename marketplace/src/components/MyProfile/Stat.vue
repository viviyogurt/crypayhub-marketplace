<template>
  <MDBContainer class="container mt-3 py-3">
  <section class="mb-3">
    <MDBCard>
      <MDBCardBody class="p-0">
        <MDBRow>
          <MDBCol lg="4" class="border-lg-end pe-lg-0">
            <div class="p-4">
              <p class="mb-1">Likecoin Balance</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="text-primary h4 me-2">426</span>
                  <span class="text-muted" style="font-size: 0.875rem">
                      from 484</span
                  >
                </p>
                <p class="mb-0 pb-1">
                  <MDBBadge pill color="success" class="fs-6 fw-normal">
                    <MDBIcon icon="arrow-up" size="sm" class="me-1" />
                    <span style="font-size: 0.875rem">12%</span></MDBBadge
                  >
                </p>
              </div>
            </div>
          </MDBCol>
          <div class="col-lg-4 border-lg-end px-lg-0">
            <div class="p-4">
              <p class="mb-1">Predict NFT Value</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="text-primary h4 me-2">3.2Eth</span>
                  <span class="text-muted" style="font-size: 0.875rem">
                      from 2.7 Eth</span
                  >
                </p>
                <p class="mb-0 pb-1">
                  <MDBBadge pill color="success" class="fs-6 fw-normal"
                  ><MDBIcon icon="arrow-up" size="sm" class="me-1" />
                    <span style="font-size: 0.875rem">18.5%</span></MDBBadge
                  >
                </p>
              </div>
            </div>
          </div>
          <MDBCol lg="4" class="ps-lg-0">
            <div class="p-4">
              <p class="mb-1">NFT Likecoin Price</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="text-primary h4 me-2">0.435</span>
                  <span class="text-muted" style="font-size: 0.875rem">
                      from 0.442USD</span
                  >
                </p>
                <p class="mb-0 pb-1">
                  <MDBBadge pill color="danger" class="fs-6 fw-normal"
                  ><MDBIcon icon="arrow-down" size="sm" class="me-1" />
                    <span style="font-size: 0.875rem">1.5%</span></MDBBadge
                  >
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </section>

  <section class="mb-5">
    <MDBRow>
    </MDBRow>
    <MDBRow>
      <MDBCol md="4" class="mb-4 mb-md-0">
        <MDBCard class="border">
          <MDBCardBody>
            <p class="text-muted mb-1">Liked NFT</p>
            <h2 class="mb-0">3</h2>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4" class="mb-4 mb-md-0">
        <MDBCard class="border">
          <MDBCardBody>
            <p class="text-muted mb-1">NFT Custody</p>
            <h2 class="mb-0">6</h2>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4" class="col-md-4">
        <MDBCard class="border">
          <MDBCardBody>
            <p class="text-muted mb-1">NFT Likecoin Price</p>
            <h2 class="mb-0">$0.454</h2>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </section>
  </MDBContainer>
</template>

<script>
import {MDBBadge, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-vue-ui-kit";

export default {
  name: "Stat",
  components: {
    MDBCard,
    MDBCardBody,
    MDBBadge,
    MDBIcon,
    MDBContainer,
    MDBRow,
    MDBCol,
  }
}
</script>

<style scoped>

</style>