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
});
</script>

<template>
  <label class="view_price_date"
    >View price on a specific date:
    <input type="date" v-model="store.view_price_date_value" />
  </label>
</template>

<style lang="scss"></style>
