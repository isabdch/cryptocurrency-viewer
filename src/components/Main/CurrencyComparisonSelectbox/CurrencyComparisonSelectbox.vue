<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../../../store";

export default defineComponent({
  name: "CurrencyComparisonSelectbox",
  data() {
    return {
      store,
    };
  },
  created() {
    localStorage.getItem("supported_vs_currencies_value")
      ? (store.supported_vs_currencies_value = JSON.parse(
          localStorage.getItem("supported_vs_currencies_value")!
        ))
      : null;
  },
  updated() {
    localStorage.setItem(
      "supported_vs_currencies_value",
      JSON.stringify(this.store.supported_vs_currencies_value)
    );
  },
});
</script>

<template>
  <label class="currency_comparison_selectbox"
    >Price in:
    <select
      name="Currency Comparison Selectbox"
      v-model="store.supported_vs_currencies_value"
    >
      <option value="usd">USD</option>
      <option value="brl">BRL</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
      <option value="btc">BTC</option>
      <option value="eth">ETH</option>
    </select>
  </label>
</template>

