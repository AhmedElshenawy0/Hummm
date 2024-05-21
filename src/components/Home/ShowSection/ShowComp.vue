<script setup lang="ts">
import "video.js/dist/video-js.css";
import "vue-lite-youtube-embed/style.css";
import { ref, computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { LIMITED_SHOW_QUERY } from "@/graphql/queries";
import PlayedComVue from "@/components/Home/ShowSection/PlayedCom.vue";

const randomShow = ref(Math.floor(Math.random() * 4))
// Fetch Shows
const { result } = useQuery(LIMITED_SHOW_QUERY);
const episodes = computed(() => result?.value?.shows[randomShow.value]?.all_episodes);
let mainEpisode = computed(() => result?.value?.shows[randomShow.value]?.all_episodes[0]);
const main = ref<any>(mainEpisode.value);
// Change Video
const handleClick = (show: any) => {
  main.value = show;
};
// Props
const props = defineProps<{ background: string }>();
</script>
<template>
  <div class="show-holder pt-3 mb-3" :style="{ backgroundColor: background }">
    <div class="container-responsive">
      <div class="show-head d-flex justify-content-between align-items-center">
        <h3 class="section-title text-white">برامج</h3>
        <button class="button" @click="$router.push({ name: 'Show' })">اعرف المزيد</button>
      </div>
      <div class="show-container d-flex w-100">
        <div class="playlist-container d-flex flex-column gap-2">
          <div
            class="video-item d-flex gap-3 text-white"
            v-for="(episode, i) in episodes"
            :key="i"
            @click="handleClick(episode)"
          >
            <div class="image position-relative">
              <img
                :src="`https://board.humm.world/assets/${episode.translations[0].cover.id}`"
                class=""
                alt=""
              />
              <div class="video-icon bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    id="Path_35239"
                    data-name="Path 35239"
                    d="M3,3.993A.994.994,0,0,1,3.993,3H20.007A.994.994,0,0,1,21,3.993V20.007a.994.994,0,0,1-.993.993H3.993A.994.994,0,0,1,3,20.007ZM5,5V19H19V5Zm5.622,3.415L15.5,11.667a.4.4,0,0,1,0,.666l-4.88,3.252A.4.4,0,0,1,10,15.253V8.747a.4.4,0,0,1,.622-.332Z"
                    transform="translate(-3 -3)"
                  />
                </svg>
              </div>
            </div>

            <div class="d-flex flex-column justify-content-md-between">
              <h3>{{ episode.translations[0].title.split(" ",6).join(" ") }}</h3>
              <div class="episode-docs">
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

                  {{ episode?.user_updated?.first_name }}
                  {{ episode?.user_updated?.last_name }}
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
                  {{ new Date(episode?.date_updated).toDateString() }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <PlayedComVue
          :main="main ? main : mainEpisode"
          :videoId="main ? main.video : mainEpisode?.video"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/main.scss";

.show-holder {
  background-color: $main-color;

  .button {
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    border-top: none;
    border-left: none;
    font-weight: bold;
    background-color: #000000;
    color: white;
    width: 172px;
    height: 54px;
    font-size: 18px;
    transition: 5s;
    &:hover {
      box-shadow: none;
      border: 1px solid white;
    }
  }
  .show-container {
    padding: 60px 0;
    gap: 40px;
    flex-direction: column-reverse;

    @include breakpoints(medium) {
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
          margin-bottom: 20px;
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
        img {
          width: 185px;
          height: 158px;
          object-fit: cover;
        }
        .video-icon {
      position: absolute;
      bottom: 10px;
      right: 10px;
      padding:9px;
      display: flex;
      justify-content: center;
      align-items:center;
      svg {
      }
    }

        @include breakpoints(medium) {
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
