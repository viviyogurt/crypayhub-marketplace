<template>
     <MDBCard style="width: 18rem">
        <MDBCardImg
          :src="background_src"
          top
          alt="..."
        />
          <MDBCardBody>
            <MDBCardTitle>The Starry Night</MDBCardTitle>
            <MDBCardText>
              The Starry Night is an oil-on-canvas painting.
            </MDBCardText>
            <MDBListGroup flush>
                <MDBListGroupItem>
                  <MDBIcon size="xs" icon="user" > Vincent van Gogh</MDBIcon>
                </MDBListGroupItem>
                <MDBListGroupItem>
                  <MDBIcon size="xs" icon="heart" > 60 Rarify Token</MDBIcon>
                </MDBListGroupItem>
            </MDBListGroup>
          <MDBCardBody>
            <MDBCardLink href='#' class="text-reset"> Explore More </MDBCardLink>
          </MDBCardBody>
          </MDBCardBody>
      </MDBCard>
</template>

<script>
import { 
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCardImg,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardLink
 } from "mdb-vue-ui-kit";
 import background from "/src/assets/background.jpeg";

export default {
  name: "Card",
  components: {
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCardImg,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardLink
  },
  props: {
    msg: String,
  },
  data() {
    return {
    background_src: background
    };
}
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

