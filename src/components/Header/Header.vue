<script lang="ts">
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <img src="../../../public/page_icon.svg" alt="Bitcoin" />
    <h1>Cryptocurrency Viewer</h1>
  </header>
</template>

<style lang="scss">
@import "../../styles/variables.scss";

header {
  @include flexUtil(row, flex-start, center, 10px);
  width: 100vw;
  padding: 20px;
  padding-left: 50px;
  animation: showFromTopToBottomForBiggerScreens 0.5s ease 0s 1 normal both;

  h1 {
    background-image: linear-gradient($darker_text_color, $vibrant_text_color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: $vibrant_text_color;
  }

  img {
    width: 2vw;
    min-width: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.1vw;
    gap: 1vw;
  }

  @media screen and (max-width: 768px) {
    @include flexUtil(row, center, center, 10px);
    padding-left: 0px;
    padding: 20px;
  }

  @media screen and (max-width: 550px) {
    @include flexUtil(column, center, center, 10px);
    text-align: center;
  }
}
</style>
