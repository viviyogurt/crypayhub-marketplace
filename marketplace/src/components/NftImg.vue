<template>
  <div class="square-container">
    <div class="nft-img-container">
      <img :src="imageSource" v-bind:alt="imageSource" class="nft-img">
    </div>
  </div>
</template>

<script>

// import {watch} from "vue";

import {toRef} from "vue";

export default {
  name: "NftImg",
  props: {
    imgSource: String
  },
  setup(props) {
    const imageSource = toRef(props, 'imgSource')
    // watch(imageBase64, (newVal, oldVal) => {
    //   console.log(newVal)
    //   console.log(oldVal)
    // })
    return { imageSource }
  }

}
</script>

<style lang="scss" scoped>
.square-container {
  width: 100%;
  padding-top: 100%;
  position: relative;
  .nft-img-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .nft-img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>