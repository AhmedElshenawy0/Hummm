<template>
  <div class="container-responsive">
    <LoversCom />
    <NewAds />
    <div class="press">
      <div class="press-head d-flex justify-content-between align-items-center">
        <h2>احدث المقالات</h2>
      </div>
      <div class="press-container">
        <PressItem
          v-for="(item, i) in pressItems.slice(0, randomPressNum)"
          :key="i"
          :data="item"
        />
      </div>
      <div class="d-flex justify-content-center">
        <button @click="randomPressNum += 9">اعرف المزيد</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewAds from "@/components/Home/Advertising/NewAds.vue";
import LoversCom from "@/components/Home/LoversSection/LoversCom.vue";
import { useQuery } from "@vue/apollo-composable";
import { ALL_PRESS_QUERY } from "@/graphql/queries";
import PressItem from "@/components/Home/PressSection/PressItem.vue";
import { computed, onBeforeMount, onUpdated, ref } from "vue";
import type { Article_Filter } from "@/generated/graphql";

onBeforeMount(() => {
  window.scrollTo(0, 0)

})
onUpdated(()=> {
  window.scrollTo(0, 0)
})
const randomPressNum = ref<number>(9);
const { result } = useQuery(ALL_PRESS_QUERY);
const pressItems = computed(():Article_Filter[] => result.value?.Article);

</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.container-responsive {
  .press-head {
    margin-bottom: 43px;
    h2 {
      font-size: 32px;
      line-height: 43px;
      font-weight: bold;
    }
  }
  button {
    @include button(4px, 5px);
    font-size: 12px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .press-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 20px;
    justify-content: center;

    @include breakpoints(small) {
      justify-content: space-between;
    }
  }
}
@include breakpoints(medium) {
  .press-head {
    h2 {
      font-size: 44px;
      line-height: 55px;
    }
    button {
      font-size: 15px;
    }
  }

  @include breakpoints(large) {
    .press-head {
      h2 {
        font-size: 55px;
        line-height: 73px;
      }
      button {
        font-size: 18px;
      }
    }
  }
}
</style>
