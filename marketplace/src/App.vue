<template>
  <div>
    <div class="page-container">
      <NavBar/>
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

.page-container {
  min-height: 100vh;
}
</style>
