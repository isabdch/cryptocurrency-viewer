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
          <span>
            {{ store.cryptocoin.market_data.hasOwnProperty(
            "ath_change_percentage"
          ) ? `${Number(store.cryptocoin.market_data.ath_change_percentage[store.supported_vs_currencies_value as keyof {}]).toFixed(2)}%` : "--" }}</span
          ></span
        >
        <span
          >ATL change percentage:
          <span>
            {{ store.cryptocoin.market_data.hasOwnProperty(
            "atl_change_percentage"
          ) ? `${Number(store.cryptocoin.market_data.atl_change_percentage[store.supported_vs_currencies_value as keyof {}]).toFixed(2)}%` : "--" }}</span
          ></span
        >
      </div>

      <h2>
        {{ store.cryptocoin.name }}
      </h2>

      <div class="cryptocoin_info">
        <h1>
          {{ `${Number(store.cryptocoin.market_data.current_price[store.supported_vs_currencies_value as keyof {}])}`
          }}<span>{{
            `${store.supported_vs_currencies_value.toUpperCase()}`
          }}</span>
        </h1>

        <CurrencyComparisonSelectbox />
      </div>

      <div class="market_info">
        <span
          >Price change percentage (24h):
          <span>
            {{
              store.cryptocoin.market_data.hasOwnProperty(
                "price_change_percentage_24h"
              )
                ? `${store.cryptocoin.market_data.price_change_percentage_24h.toFixed(
                    2
                  )}%`
                : "--"
            }}</span
          ></span
        >

        <span class="price_date">{{
          store.view_price_date_value !== "" &&
          store.view_price_date_value !== store.date
            ? `Price on date: ${store.view_price_date_value
                .split("-")
                .reverse()
                .join("/")}`
            : "Now"
        }}</span>
      </div>
    </section>

    <div class="inputs">
      <CryptocoinSelectbox />
      <ViewPriceDate />
    </div>
  </main>
</template>

<style lang="scss">
@import "../../styles/variables.scss";

main {
  width: 100%;
  margin: auto;
  color: $general_text_color;
  @include flexUtil(column, center, center, 10px);

  section {
    width: 65%;
    min-height: fit-content;
    background: $container_bg_color;
    box-shadow: 1px 1px 10px $shadow_container_color;
    padding: 30px;
    border-radius: 1.5em;
    @include flexUtil(column, space-between, flex-start, inherit);

    div {
      width: 100%;
      @include flexUtil(row wrap, space-between, center, 20px);

      span {
        span {
          color: $vibrant_text_color;
        }
      }

      .price_date {
        color: $vibrant_text_color;
      }
    }

    h2 {
      margin-top: 30px;
      color: $darker_text_color;
    }

    .cryptocoin_info {
      margin-bottom: 30px;

      h1 {
        color: $vibrant_text_color;
        font-size: 4em;
        word-break: break-word;

        span {
          color: $darker_text_color;
          font-size: 0.5em;
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 85%;
    }
  }
}
</style>
