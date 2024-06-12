<script setup lang="ts">
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import PlayerCom from "@/components/Foods/PlayerCom.vue";
import { ALL_FOOD_QUERY } from "@/graphql/queries";
import FoodsContainer from "@/components/Foods/FoodsContainer.vue";
import NewAds from "@/components/Home/Advertising/NewAds.vue";
import { computed, onBeforeMount, onUpdated, watchEffect } from "vue";
import type { Article_Filter } from "@/generated/graphql";

onBeforeMount(() => {
  window.scrollTo(0, 0)

})
onUpdated(()=> {
  window.scrollTo(0, 0)
})
// Fetch Shows
const { result } = useQuery(ALL_FOOD_QUERY);
const episodes = computed(():Article_Filter[] => result.value?.Article);

const limitedFoods = ref<number>(Math.floor(Math.random() * 35));
</script>
<template>
  <div class="foods-container container-responsive">
    <div class="">
      <div class="foods-player">
        <PlayerCom :episodes="episodes?.slice(limitedFoods, limitedFoods + 3)" />
      </div>
      <NewAds />
      <FoodsContainer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.foods-player{
  // margin-bottom:60px;

  @include breakpoints(large){
    margin-bottom:100px;

  }
}
</style>
