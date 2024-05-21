<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterCom from "@/components/FooterCom.vue";
import { onMounted, onUpdated } from "vue";
// import { useFoodStore } from "./stores/counter";

// const foodStore = useFoodStore();
// const getAllFoods = foodStore.getAllFoods;
// onMounted(async() => {
//   getAllFoods();
// });
onUpdated(() => {
  window.scrollTo(0, 0)

})
</script>

<template>
 <div class=" position-relative">
  <NavBar />
  <RouterView />
  <FooterCom />
 </div>
</template>

<style lang="scss">
@import "@/assets/sass/main.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: $main-font;
}
</style>
