<template>
  <MarketPlace
    msg="Thank you for using our product. We're glad you're with us."
  />
</template>

<script>
// @ is an alias to /src
import MarketPlace from "@/components/MarketPlace.vue";

export default {
  name: "Home",
  components: {
    MarketPlace
  }
};
</script>