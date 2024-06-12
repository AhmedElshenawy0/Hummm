<template>
  <div class="category">
    <div class="image">
      <img
        :src="`https://board.humm.world/assets/${
          articles[0]?.translations[0]?.cover?.id ||
          articles[0]?.translations[1]?.cover?.id
        }`"
        alt=""
        class="w-100 h-100"
      />
    </div>
    <div class="info">
      <h2>
        {{
          articles[0]?.translations[1]?.title ||
          articles[0]?.translations[0]?.title
        }}
      </h2>
      <p>
        {{
          articles[0]?.translations[1]?.description ||
          articles[0]?.translations[0]?.description
        }}
      </p>
      <p class="video-num">
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
            fill="#000000"
          /></svg
        >{{ articles[0]?.all_episodes?.length }}
      </p>
    </div>
    <div class="container-responsive">
      <div class="articles">
        <ShowEpisodeItem
          v-for="(article, i) in articles[0]?.all_episodes?.slice(0, moreNum)"
          :key="i"
          :myData="article"
          showName="red"
        />
      </div>
      <button
        @click="moreNum += 8"
      >
        اعرف المزيد
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FoodItem from "@/components/Foods/FoodItem.vue";
import ShowEpisodeItem from "@/components/Show/ShowEpisodeItem.vue";
import type { Shows } from "@/generated/graphql";
import { SINGLE_SHOW_QUERY } from "@/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { computed, onBeforeMount, onUpdated, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const moreNum = ref<number>(8);

// Fetch Single Show
const { result, variables } = useQuery(SINGLE_SHOW_QUERY, { name: route.params.name, count:moreNum.value });
const articles = computed((): Shows[] => result.value?.shows ?? []);

onUpdated(() => {
  variables.value = { name: route.params.name, count:moreNum.value };

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
  .info {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-weight: bold;
      font-size: 35px;
      margin: 20px 0;
      padding: 0;
      @include breakpoints(medium) {
        font-weight: bold;
        font-size: 60px;
        margin: 20px 0;
        padding: 0;
      }
    }
    p {
      font-size: 20px;
    }
    .video-num {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      font-size: 18px;
    }
  }
  .container-responsive {
    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      justify-content: space-between;

      @include breakpoints(medium) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        gap: 20px;
        justify-content: space-between;
      }
    }
    button {
      @include shadowButton(5px, 4px);
      margin-top: 30px;
      position: relative;
      right: 50%;
      transform: translatex(50%);
      margin-bottom: 20px;
    }
  }
}
</style>
