<template>
  <div
    class="d-flex flex-column item"
    @click="
      router.push({
        name: 'Single-Food',
        params: { id: item.id },
        query: { name: item?.translations[0]?.title },
      })
    "
  >
    <div class="image position-relative">
      <img
        class="thumb"
        :src="`https://board.humm.world/assets/${item?.translations[0]?.cover?.id}`"
        alt=""
      />
      <VideoIcon iconColor="#000000" />
    </div>
    <div class="docs">
      <div>
        <button
          @click.stop
          class="light-blue-btn"
          @click="
            $router.push({
              name: 'Foods-Category',
              params: { name: item?.category?.translations[0]?.title },
            })
          "
        >
          {{ item?.category?.translations[0]?.title }}
        </button>
        <h5>{{ item?.translations[0]?.title?.split(" ", 7).join(" ") }}</h5>
      </div>
      <div class="d-flex flex-column gap-1">
        <small>
          <svg
            id="time-line"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#707070"
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
          {{ item?.user_updated?.first_name }}
          {{ item?.user_updated?.first_name }}
        </small>
        <small
          ><svg
            id="time-line"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#707070"
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
          {{ new Date(item?.date_created).toDateString() }}</small
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article_Filter } from "@/generated/graphql";
import { useRouter } from "vue-router";
import VideoIcon from "../VideoIcon.vue";
const router = useRouter();
const props = defineProps<{ item: Article_Filter; btnColor: string }>();
</script>

<style scoped lang="scss">
.item {
  padding: 14.5px 17.5px;
  border: 1px solid #000000;
  gap: 13.5px;
  width: 100%;
  transition: 0.4s;
  height: fit-content;

  &:hover {
    box-shadow: 7px 7px #000000;
  }
  cursor: pointer;
  .docs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      margin-bottom: 11.5px;
    }
    h5 {
      font-size: 25px;
      font-weight: bold;
      line-height: 35px;
      overflow: hidden;
      margin-bottom: 10px;
      max-height: 73px;
    }
  }
  .image {
    .thumb {
      object-fit: cover;
      width: 100%;
      height: 250px;
    }
  }

  @include breakpoints(medium) {
    height: 100%;

    .docs {
      button {
      }
    }
    .thumb {
      object-fit: cover;
      width: 100%;
      height: 175px;
    }
  }
}
</style>
