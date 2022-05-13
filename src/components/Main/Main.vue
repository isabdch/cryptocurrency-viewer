<template>
  <main>
    <h1>Olá</h1>
  </main>
</template>

<script lang="ts">
import { api } from "@/api/api";

export default {
  name: "Main",
  data() {
      return {

      }
  },
  mounted() {
    // setInterval(async () => {
      api
        .get("simple/price?ids=bitcoin&vs_currencies=brl")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    // }, 2000);
  },
};
</script>

<style lang="scss"></style>
