<template>
    <MDBCarousel
        v-model="carousel8"
        :items="items8"
        fade
        dark
  />
</template>

<script>
import { MDBCarousel } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  name: "Carousel",
  components: {
      MDBCarousel
  },
  setup() {
      const items8 = [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(19).webp",
          alt: "...",
          label: "First slide label",
          caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
          alt: "...",
          label: "Second slide label",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(40).webp",
          alt: "...",
          label: "Third slide label",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ];
      const carousel8 = ref(0);
      return {
        items8,
        carousel8
      };
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

