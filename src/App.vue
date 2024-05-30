<template>
  <div class="wrapper">
    <hero-view></hero-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
// import FirstComponent from "./components/FirstComponent.vue";
import HeroView from "@/views/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: { HeroView, FooterComponent },
};
</script>

<style lang="scss" scoped>
div {
  span {
    color: blue;
  }
}
</style>
