<!--<template>-->
<!--  <MDBNavbar expand="lg" dark bg="dark" container class="fixed-top">-->
<!--    <MDBNavbarToggler-->
<!--        @click="collapse1 = !collapse1"-->
<!--        target="#navbarSupportedContent"-->
<!--    ></MDBNavbarToggler>-->
<!--    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">-->
<!--      <MDBNavbarBrand to="../Home" class="brand-container">-->
<!--        <img-->
<!--          height="28"-->
<!--          alt=""-->
<!--          src="../assets/logo.png"-->
<!--        />-->
<!--        Rarify-->
<!--      </MDBNavbarBrand>-->
<!--      <MDBNavbarNav class="mb-2 mb-lg-0">-->
<!--        <MDBNavbarItem to="../" > Home </MDBNavbarItem>-->
<!--        <MDBNavbarItem to="../Explore" > Explore </MDBNavbarItem>-->
<!--        <MDBNavbarItem to="../Create"> Create </MDBNavbarItem>-->
<!--        <MDBNavbarItem to="#" disabled> Collection </MDBNavbarItem>-->
<!--        <MDBNavbarItem to="#" disabled> Stat </MDBNavbarItem>-->
<!--      </MDBNavbarNav>-->

<!--      <form class="d-flex input-group w-auto me-3 mb-3 mb-lg-0">-->
<!--        <MDBInput-->
<!--            inputGroup-->
<!--            :formOutline="false"-->
<!--            class="rounded"-->
<!--            v-model="search"-->
<!--            aria-describedby="search-addon"-->
<!--            aria-label="Search"-->
<!--            placeholder="Search for NFT or Collection"-->
<!--        >-->
<!--          <span class="input-group-text border-0" id="search-addon">-->
<!--            <MDBIcon-->
<!--                icon="search"-->
<!--                style="color: rgba(255, 255, 255, 0.55)"-->
<!--            ></MDBIcon>-->
<!--          </span>-->
<!--        </MDBInput>-->
<!--      </form>-->
<!--    </MDBCollapse>-->
<!--&lt;!&ndash;    <div class="d-flex align-items-center justify-content-start" id="personal-item-container">&ndash;&gt;-->
<!--&lt;!&ndash;      <i class="fas fa-wallet fa-2x me-3 ms-2 ms-sm-0" style="color: #e8ecf2"></i>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;      <MDBBtn size="sm" class="me-1 me-md-2 text-start">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <i class="fas fa-wallet fa-3x" style="color: #e8ecf2"></i>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;      </MDBBtn>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;      <MDBDropdown class="nav-item" v-model="dropdown2" align="end">&ndash;&gt;-->
<!--&lt;!&ndash;        <MDBDropdownToggle&ndash;&gt;-->
<!--&lt;!&ndash;            tag="a"&ndash;&gt;-->
<!--&lt;!&ndash;            class="hidden-arrow"&ndash;&gt;-->
<!--&lt;!&ndash;            @click="dropdown2 = !dropdown2"&ndash;&gt;-->
<!--&lt;!&ndash;        ><img&ndash;&gt;-->
<!--&lt;!&ndash;            src="../assets/nft/nft8.png"&ndash;&gt;-->
<!--&lt;!&ndash;            class="rounded-circle"&ndash;&gt;-->
<!--&lt;!&ndash;            height="32"&ndash;&gt;-->
<!--&lt;!&ndash;            alt="Avatar"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--&lt;!&ndash;        </MDBDropdownToggle>&ndash;&gt;-->
<!--&lt;!&ndash;        <MDBDropdownMenu>&ndash;&gt;-->
<!--&lt;!&ndash;          <MDBDropdownItem to="#">My portfolio</MDBDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;          <MDBDropdownItem to="#">Settings</MDBDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;          <MDBDropdownItem to="#">Logout</MDBDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;        </MDBDropdownMenu>&ndash;&gt;-->
<!--&lt;!&ndash;      </MDBDropdown>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--  </MDBNavbar>-->
<!--  <div class="top-space"></div>-->
<!--</template>-->

<!--<script>-->
<!--import {-->
<!--  MDBNavbar,-->
<!--  MDBNavbarToggler,-->
<!--  MDBNavbarBrand,-->
<!--  MDBNavbarNav,-->
<!--  MDBNavbarItem,-->
<!--  MDBCollapse,-->
<!--  // MDBDropdown,-->
<!--  // MDBDropdownToggle,-->
<!--  // MDBDropdownMenu,-->
<!--  // MDBDropdownItem,-->
<!--  MDBIcon,-->
<!--  MDBInput,-->
<!--  mdbLazy,-->
<!--    // MDBBtn-->
<!--} from "mdb-vue-ui-kit";-->
<!--import { ref } from "vue";-->

<!--export default {-->
<!--  name: "NavBar",-->
<!--  components: {-->
<!--    MDBNavbar,-->
<!--    MDBNavbarToggler,-->
<!--    MDBNavbarBrand,-->
<!--    MDBNavbarNav,-->
<!--    MDBNavbarItem,-->
<!--    MDBCollapse,-->
<!--    // MDBDropdown,-->
<!--    // MDBDropdownToggle,-->
<!--    // MDBDropdownMenu,-->
<!--    // MDBDropdownItem,-->
<!--    MDBIcon,-->
<!--    MDBInput,-->
<!--    // MDBBtn-->
<!--  },-->
<!--  directives: {-->
<!--    mdbLazy,-->
<!--  },-->
<!--  setup() {-->
<!--    const collapse1 = ref(false);-->
<!--    const dropdown1 = ref(false);-->
<!--    const dropdown2 = ref(false);-->
<!--    const search = ref("");-->

<!--    return {-->
<!--      collapse1,-->
<!--      dropdown1,-->
<!--      dropdown2,-->
<!--      search,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->

<!--.top-space{-->
<!--  height: 60px;-->
<!--}-->

<!--.brand-container {-->
<!--  font-size: x-large;-->
<!--  font-weight: bold;-->
<!--}-->

<!--.navbar-dark .navbar-nav .show > .nav-link,-->
<!--.navbar-dark .navbar-nav .nav-link.active {-->
<!--  color: rgba(255, 255, 255, 0.85);-->
<!--  background-color: rgba(255, 255, 255, 0.15);-->
<!--  border-radius: 0.3rem;-->
<!--}-->
<!--.navbar-dark .navbar-nav .nav-link:hover,-->
<!--.navbar-dark .navbar-nav .nav-link:focus {-->
<!--  color: rgba(255, 255, 255, 0.85);-->
<!--  background-color: rgba(255, 255, 255, 0.15);-->
<!--  border-radius: 0.3rem;-->
<!--}-->
<!--@media (max-width: 768px) {-->
<!--  .navbar-collapse,-->
<!--  .right-items {-->
<!--    padding-left: 0.75rem;-->
<!--    padding-right: 0.75rem;-->
<!--  }-->
<!--}-->
<!--</style>-->


<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="/">
<!--      <img-->
<!--          height="28"-->
<!--          alt=""-->
<!--          src="../assets/logo.png"-->
<!--      />-->
<!--      Rarify-->
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
  // MDBDropdown,
  // MDBDropdownToggle,
  // MDBIcon,
  // MDBDropdownMenu,
  // MDBDropdownItem
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
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBIcon,
    // MDBDropdownMenu,
    // MDBDropdownItem
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
