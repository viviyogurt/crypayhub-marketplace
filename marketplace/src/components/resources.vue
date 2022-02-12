<template>
  <MDBContainer>
    <MDBNavbar expand="lg" bg="light" container>
      <MDBNavbarBrand href="#" class="text-reset">Crypayhub  ·  MarketPlace
      </MDBNavbarBrand>
      <MDBNavbarToggler
      @click="collapse1 =! collapse1"
      target="#navbarSupportedContent">
      </MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav class="mb-2 mb-lg-0">
          <MDBNavbarItem to="#" >
            Explore
          </MDBNavbarItem>
          <MDBNavbarItem to="#" >
            Resources
          </MDBNavbarItem>
          <MDBNavbarItem to="#" >
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
    MDBCollapse
 } from "mdb-vue-ui-kit";

export default {
  name: "Resources",
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text-reset {
  color: 'light';
}
</style>

