<template>
  <MDBFooter :text="['center', 'lg-start']">
    <!-- Copyright -->
    <div class="text-center p-3 bg-dark bg-opacity-10" >
      © 2022 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">HK Blockchain Hub Limited</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
import { MDBFooter } from 'mdb-vue-ui-kit';

export default {
  name: "Footer",
  components: {
    MDBFooter
  },
}
</script>

<style scoped>

</style>