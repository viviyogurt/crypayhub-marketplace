<template>
     <MDBCard>
        <MDBCardImg
          src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/010.webp"
          top
          alt="..."
        />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </MDBCardText>
            <MDBBtn outline="danger" floating>
                <MDBIcon icon="heart"></MDBIcon>
            </MDBBtn>
          </MDBCardBody>
      </MDBCard>
</template>

<script>
import { 
    MDBBtn,
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCardImg,
    MDBIcon
 } from "mdb-vue-ui-kit";

export default {
  name: "Card",
  components: {
    MDBBtn,
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCardImg,
    MDBIcon
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
.MDBCard {
    width: 18rem;
}
</style>

