<script setup lang="ts">
import Main from "./components/Main/Main.vue";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@import "./styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap");

html {
  @media screen and (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media screen and (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background: $bg_color;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Comfortaa", sans-serif;
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
