<template>
  <div class="container-responsive">
    <iframe
      class="video"
      id="youtube-iframe"
      :src="`https://www.youtube.com/embed/${singleFood?.video}`"
    ></iframe>
    <h3 class="title">{{ singleFood?.translations[0]?.title }}</h3>
    <p class="desc" v-html="singleFood?.translations[0]?.content"></p>

    <div class="info d-flex justify-content-between align-items-center">
      <div class="d-flex name gap-4">
        <p class="d-flex gap-2">
          <svg
            id="user-6-line"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_35283"
              data-name="Path 35283"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_35284"
              data-name="Path 35284"
              d="M12,17a10.68,10.68,0,0,1,8.607,3.925l-1.842.871A8.867,8.867,0,0,0,12,19a8.867,8.867,0,0,0-6.765,2.8l-1.841-.872A10.677,10.677,0,0,1,12,17ZM12,2a5,5,0,0,1,5,5v3a5,5,0,0,1-4.783,4.995L12,15a5,5,0,0,1-5-5V7a5,5,0,0,1,4.783-4.995Zm0,2A3,3,0,0,0,9,6.824L9,7v3a3,3,0,0,0,5.995.176L15,10V7a3,3,0,0,0-3-3Z"
            />
          </svg>

          {{ singleFood?.user_created.first_name }}
          {{ singleFood?.user_created.first_name }}
        </p>
        <p class="d-flex gap-2">
          <svg
            id="time-line"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_35236"
              data-name="Path 35236"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_35237"
              data-name="Path 35237"
              d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z"
            />
          </svg>
          {{ new Date(singleFood?.date_created).toDateString() }}
        </p>
      </div>
      <div class="social">
        <img src="@/assets/twitter.svg" alt="" />
        <img src="@/assets/whatsappalt.svg" alt="" />
        <img src="@/assets/messenger.svg" alt="" />
        <img src="@/assets/facebook-with-circle.svg" alt="" />
      </div>
    </div>
    <TwoAds />
    <SubscribeCom />
    <div class="bottom-foods-holder">
      <FoodItem
        :item="item"
        btnColor="light-blue-btn"
        v-for="(item, i) in foods.slice(0, 8)"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FoodItem from "@/components/Foods/FoodItem.vue";
import TwoAds from "@/components/Home/Advertising/TwoAds.vue";
import SubscribeCom from "@/components/Home/SubscribSection/SubscribeCom.vue";
import type { Article } from "@/generated/graphql";
import { ALL_FOOD_QUERY,Single_FOOD_QUERY, LIMITED_FOOD_QUERY } from "@/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { computed, onBeforeMount, onUpdated, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

// Get Id From Route Params
const route = useRoute();

// Get Food By Id
const { result } = useQuery(LIMITED_FOOD_QUERY, {limit:8});
const getSingleFood = useQuery(Single_FOOD_QUERY, {id: route.params.id})
const foods = computed(() => result.value?.Article ?? []);
const singleFood = computed(
  () =>
  getSingleFood?.result.value?.Article_by_id ??
    []
);
const router = useRouter();
watchEffect(() => {
  // console.log(getSingleFood.result.value.Article_by_id);
})
onBeforeMount(() => {
  window.scrollTo(0, 0);
});
onUpdated(() => {
  window.scrollTo(0, 0);
  getSingleFood.variables.value = { id: route.params.id };
  
});
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.container-responsive {
  .title {
    margin-top: 20px;
    margin-bottom: 20px;

    @include breakpoints(medium) {
      margin-top: 40px;
    }
    @include breakpoints(large) {
      margin-top: 60px;
    }
  }
  .video {
    width: 100%;
    height: 546px;
  }
  .info {
    margin-top: 30px;

    @include breakpoints(medium) {
      margin-top: 50px;
    }

    .social {
      display: flex;
      gap: 13.7px;
      align-items: center;
    }
  }
  .bottom-foods-holder {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(299px, 1fr));
    gap: 20px;
    justify-content: space-between;
  }
}
</style>
