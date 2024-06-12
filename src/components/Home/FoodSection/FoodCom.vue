<template>
  <div class="container-responsive mb-3 mb-md-0">
    <h3 class="section-title">وصفات</h3>
    <div class="foods-list">
      <div class="top-list row ">
        <div class="cols col-lg-4">
          <FoodItem :data="foods[randomFood]" btnColor="yellow-btn" />
        </div>
        <div class="cols col-lg-4">
          <FoodItem :data="foods[randomFood + 1]" btnColor="green-btn"  />
        </div>
        <div class="cols col-lg-4">
          <FoodItem :data="foods[randomFood + 2]" btnColor="red-btn"  />
        </div>
      </div>
      <hr />
      <div class="bottom-list row">
        <div class="cols col-lg-4 d-flex flex-column gap-3">
          <FoodItem :data="foods[randomFood + 3]" btnColor="purple-btn"  />
          <FoodItem :data="foods[randomFood + 4]" btnColor="white-btn"  />
        </div>
        <CenteredItem :data="foods[randomFood + 5]" btnColor="white-btn" />
        <div class="cols col-lg-4 flex-column gap-3 d-none d-lg-flex">
          <FoodItem :data="foods[randomFood + 6]" btnColor="green-btn"  />
          <FoodItem :data="foods[randomFood + 7]" btnColor="light-blue-btn"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FoodItem from "./FoodItem.vue";
import CenteredItem from "./CenteredItem.vue";
import { computed, ref, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { ALL_FOOD_QUERY } from "@/graphql/queries";
import type { Article_Filter } from "@/generated/graphql";

// Fetch Limited Food
const { result } = useQuery(ALL_FOOD_QUERY);
const foods = computed(():Article_Filter[] => result.value?.Article ?? []);
const randomFood = ref<number>(Math.floor(Math.random() * 35))
watchEffect(() => {
  console.log(foods.value);
})
</script>

<style scoped lang="scss">
@include breakpoints(xs){
  .top-list {
  gap:16px;
}}
@include breakpoints(mobile){
  .top-list {
  gap:16px;
}
@include breakpoints(medium){
  .top-list {
  gap:0px;
}
}
}

</style>
