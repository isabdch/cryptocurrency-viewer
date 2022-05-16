<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptocoinSelectbox",
  data() {
    return {
      cryptocoin_selectbox_initial_value: "bitcoin",
    };
  },
});
</script>

<template>
  <label class="cryptocoin_selectbox"
    >Cryptocoin:
    <select
      name="Cryptocoin Selectbox"
      v-model="cryptocoin_selectbox_initial_value"
    >
      <option value="bitcoin">Bitcoin (BTC)</option>
      <option value="cosmos">Cosmos (ATOM)</option>
      <option value="dacxi">Dacxi (DACXI)</option>
      <option value="ethereum">Ethereum (ETH)</option>
      <option value="terra-luna">Terra (LUNA)</option>
    </select>
  </label>
</template>

<style lang="scss"></style>
