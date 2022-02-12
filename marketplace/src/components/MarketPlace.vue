<template>
  <MDBContainer >
    <div d-flex flex-column mb-3>
      <div class="p-2">
            <MDBNavbar expand="lg" bg="light" container>
              <MDBNavbarBrand href="#" class="text-reset">Crypayhub  ·  MarketPlace
              </MDBNavbarBrand>
              <MDBNavbarToggler
              @click="collapse1 =! collapse1"
              target="#navbarSupportedContent">
              </MDBNavbarToggler>
              <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
                <MDBNavbarNav class="mb-2 mb-lg-0">
                  <MDBNavbarItem to="#Explore" >
                    Explore
                  </MDBNavbarItem>
                  <MDBNavbarItem to="#Resources" >
                    Resources
                  </MDBNavbarItem>
                  <MDBNavbarItem to="#Create" >
                  Create
                  </MDBNavbarItem>
                </MDBNavbarNav>
            <!-- Search Form -->
              <form class="d-flex input-group w-auto">
                <input 
                type="search"
                class="form-control"
                placeholder="Type query"
                aria-label="Search">
                <MDBBtn outline="dark">
                  Search
                </MDBBtn>
              </form>
          </MDBCollapse>
        </MDBNavbar>
      </div>
      <div class="p-2">
        <div
          class="bg-image p-4 d-flex align-items-center justify-content-centerd-flex flex-column mb-3 "
          style="
            background-image: url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/010.webp');
            height: 50vh;
            width: 85%;
            margin-top: 2.5rem;
            border:none;
            display: flex;
            margin: 0 auto;
          "
        >
        <div class="top-container ">
          <div class="mask gradient-custom">
            <div class="d-flex  align-items-center h-100">
              <h1 class="mb-3 h2">Trade NFT using Crypay Token</h1>
            
            </div>
          </div>
        </div>
        <!-- <div class="d-flex align-items-center justify-content-start">
          <div class="d-inline ">
            <MDBBtn color="primary" style="margin-right: 1.5rem" size="lg">Explore</MDBBtn>
          </div>
          <div class="d-inline">
            <MDBBtn outline="primary" size="lg">Create</MDBBtn>
          </div>
        </div> -->
      </div>
      </div>
      <div class="p-2">
        <div class="body">
          <div class="half"> 
              <MDBRow center>
                <MDBCol md="4" class="kickvq"><Card/></MDBCol>
                <MDBCol md="4" class="kickvq"><Card/></MDBCol>
                <MDBCol md="4" class="kickvq"><Card/></MDBCol>
            </MDBRow>
          </div>
        <div class="half">
          <MDBRow center>
              <MDBCol md="4" class="kickvq"><Card/></MDBCol>
              <MDBCol md="4" class="kickvq"><Card/></MDBCol>
              <MDBCol md="4" class="kickvq"><Card/></MDBCol>
          </MDBRow>
        </div>
        
        </div>
      </div>
      
      <div class="footer p-2"><Footer/></div>
    
    </div>
    
    </MDBContainer>
</template>

<script>
import { 
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBCol,
    MDBRow
 } from "mdb-vue-ui-kit";
 import Card from "@/components/comps/Card.vue"
 import Footer from "@/components/comps/Footer.vue"

export default {
  name: "MarketPlace",
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBRow,
    MDBCol,
    Card,
    Footer
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  /* display: table;
  margin:0 auto; */
  margin-top: 5rem;
}
.gradient-custom {
    /* fallback for old browsers */
    background: #a18cd1;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
      90deg,
      rgb(255, 255, 255),
      rgba(255,255,255,0.15) 100%
      /* rgba(29, 236, 197, 0.6),
      rgba(91, 14, 214, 0.6) 100% */
    );

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0.63) 100%
      /* rgba(29, 236, 197, 0.6),
      rgba(91, 14, 214, 0.6) 100% */
    );
  }
.kickvq {
  max-width: calc(2 * var(--totalWidth));
  --totalWidth: 200px;
  align-items: center;
}
.text-reset {
  color: 'light';
}
.half {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}


</style>

