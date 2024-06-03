<template>
  <div class="cols col-lg-4 item d-none d-lg-block" @click="$router.push({
        name: 'Single-Food',
        params: { id: data?.id },
        query: { name: data?.translations[0]?.title },
      })">
    <div class="video" >
      <img
        class="thumb"
        :src="`https://board.humm.world/assets/${data?.translations[0]?.cover?.id}.jpg`"
        alt=""
      />
    </div>
    <div class="d-flex flex-column  h-50" style="justify-content: space-around">
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
      <h5>{{ data?.translations[0]?.title?.split(" ", 8).join(" ") }}</h5>
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
import type { Article, Article_Filter } from "@/generated/graphql";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
const props = defineProps<{ data: Article_Filter; btnColor: string }>();
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.item {
  box-shadow: 4px 5px #000;
  border: 1px solid #000000;
  padding: 15px;
  cursor:pointer;
  .video {
    width: 100%;
    height: 202px;
    overflow: hidden;
    margin-bottom: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  button {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
  }
  h5 {
    font-size: 25px;
    font-weight: bold;
    line-height: 30px;
  }
  @include breakpoints(large) {
    h5 {
      font-size: 30px;
      font-weight: bold;
      line-height: 40px;
    }
  }
}
</style>
