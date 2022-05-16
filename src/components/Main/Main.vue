<script lang="ts">
import { api } from "@/api/api";
import { defineComponent } from "vue";
import { store } from "../../store";
import CryptocoinSelectbox from "./CryptocoinSelectbox/CryptocoinSelectbox.vue";
import ViewPriceDate from "./ViewPriceDate/ViewPriceDate.vue";
import CurrencyComparisonSelectbox from "./CurrencyComparisonSelectbox/CurrencyComparisonSelectbox.vue";

export default defineComponent({
  name: "Main",
  data() {
    return {
      store,
    };
  },
  methods: {
    get_cryptocoin_price() {
      api
        .get(`coins/${this.store.cryptocoin_selectbox_value}`)
        .then((res) => (this.store.cryptocoin = res.data))
        .catch((err) => console.log(err));
    },
    get_cryptocoin_history() {
      api
        .get(
          `coins/${
            this.store.cryptocoin_selectbox_value
          }/history?date=${this.store.view_price_date_value
            .split("-")
            .reverse()
            .join("-")}`
        )
        .then((res) => (this.store.cryptocoin = res.data))
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.get_cryptocoin_price();
  },
  mounted() {
    setInterval(() => {
      this.store.view_price_date_value !== ""
        ? this.get_cryptocoin_history()
        : this.get_cryptocoin_price();
    }, 2000);
  },
  components: {
    CryptocoinSelectbox,
    ViewPriceDate,
    CurrencyComparisonSelectbox,
  },
});
</script>

<template>
  <main>
    <section class="price_viewer">
      <h2>
        {{ store.cryptocoin.name }}
      </h2>
      <h1>
        {{ store.cryptocoin.market_data.current_price[store.supported_vs_currencies_value as keyof {}] }}
      </h1>
      <CurrencyComparisonSelectbox />
    </section>
    <CryptocoinSelectbox />
    <ViewPriceDate />
  </main>
</template>

<style lang="scss"></style>
