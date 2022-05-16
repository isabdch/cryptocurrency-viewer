<script setup lang="ts">
import Main from "./components/Main/Main.vue";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
html {
  @media screen and (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media screen and (max-width: 720px) {
    font-size: 87.5%;
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  border: 0;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
