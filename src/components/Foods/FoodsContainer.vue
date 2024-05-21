<template>
  <div class="foods-container mt-4">
    <div class="foods-holder">
      <FoodItem
        :item="item"
        btnColor="light-blue-btn"
        v-for="(item, i) in allFoods.slice(moreBtn2, moreBtn2 + 8)"
        :key="i"
      />
    </div>
    <TwoAds />
    <SubscribeCom />

    <div class="bottom-foods-holder">
      <FoodItem
        :item="item"
        btnColor="light-blue-btn"
        v-for="(item, i) in allFoods.slice(0, moreBtn)"
        :key="i"
      />
    </div>
    <button v-if="moreBtn < allFoods?.length" class="more-btn" @click="handleClick">اعرف المزيد</button>

  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ALL_FOOD_QUERY } from "@/graphql/queries";
import { computed, ref } from "vue";
import FoodItem from "@/components/Foods/FoodItem.vue";
import TwoAds from "@/components/Home/Advertising/TwoAds.vue";
import SubscribeCom from "@/components/Home/SubscribSection/SubscribeCom.vue";


let moreBtn = ref<number>(8);
let moreBtn2 = ref<number>(Math.random() * 35);

const { result } = useQuery(ALL_FOOD_QUERY);
const allFoods = computed(() => result.value?.Article ?? []);

const handleClick = () => {
  moreBtn.value += 8;
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.foods-container {
  .foods-holder,
  .bottom-foods-holder {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(299px,1fr));
    gap: 20px;
    justify-content: space-between
  }
  .more-btn {
    @include button(4px, 5px);
    position: relative;
    right: 50%;
    transform: translateX(50%);
    margin-top: 35px;
    margin-bottom: 35px;
  }
}
</style>
