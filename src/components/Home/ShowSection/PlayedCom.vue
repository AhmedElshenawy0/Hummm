<template>
  <div class="w-100 played-container">
    <div class="played-video">
      <iframe
        class="w-100 h-100"
        id="youtube-iframe"
        :src="`https://www.youtube.com/embed/${props.videoId}`"
      ></iframe>
    </div>
    <button
      class="white-btn mt-3 px-2"
      @click="
        $router.push({
          name: 'Show-Category',
          params: {
            name:
              main?.shows?.translations[0]?.title ||
              main?.shows?.translations[1]?.title,
          },
        })
      "
    >
      {{
        main?.shows?.translations[0]?.title ||
        main?.shows?.translations[1]?.title
      }}
    </button>
    <h5>{{ main?.translations[0]?.title }}</h5>

    <div>
      <p>
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
            fill="#707070"
          />
        </svg>
        {{ main?.user_updated?.first_name || main?.user_created?.first_name }}
        {{ main?.user_updated?.last_name || main?.user_created?.last_name }}
      </p>
      <span
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
            fill="#707070"
          />
        </svg>
        {{
          new Date(main?.date_updated).toDateString() ||
          new Date(main?.date_created).toDateString()
        }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";

const props = defineProps<{ main: any; videoId: string }>();

watchEffect(() => {
  console.log(props.main);
});
</script>

<style scoped lang="scss">
.played-container {
  h5 {
    margin-top: 15px;
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    color: white;
    margin-bottom: 15px;
  }
  p {
    color: #707070;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  span {
    color: #707070;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .show-name {
    padding: 0px;
    background-color: white;
    color: red;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .played-video {
    width: 100%;
    height: 350px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  @include breakpoints(medium) {
    .played-video {
      width: 100%;
      height: 70%;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    h5 {
      margin-top: 18px;
      font-size: 32px;
      line-height: 43px;
    }
    p {
      font-size: 16px;
      line-height: 21px;
    }
    span {
      font-size: 16px;
      line-height: 21px;
    }
  }
}
</style>
