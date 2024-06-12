<template>
  <div
    class="d-flex item w-100 h-100"
    @click="
      $router.push({
        name: 'Single-Show',
        params: { id: myData.id },
        query: {
          name:
            myData?.shows?.translations[0].title ||
            myData?.shows?.translations[1].title,
        },
      })
    "
  >
    <div class="image position-relative">
      <img
        class=""
        :src="`https://board.humm.world/assets/${
          myData?.translations[0]?.cover?.id ||
          myData?.translations[1]?.cover?.id
        }`"
        alt=""
      />
      <VideoIcon iconColor="#000000" />
    </div>
    <div class="info">
      <button
        @click.stop
        class="black-btn text-white"
        @click="
          $router.push({
            name: 'Show-Category',
            params: {
              name:
                myData?.shows?.translations[0]?.title ||
                myData?.shows?.translations[1]?.title,
            },
          })
        "
      >
        {{
          myData?.shows?.translations[0]?.title ||
          myData?.shows?.translations[1]?.title
        }}
      </button>
      <h3>
        {{ myData?.translations[0]?.title || myData?.translations[1]?.title }}
      </h3>

      <div class="episode-docs d-flex">
        <span>
          <svg
            id="user-6-line"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
              fill="#707070"
            />
          </svg>

          {{ myData?.user_created?.first_name }}
          {{ myData?.user_created?.last_name }}
        </span>
        <span
          ><svg
            id="time-line"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
              fill="#707070"
            />
          </svg>
          {{ new Date(myData?.date_created).toDateString() }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Shows } from "@/generated/graphql";
import SubscribeCom from "../Home/SubscribSection/SubscribeCom.vue";
import VideoIcon from "../VideoIcon.vue";
import { watchEffect } from "vue";

const props = defineProps<{ myData: any; showName: string }>();

watchEffect(() => {
  // console.log(props.myData);
});
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.item {
  padding: 20px 15px;
  border: 1px solid #00c5bf;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;
  transition: 0.5s;
  cursor: pointer;
  .image {
    width: 40%;
    min-height: 100%;
    object-fit: cover;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    flex: 1;
    button {
      font-size: 16px;
      line-height: 20px;
      font-weight: bold;
      margin-bottom: 14px;
      max-width: 190px;
      padding: 10px 20px 13px;
    }
    h3 {
      font-size: 22px;
      font-weight: bold;
      line-height: 30px;
      height: 65px;
      overflow: hidden;
    }
    .episode-docs {
      flex-direction: column;
      justify-content: flex-start;
      span {
        font-size: 13px;
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }
  }

  &:hover {
    box-shadow: 10px 10px #00c5bf;
  }
  @include breakpoints(medium) {
    padding: 30px 35px;
    gap: 24px;
    img {
      // width: 35%;
      height: 100%;
      object-fit: cover;
    }
    .info {
      width: 65%;
      button {
        font-size: 20px;
        line-height: 27px;
        font-weight: bold;
        margin-bottom: 14px;
        max-width: 190px;
        padding: 10px 20px 13px;
      }
      h3 {
        font-size: 30px;
        font-weight: bold;
        line-height: 37px;
        height: 81px;
        overflow: hidden;
      }
      .episode-docs {
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
