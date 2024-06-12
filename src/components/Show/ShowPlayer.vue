<template>
  <div class="show-container">
    <div class="show container-responsive d-flex w-100">
      <div class="playlist-container d-flex flex-column gap-2">
        <div
          class="video-item d-flex gap-2 text-white"
          v-for="(episode, i) in show?.all_episodes?.slice(0, 4)"
          :key="i"
          @click="handleClick(episode)"
        >
          <div class="position-relative">
            <img
              :src="`https://board.humm.world/assets/${episode?.translations[0]?.cover.id}`"
              class=""
              alt=""
            />
            <VideoIcon iconColor="#000000" />
          </div>

          <div class=" ">
            <button
              class="white-btn px-2"
             
            >
              {{
                episode?.shows?.translations[0]?.title ||
                episode?.shows?.translations[1]?.title
              }}
            </button>
            <h3>
              {{ episode?.translations[0]?.title.split(" ", 7).join(" ") }}
            </h3>
            <div class="episode-docs">
              <p>
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

                {{
                  episode?.user_updated?.first_name ||
                  episode?.user_created?.first_name
                }}
                {{
                  episode?.user_updated?.last_name ||
                  episode?.user_created?.last_name
                }}
              </p>
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
                {{
                  new Date(episode?.date_updated).toDateString() ||
                  new Date(episode?.date_created).toDateString()
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <PlayedComVue
        :main="main ? main : show?.all_episodes[1]"
        :videoId="main ? main.video : show?.all_episodes[1]?.video"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import PlayedComVue from "@/components/Home/ShowSection/PlayedCom.vue";
import VideoIcon from "../VideoIcon.vue";

const props = defineProps<{show:any}>()

const main = ref<any>("");
watchEffect(() => {
  console.log(props.show)
})
// Change Video
const handleClick = (show: any) => {
  main.value = show;
};
</script>

<style scoped lang="scss">
.show-container {
  background-color: $main-color;

  .show {
    padding: 60px 0;
    gap: 40px;
    flex-direction: column-reverse;

    @include breakpoints(medium) {
      gap: 20px;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
    @include breakpoints(large) {
      gap: 40px;
      justify-content: space-between;
      flex-direction: row-reverse;
    }

    .played-video {
      width: 50%;
      height: 350px;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    .playlist-container {
      // width: 100%;

      .video-item {
        h3 {
          font-size: 16px;
          max-width: 300px;
          font-weight: bold;
          line-height: 21px;
          color: #ffffff;
          margin: 10px 0;
        }
        button {
          font-size: 16px;
          font-weight: bold;
        }
        p {
          color: #707070;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          margin: 0;
        }
        span {
          color: #707070;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }
        img {
          width: 185px;
          height: 158px;
          object-fit: cover;
        }

        @include breakpoints(medium) {
          button {
            font-size: 20px;
            font-weight: bold;
          }
          h3 {
            font-size: 20px;
            font-weight: bold;
            line-height: 30px;
            color: #ffffff;
          }
          p {
            color: #707070;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
          }
          span {
            color: #707070;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
          }
          .episode-docs {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
        }

        cursor: pointer;
      }
      // img {
      //   width: 100%;
      //   height: 100%;
      // }

      @include breakpoints(medium) {
        width: 70%;
        .video-item {
          img {
            width: 185px;
            height: 158px;
            object-fit: cover;
          }
        }
      }
      @include breakpoints(large) {
        width: 60%;
      }
    }
  }
}
</style>
