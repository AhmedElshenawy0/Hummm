<template>
  <div class="mb-3">
    <div
      class="item-container"
      v-for="(show, i) in shows?.slice(0, 2)"
      :key="i"
    >
      <div
        class="show-head my-4 d-flex justify-content-between align-items-center"
      >
        <h3>
          الأحدث من
          {{ show?.translations[0]?.title || show?.translations[1]?.title }}
        </h3>
        <button
          @click="
            $router.push({
            name: 'Show-Category',
            params: {
              name:
                show?.translations[0]?.title ||
                show?.translations[1]?.title,
            },
            query:{name:show?.translations[0]?.title ||
                show?.translations[1]?.title,}
          })
        "
        >
          اعرف المزيد<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="19"
            height="14"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
      </div>
      <div class="episodes-holder">
        <ShowEpisodeItem
          v-for="(item, i) in show?.all_episodes?.slice(-4)"
          :showName="show?.translations[0].title"
          :key="i"
          :myData="item"
        />
      </div>
      <SubscribeCom v-if="show?.id == 148" />
    </div>
    <SubscribeCom />
    <TwoAds />
    <div class="item-container" v-for="(show, i) in shows?.slice(2)" :key="i">
      <div
        class="show-head my-4 d-flex justify-content-between align-items-center"
      >
        <h3>
          الأحدث من
          {{ show?.translations[0]?.title || show?.translations[1]?.title }}
        </h3>
        <button
        @click="
            $router.push({
            name: 'Show-Category',
            params: {
              name:
                show?.translations[0]?.title ||
                show?.translations[1]?.title,
            },
            query:{name:show?.translations[0]?.title ||
                show?.translations[1]?.title,}
          })
        "
        >
          اعرف المزيد<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="19"
            height="14"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
      </div>
      <div class="episodes-holder">
        <ShowEpisodeItem
          v-for="(item, i) in show?.all_episodes?.slice(-4)"
          :showName="show?.translations[0].title || show?.translations[1].title"
          :key="i"
          :myData="item"
        />
      </div>
      <SubscribeCom v-if="show?.id == 148" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Shows } from "@/generated/graphql";
import ShowEpisodeItem from "@/components/Show/ShowEpisodeItem.vue";
import { ALL_SHOW_QUERY } from "@/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { computed, watchEffect } from "vue";
import SubscribeCom from "../Home/SubscribSection/SubscribeCom.vue";
import TwoAds from "../Home/Advertising/TwoAds.vue";
// const props = defineProps<{ data: Shows }>();

const { result } = useQuery(ALL_SHOW_QUERY);
const shows = computed(() => result?.value?.shows);


</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.item-container {
  .show-head {
    h3 {
      font-weight: bold;
      font-size: 23px;
      line-height: 21px;
      max-width: 250px;
    }
    button {
      border: 1px solid #000000;
      font-weight: bold;
      background-color: white;
      color: #000000;
      width: 162px;
      height: 40px;
      line-height: 24px;
      font-size: 14px;
    }
  }
  .episodes-holder {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: space-between;
  }
  @include breakpoints(small) {
    .show-head {
      h3 {
        font-weight: bold;
        font-size: 30px;
        line-height: 43px;
        max-width: 300px;
      }
      button {
        border: 1px solid #000000;
        font-weight: bold;
        background-color: white;
        color: #000000;
        width: 162px;
        height: 40px;
        line-height: 24px;
        font-size: 14px;
      }
    }
  }
  @include breakpoints(medium) {
    .show-head {
      h3 {
        font-weight: bold;
        font-size: 55px;
        line-height: 73px;
        max-width: 60%;
      }
      button {
        border-right: 1px solid #000000;
        border-bottom: 1px solid #000000;
        border-top: none;
        border-left: none;
        font-weight: bold;
        background-color: white;
        color: #000000;
        width: 172px;
        height: 54px;
        line-height: 24px;
        font-size: 18px;
        transition: 0.3s;
        &:hover {
          box-shadow: none;
          border: 1px solid #000000;
          width: 171px;
          height: 42px;
        }
      }
    }
    .episodes-holder {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
      gap: 20px;
      justify-content: space-between;
    }
  }
}
</style>
