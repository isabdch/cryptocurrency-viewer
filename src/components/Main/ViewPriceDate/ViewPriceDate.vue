<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../../../store";

export default defineComponent({
  name: "ViewPriceDate",
  data() {
    return {
      store,
    };
  },
  methods: {
    setMinDate() {
      // before these dates there is no price info about the cryptocoins, I checked all of them to be sure of it
      switch (this.store.cryptocoin_selectbox_value) {
        case "bitcoin":
          return "2013-04-28";
          break;
        case "cosmos":
          return "2019-02-24";
          break;
        case "dacxi":
          return "2021-06-15";
          break;
        case "ethereum":
          return "2015-08-10";
          break;
        case "terra-luna":
          return "2019-05-08";
          break;
        default:
          return "2013-04-28";
      }
    },
  },
});
</script>

<!--  -->

<template>
  <label class="view_price_date"
    >View price on a specific date:
    <input
      v-bind:max="store.date"
      v-bind:min="setMinDate()"
      type="date"
      v-model="store.view_price_date_value"
    />
  </label>
</template>

<!--  -->

<style lang="scss">
@import "../../../styles/variables.scss";

label {
  @include flexUtil(row, center, center, 0.5em);

  input[type="date"] {
    width: 10.4vw;
    min-width: 140px;
    padding: 0.5em;
    background: $bg_color url("../../../../public/calendar_icon.svg") no-repeat
      right;
    background-size: 1.3em;
    background-origin: content-box;
    color: $general_text_color;
    outline: none;
    border: 0.15em solid $darker_text_color;
    border-radius: 0.6em;

    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }

    &:focus {
      border: 0.15em solid $vibrant_text_color;
    }

    @media screen and (min-width: 1440px) {
      font-size: 0.9vw;
    }
  }

  @media screen and (max-width: 768px) {
    @include flexUtil(column, center, center, 0.5em);
  }
}
</style>
