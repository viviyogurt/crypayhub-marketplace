<template>
  <MDBContainer class="mt-5 px-4">
    <MDBRow class="mt-5">
      <MDBCol class="col-12 col-md-6 col-xl-4">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <NftImg :img-source="imgBase64">
          </NftImg>
          <div class="mt-2 w-100">
            <MDBFile size="lg" label="NFT Media Content" v-model="files"/>
          </div>
          <div class="small-font mt-2">
            Image, Video, Audio, or 3D Model
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
          </div>
        </div>
      </MDBCol>
      <MDBCol class="col-12 col-md-6 offset-xl-1 col-xl-7">
        <h1 class="mt-4 mt-md-0">Create New NFT Item</h1>
        <MDBInput counter :maxlength="80" label="Name" class="mt-4"/>
        <MDBInput label="External Link" class="mt-4"/>
        <MDBTextarea label="Description" rows="4" class="mt-4"/>
        <MDBInput label="Supply" class="mt-4" type="number"/>
        <MDBInput label="Royalties %" class="mt-4" type="number"/>
        <MDBInput label="Liker Reward %" class="mt-4" type="number"/>
        <MDBSelect v-model:options="onShelfOptions" label="On Shelf" class="mt-4" />
        <MDBBtn color="primary" class="my-4 w-100">Create</MDBBtn>
<!--        <MDBSwitch-->
<!--            label="On Sale"-->
<!--            v-model="onSaleSwitch"-->
<!--            class="mt-2"-->
<!--        />-->
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBTextarea, MDBSelect, MDBFile, MDBBtn } from 'mdb-vue-ui-kit';
import NftImg from "../components/NftImg";
import {ref, watch} from "vue";
import nftBase64 from "../assets/nft/nftBase64"

export default {
  name: "Create",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTextarea,
    MDBSelect,
    MDBFile,
    MDBBtn,
    NftImg
  },
  setup(){
    let imgBase64 = ref("https://img.icons8.com/plumpy/384/000000/stack-of-photos--v2.png");

    const onShelfOptions = ref([
      { text: "Yes", value: 1 },
      { text: "No", value: 2 },
    ]);

    const files = ref([]);
    watch(files, () => {
      imgBase64.value = nftBase64[1]
    })

    return {
      imgBase64,
      onShelfOptions,
      files
    }
  }
}
</script>

<style scoped>
.small-font {
  font-size: 0.7rem;
}
</style>