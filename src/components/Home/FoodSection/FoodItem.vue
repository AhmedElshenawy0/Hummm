<template>
  <div class="d-flex item" @click="$router.push(`/foods/${data?.id}`)">
    <div class="image position-relative">
      <img
        class="thumb"
        :src="`https://board.humm.world/assets/${data?.translations[0]?.cover?.id}.jpg`"
        alt=""
      />
      <VideoIcon iconColor="#FF3300"/>
    </div>

    <div class="docs">
     <div>
      <button
      @click.stop
        :class="btnColor"
        @click="
          $router.push({
            name: 'Foods-Category',
            params: { name: data?.category?.translations[0]?.title },
          })
        "
      >
        {{ data?.category?.translations[0]?.title }}
      </button>
      <h5 class="">{{ data?.translations[0]?.title?.split(" ", 7).join(" ") }}</h5>
     </div>
      <small
        ><svg
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
        {{ new Date(data?.date_created).toDateString() }}</small
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoIcon from "@/components/VideoIcon.vue";
import type { Article, Article_Filter } from "@/generated/graphql";
import "vue-lite-youtube-embed/style.css";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{ data: Article_Filter; btnColor: string }>();

const handleClick = () => {
  // router.push("/about");
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.item {
  height: 209px;
  gap: 15px;

  .docs {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      margin-bottom: 9px;
    }
    h5 {
      font-size: 25px;
      font-weight: bold;
      line-height: 35px;
      height: 110px;
      overflow: hidden;
      margin-bottom: 1px;
    }
  }
  .image {
    width: 50%;
    height: 100%;
    .video-icon {
      position: absolute;
      bottom: 10px;
      right: 10px;
      padding: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
      }
    }
    .thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @include breakpoints(medium) {
    .docs {
      button {
        margin-bottom: 7px;
      }
    }
  }
  @include breakpoints(large) {
    gap: 30px;
    height: 222px;
    width: 100%;
  }
}
</style>
