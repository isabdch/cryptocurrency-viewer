<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewPriceDate",
  data() {
    return {
      view_price_date_initial_value: "",
    };
  },
});
</script>

<template>
  <label class="view_price_date"
    >View price on a specific date:
    <input type="date" v-model="view_price_date_initial_value" />
  </label>
</template>

<style lang="scss"></style>
