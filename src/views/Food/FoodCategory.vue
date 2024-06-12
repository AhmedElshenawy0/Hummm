<template>
  <div class="category">
    <div class="image">
      <img
        :src="`https://board.humm.world/assets/${articles[0]?.category?.translations[0]?.cover?.id}`"
        alt=""
        class="w-100 h-100"
      />
    </div>
    <h2>{{ articles[0]?.category?.translations[0]?.title }}</h2>
    <div class="container-responsive">
      <div class="articles">
        <FoodItem
          v-for="(article, i) in articles.slice(0, moreNum)"
          :key="i"
          :item="article"
          btnColor="red"
        />
      </div>
      <button @click="moreNum += 8">اعرف المزيد</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FoodItem from "@/components/Foods/FoodItem.vue";
import type { Article_Filter } from "@/generated/graphql";
import { ALL_FOOD_QUERY, Category_FOOD_QUERY } from "@/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, onBeforeMount, onUpdated, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const moreNum = ref<number>(8);
const { result } = useQuery(Category_FOOD_QUERY, { name: route.params.name });
const articles = computed((): Article_Filter[] => result.value?.Article ?? []);
watchEffect(() => {
  console.log(articles.value);
  console.log(route.params);
});
onBeforeMount(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.category {
  .image {
    height: 500px;
    max-width: 1630px;
    margin: 0 auto;
    img {
      object-fit: cover;
    }
    @include breakpoints(xs) {
      height: 248px;
    }
    @include breakpoints(mobile) {
      height: 378px;
    }
    @include breakpoints(small) {
      height: 400px;
    }
    @include breakpoints(medium) {
      height: 500px;
    }
    @include breakpoints(large) {
      height: 600px;
    }
  }
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 35px;
    margin: 20px 0;
    padding: 0;
    @include breakpoints(medium) {
      text-align: center;
      font-weight: bold;
      font-size: 60px;
      margin: 20px 0;
      padding: 0;
    }
  }
  .container-responsive {
    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(299px, 1fr));
      gap: 20px;
      justify-content: space-between;
    }
    button {
      @include shadowButton(5px, 4px);
      margin-top: 30px;
      position: relative;
      right: 50%;
      transform: translatex(50%);
    }
  }
}
</style>
