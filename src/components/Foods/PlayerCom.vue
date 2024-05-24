<template>
  <div class="show-container d-flex w-100 text-black">
    <div class="playlist-container d-flex flex-column gap-2">
      <div
        class="video-item d-flex gap-3 text-white w-100"
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
          width="24"
          height="24"
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
        
        <div class="info">
          <div>
            <p>{{ episode.category?.translations[0].title }}</p>

          <h3>{{ episode.translations[0].title.split(" ", 8).join(" ") }}</h3>
          </div>
          <div class="docs">
            <p>
              <svg
          id="time-line"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
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
              {{ episode.user_updated?.first_name ||episode.user_created?.first_name }}
              {{ episode.user_updated?.last_name || episode.user_created?.last_name }}
            </p>
            <p>
              <svg
                id="time-line"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
                /></svg
              >{{ new Date(episode?.date_created).toDateString() }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="played-video">
      <iframe
        class=""
        id="youtube-iframe"
        :src="`https://www.youtube.com/embed/${
          show ? show?.video : episodes[0]?.video
        }`"
      ></iframe>
      <button>
        {{
          show
            ? show.category?.translations[0].title
            : episodes[0]?.category?.translations[0].title
        }}
      </button>
      <h3>
        {{
          show
            ? show?.translations[0]?.title
            : episodes[0]?.translations[0].title
        }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ episodes: any }>();

const show = ref<any>();
const handleClick = (episode: any) => {
  show.value = episode;
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";

.show-container {
  gap: 25px;
  flex-direction: column-reverse;
  height: fit-content;
   @include breakpoints(medium) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
  @include breakpoints(large) {
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-bottom: 180px;
  }

  .played-video {
    width: 100%;
    //   height: 350px;
    iframe {
      width: 100%;
      height: 278px;
    }

    h3 {
      font-size: 16px;
      font-weight: bold;
      line-height: 21px;
      color: #000000;
    }
    button {
      background-color: #ffffff;
      color: #707070;
      border: none;
      font-size: 16px;
      line-height: 21px;
      margin-top: 18px;
    }

    @include breakpoints(medium) {
      width: 70%;
      height: 400px;
      iframe {
        width: 100%;
        height: 400px;
      }
      h3 {
        font-size: 27px;
        font-weight: bold;
        line-height: 34px;
      }
      button {
        font-size: 24px;
        line-height: 32px;
      }
    }
    @include breakpoints(large) {
      iframe {
        height: 546px;
      }
      h3 {
        font-size: 37px;
        font-weight: bold;
        line-height: 49px;
      }
    }
  }
  .playlist-container {
    width: 100%;
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
    .video-item {
      h3 {
        font-size: 16px;
        font-weight: bold;
        line-height: 21px;
        color: #000000;
        margin-bottom: 0px;
      }
      p {
        color: #707070;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
      }
      img {
        width: 175px;
        height: 158px;
        object-fit: cover;
      }
      .docs {
        display: flex;
        justify-content: space-between;
        align-items: satrt;
        flex-direction: column;
      }
      .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      cursor: pointer;
      @include breakpoints(medium) {
        h3 {
          font-size: 20px;
          font-weight: bold;
          line-height: 28px;
          max-width: 300px;
        }
        p {
          font-size: 16px;
          line-height: 10px;
        }
        .docs {
          display: none;
        }
      }
    }

    @include breakpoints(medium) {
      width: 45%;
      .video-item {
        
        img {
          width: 180px;
          height: 170px;
          object-fit: cover;
        }
      }
    }
    @include breakpoints(xl) {
      width: 35%;
      .video-item {
        img {
          width: 224px;
          height: 186px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
