<template>
  <div class="container-responsive">
    <ReadBody />
    <NewAds />
    <div class="latest-read">
      <h3>المقالات الأحدث</h3>
      <div class="responsive">
        <ReadItem v-for="(item, i) in reads.slice(-3)" :key="i" :data="item" />
      </div>
      <ReadSliderVue />
      <TwoAds />
      <SubscribeCom />
      <ReadItem
        v-for="(item, i) in reads.slice(0, readSlice)"
        :key="i"
        :data="item"
      />
      <div class="d-flex justify-content-center mb-4">
        <button  v-if="readSlice < reads?.length" class="more-btn" @click="readSlice += 3">أعرف المزيد</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReadBody from "@/components/Home/ReadSection/ReadBody.vue";
import NewAds from "@/components/Home/Advertising/NewAds.vue";
import ReadItem from "@/components/Read/ReadItem.vue";
import ReadSliderVue from "@/components/Home/ReadSection/ReadSlider.vue";
import { ALL_READ_QUERY } from "@/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import TwoAds from "@/components/Home/Advertising/TwoAds.vue";
import SubscribeCom from "@/components/Home/SubscribSection/SubscribeCom.vue";
import { computed, onBeforeMount, onUpdated, ref } from "vue";
import type { Article_Filter } from "@/generated/graphql";

onBeforeMount(() => {
  window.scrollTo(0, 0)

})
onUpdated(()=> {
  window.scrollTo(0, 0)
})
const { result } = useQuery(ALL_READ_QUERY);
const reads = computed(():Article_Filter[] => result.value?.Article ?? []);

const readSlice = ref<number>(3);

</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.container-responsive {
  button {
    @include button( 4px, 5px);
    margin-top: 15px;
  }

  .latest-read {
    .responsive {
      @media (max-width: 767px) {
        display: none;
      }
    }
    h3 {
      font-size: 30px;
      font-weight: bold;
      line-height: 43px;

      @include breakpoints(medium) {
        font-size: 55px;
        font-weight: bold;
        line-height: 73px;
      }
    }
  }
}
</style>
