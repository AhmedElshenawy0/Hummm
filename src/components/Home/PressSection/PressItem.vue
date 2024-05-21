<template>
  <a class="text-center press-item" :href="props.data.press_link" target="_blank">
    <img
      :src="`https://board.humm.world/assets/${props.data.translations[0]?.cover?.id}`"
      alt=""
    />
    <p>{{ props.data?.translations[0]?.title }}</p>
    <small>{{ props.data?.press }} </small>
  </a>
</template>

<script setup lang="ts">
import type { Article } from "@/generated/graphql";
import { ref } from "vue";
const props = defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.press-item {
  background-size: cover;
  width: 100%;
  height: 245px;
  position: relative;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    padding: 8px 10px;
    position: absolute;
    bottom: 0;
    margin: 10px;
    background-color: white;
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
  }

  @include breakpoints(medium) {
    width: 100%;
    height: 510px;
    img {
      width: 100%;
      height: 100%;
      // object-fit: cover;
    }
    p {
      padding: 25px 27px;
      position: absolute;
      bottom: 20px;
      background-color: white;
      font-size: 30px;
      font-weight: bold;
      line-height: 30px;
    }
  }
}
</style>
