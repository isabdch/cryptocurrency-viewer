<script lang="ts">
import { api } from "@/api/api";
import CryptocoinSelectbox from "./CryptocoinSelectbox/CryptocoinSelectbox.vue";
import ViewPriceDate from "./ViewPriceDate/ViewPriceDate.vue";
import CurrencyComparisonSelectbox from "./CurrencyComparisonSelectbox/CurrencyComparisonSelectbox.vue";

export default {
  name: "Main",
  data() {
    return {};
  },
  mounted() {
    // setInterval(async () => {
    // api
    //   .get("simple/price?ids=bitcoin&vs_currencies=brl")
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    // }, 2000);
  },
  components: {
    CryptocoinSelectbox,
    ViewPriceDate,
    CurrencyComparisonSelectbox,
  },
};
</script>

<template>
  <main>
    <section class="price_viewer">
      <h2>Bitcoin</h2>
      <h1>0000</h1>
      <CurrencyComparisonSelectbox />
    </section>
    <CryptocoinSelectbox />
    <ViewPriceDate />
  </main>
</template>

<style lang="scss"></style>
