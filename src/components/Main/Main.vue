<script lang="ts">
import { defineComponent } from "vue";
import { api } from "@/api/api";
import { store } from "../../store";
import CurrencyComparisonSelectbox from "./CurrencyComparisonSelectbox/CurrencyComparisonSelectbox.vue";
import CryptocoinSelectbox from "./CryptocoinSelectbox/CryptocoinSelectbox.vue";
import ViewPriceDate from "./ViewPriceDate/ViewPriceDate.vue";

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
      this.store.view_price_date_value !== this.store.date
        ? api
            .get(
              `coins/${
                this.store.cryptocoin_selectbox_value
              }/history?date=${this.store.view_price_date_value
                .split("-")
                .reverse()
                .join("-")}`
            )
            .then((res) => (this.store.cryptocoin = res.data))
            .catch((err) => console.log(err))
        : this.get_cryptocoin_price();
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
    }, 1700);
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
      <div class="market_info">
        <span
          >ATH change percentage:
          {{ store.cryptocoin.market_data.hasOwnProperty(
            "ath_change_percentage"
          ) ? `${Number(store.cryptocoin.market_data.ath_change_percentage[store.supported_vs_currencies_value as keyof {}]).toFixed(2)}%` : "--" }}</span
        >
        <span
          >ATL change percentage:
          {{ store.cryptocoin.market_data.hasOwnProperty(
            "atl_change_percentage"
          ) ? `${Number(store.cryptocoin.market_data.atl_change_percentage[store.supported_vs_currencies_value as keyof {}]).toFixed(2)}%` : "--" }}</span
        >
      </div>

      <h2>
        {{ store.cryptocoin.name }}
      </h2>

      <div class="cryptocoin_info">
        <h1>
          {{ `${store.cryptocoin.market_data.current_price[store.supported_vs_currencies_value as keyof {}]}${store.supported_vs_currencies_value.toUpperCase()}` }}
        </h1>

        <CurrencyComparisonSelectbox />
      </div>

      <div class="market_info">
        <span
          >Price change percentage (24h):
          {{
            store.cryptocoin.market_data.hasOwnProperty(
              "price_change_percentage_24h"
            )
              ? `${store.cryptocoin.market_data.price_change_percentage_24h.toFixed(
                  2
                )}%`
              : "--"
          }}</span
        >

        <span>{{
          store.view_price_date_value !== "" &&
          store.view_price_date_value !== store.date
            ? `Price in ${store.view_price_date_value
                .split("-")
                .reverse()
                .join("/")}`
            : "Now"
        }}</span>
      </div>
    </section>
    <CryptocoinSelectbox />
    <ViewPriceDate />
  </main>
</template>

<style lang="scss">
@import "../../styles/variables.scss";

main {
  width: fit-content;
  margin: auto;

  section {
    background: $container_bg_color;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 425px) {
  }
}
</style>
