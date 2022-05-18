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
      class="cryptocoin_select_input"
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

<style lang="scss">
@import "../../../styles/variables.scss";

label {
  text-align: center;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 4.5vw;
    min-width: 60px;
    background: $bg_color url("../../../../public/arrow_icon.svg") no-repeat
      right;
    background-size: 0.8em;
    background-origin: content-box;
    padding: 0.5em;
    color: $general_text_color;
    outline: none;
    border: 0.15em solid $darker_text_color;
    border-radius: 0.6em;

    &.cryptocoin_select_input {
      width: 10.4vw;
      min-width: 140px;
    }

    &:focus {
      border: 0.15em solid $vibrant_text_color;
    }

    @media screen and (min-width: 1440px) {
      font-size: 0.9vw;
    }
  }
}
</style>
