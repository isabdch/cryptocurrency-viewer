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
    setLocalDate() {
      localStorage.setItem(
        "view_price_date_value",
        JSON.stringify(this.store.view_price_date_value)
      );
    },
    getLocalDate() {
      localStorage.getItem("view_price_date_value")
        ? (store.view_price_date_value = JSON.parse(
            localStorage.getItem("view_price_date_value")!
          ))
        : null;
    },
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
  created() {
    this.getLocalDate();
  },
  updated() {
    this.setLocalDate();
  },
});
</script>

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

<style lang="scss"></style>
