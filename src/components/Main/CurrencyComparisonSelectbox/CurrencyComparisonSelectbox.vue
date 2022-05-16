<script lang="ts">
import { api } from "@/api/api";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurrencyComparisonSelectbox",
  data() {
    return {
      supported_vs_currencies: [""],
      supported_vs_currencies_initial_value: "usd",
    };
  },
  mounted() {
    api
      .get("simple/supported_vs_currencies")
      .then((res) => (this.supported_vs_currencies = res.data));
  },
});
</script>

<template>
  <label class="currency_comparison_selectbox"
    >Price in
    <select
      name="Currency Comparison Selectbox"
      v-model="supported_vs_currencies_initial_value"
    >
      <option v-for="currency in supported_vs_currencies" :value="currency">
        {{ currency.toLocaleUpperCase() }}
      </option>
    </select>
  </label>
</template>

<style lang="scss"></style>
