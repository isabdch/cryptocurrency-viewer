<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../../../store";

export default defineComponent({
  name: "CryptocoinSelectbox",
  data() {
    return {
      store,
    };
  },
  created() {
    localStorage.getItem("cryptocoin_selectbox_value")
      ? (store.cryptocoin_selectbox_value = JSON.parse(
          localStorage.getItem("cryptocoin_selectbox_value")!
        ))
      : null;
  },
  updated() {
    localStorage.setItem(
      "cryptocoin_selectbox_value",
      JSON.stringify(this.store.cryptocoin_selectbox_value)
    );
  },
});
</script>

<template>
  <label class="cryptocoin_selectbox"
    >Cryptocoin:
    <select
      name="Cryptocoin Selectbox"
      v-model="store.cryptocoin_selectbox_value"
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
