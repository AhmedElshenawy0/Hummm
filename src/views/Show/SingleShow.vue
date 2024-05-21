<template>
  <div class="single-show">
    <div class="played-video">
      <iframe
        class="w-100 h-100"
        id="youtube-iframe"
        :src="`https://www.youtube.com/embed/${singleFood?.video}`"
      ></iframe>
    </div>
    <div class="container-responsive">
      <div class="info w-100">
        <h3>
          {{ singleFood?.translations[0]?.title }}
        </h3>
        <p class="content" v-html="singleFood?.translations[0]?.content"></p>
        <div
          class="info-and-social d-flex justify-content-between align-items-center mt-4"
        >
          <div class="d-flex gap-4">
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
              {{ singleFood?.user_created.last_name }}
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
          <div class="social d-flex gap-3">
            <img src="@/assets/twitter.svg" alt="" />
            <img src="@/assets/whatsappalt.svg" alt="" />
            <img src="@/assets/messenger.svg" alt="" />
            <img src="@/assets/facebook-with-circle.svg" alt="" />
          </div>
        </div>
      </div>
      <BlackAds />
      <ShowItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ALL_SHOW_QUERY, SINGLE_SHOW_QUERY } from "@/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { computed, watchEffect, ref, onUpdated, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import BlackAds from "@/components/Home/Advertising/BlackAds.vue";
import ShowItem from "@/components/Show/ShowItem.vue";
import type { Article_Filter } from "@/generated/graphql";

const route = useRoute();
const { result } = useQuery(ALL_SHOW_QUERY);
const singleFood = computed(
  ():Article_Filter =>
    result.value?.shows
      ?.find(
        (ele) =>
          ele?.translations[0]?.title == route.query.name ||
          ele?.translations[1]?.title == route.query.name
      )
      .all_episodes?.find((ele) => ele.id == route.params.id) ?? []
);

onBeforeMount(() => {
  window.scrollTo(0, 0);
});
onUpdated(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped lang="scss">
.single-show {
  .played-video {
    height: 540px;
  }
  .container-responsive {
    .info {
      h3 {
        font-size: 30px;
        font-weight: bold;
        line-height: 40px;
        margin: 15px 0;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
      }
      .info-and-social {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 21px;
        }
        .social {
        }
      }
    }
  }
}
</style>
