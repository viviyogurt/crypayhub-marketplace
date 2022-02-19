<template>
  <MDBNavbar expand="lg" light bg="light" container class="fixed-top">
    <MDBNavbarBrand href="/">
      <img
          height="38"
          alt=""
          src="../assets/rarifyLogo.jpg"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">

        <MDBNavbarItem to="/">
          Home
        </MDBNavbarItem>
        <MDBNavbarItem to="/Explore">
          Explore
        </MDBNavbarItem>
        <MDBNavbarItem to="/Create">
          Create
        </MDBNavbarItem>
        <MDBNavbarItem to="/MyProfile">
          My profile
        </MDBNavbarItem>
        <MDBNavbarItem to="Stat" disabled>
          Stat
        </MDBNavbarItem>

      </MDBNavbarNav>

      <!-- Search form -->
      <form class="d-flex input-group w-auto">
        <input
            type="search"
            class="form-control"
            placeholder="Type query"
            aria-label="Search"
        />
        <MDBBtn outline="primary">
          Search
        </MDBBtn>
      </form>
    </MDBCollapse>
  </MDBNavbar>
  <div class="empty-space"></div>
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
} from 'mdb-vue-ui-kit';
import {ref} from 'vue';

export default {
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    return {
      collapse1,
      dropdown1
    }
  }
};
</script>

<style>
.empty-space {
  height: 60px;
}
</style>