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
          {{ `${Number(store.cryptocoin.market_data.current_price[store.supported_vs_currencies_value as keyof {}]).toFixed(8)}`
          }} <span>{{
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
            : "Price now"
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
  padding: 10px;
  color: $general_text_color;
  @include flexUtil(column, center, center, 1em);

  section {
    width: 65%;
    min-height: fit-content;
    background: $container_bg_color;
    box-shadow: 1px 1px 10px $shadow_container_color;
    padding: 2em;
    border-radius: 1.5em;
    animation: showScaleUp 0.35s ease 0s 1 normal both;
    @include flexUtil(column, space-between, flex-start, inherit);

    div {
      width: 100%;
      @include flexUtil(row, space-between, center, 1.5em);

      span {
        span {
          color: $vibrant_text_color;
        }
      }

      .price_date {
        color: $vibrant_text_color;
      }

      &.market_info {
        span {
          @include flexUtil(row, center, center, 0.5em);

          span {
            display: inline;
          }

          @media screen and (max-width: 768px) {
            @include flexUtil(column, center, center, 0.5em);
          }
        }

        &:first-of-type {
          animation: showFromTopToBottomForBiggerScreens 1.2s ease 0s 1 normal
            both;

          @media screen and (max-width: 1024px) {
            animation: showFromTopToBottomForSmallerScreens 1.2s ease 0s 1
              normal both;
          }
        }

        &:last-of-type {
          animation: showFromBottomToTopForBiggerScreens 1.2s ease 0s 1 normal
            both;

          @media screen and (max-width: 1024px) {
            animation: showFromBottomToTopForSmallerScreens 1.2s ease 0s 1
              normal both;
          }
        }
      }

      @media screen and (max-width: 768px) {
        @include flexUtil(column, space-between, center, 1.5em);
        text-align: center;
      }
    }

    h2 {
      width: 100%;
      margin-top: 1.5em;
      color: $darker_text_color;
      animation: showFromLeftToRight 1.2s ease 0s 1 normal both;

      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }

    .cryptocoin_info {
      margin-bottom: 1.5em;

      h1 {
        color: $vibrant_text_color;
        font-size: 4em;
        word-break: break-word;
        word-spacing: 0px;
        line-height: 0.9em;
        animation: showFromLeftToRight 1.2s ease 0s 1 normal both;

        span {
          color: $darker_text_color;
          font-size: 0.5em;
        }

        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      width: 85%;
    }
  }

  .inputs {
    @include flexUtil(row, space-between, center, 1.5em);
    animation: showFromBottomToTopForBiggerScreens 1.2s ease 0s 1 normal both;

    @media screen and (max-width: 768px) {
      @include flexUtil(column, space-between, center, 1.5em);
      animation: showFromBottomToTopForSmallerScreens 1.2s ease 0s 1 normal both;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.11vw;
  }
}
</style>
