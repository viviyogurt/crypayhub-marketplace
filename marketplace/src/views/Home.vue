<template>
  <PlatformDescription id="sm-screen-head">
  </PlatformDescription>
  <MDBCarousel
      v-model="carousel1"
      :items="items1"
      fade
      id="lg-screen-head"
  />
  <FeatureSupport></FeatureSupport>
  <LikingFunction></LikingFunction>
</template>

<script>
import {ref} from "vue";
import {MDBCarousel} from "mdb-vue-ui-kit";
import bannerBase64 from "../assets/banner/bannerBase64"
import LikingFunction from "../components/Home/LikingFunction";
import FeatureSupport from "../components/Home/FeatureSupport";
import PlatformDescription from "../components/Home/PlatformDescription";

export default {
  name: "Home",
  components: {
    PlatformDescription,
    FeatureSupport,
    MDBCarousel,
    LikingFunction
  },
  setup() {
    const items1 = [
      // {
      //   src: bannerBase64[0],
      //   alt: "...",
      //   label: "First slide label",
      //   caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      // },
      // {
      //   src: bannerBase64[1],
      //   alt: "...",
      //   label: "Second slide label",
      //   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      // },
      {
        src: bannerBase64[2],
        alt: "...",
        label: "Next Generation NFT Marketplace to lower NFT launching and investment threshold",
        caption: "Invest NFT by liking or buying"
      }
    ];
    const carousel1 = ref(0);
    return {
      items1,
      carousel1
    };
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 1200px) {
  #lg-screen-head {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  #sm-screen-head {
    display: none;
  }
}

</style>