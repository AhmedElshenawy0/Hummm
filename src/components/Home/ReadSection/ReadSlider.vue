<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ALL_READ_QUERY, LIMITED_READ_QUERY } from "@/graphql/queries";
import { computed, ref, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";

const { result } = useQuery(ALL_READ_QUERY);
const articles = computed(() => result.value?.Article ?? []);
</script>

<template>
  <div class="bookSlider-container mb-0">
    <Swiper
      :spaceBetween="25"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      class="mySwiper"
    >
      <SwiperSlide v-for="(article, i) in articles" :key="i" @click=" $router.push({
        name: 'Single-Read',
        params: { id: article.id },
        query: { name: article.translations[0].title },
      })">
        <div>
          <div class="image">
            <img
              :src="`https://board.humm.world/assets/${article.translations[0].cover.id}`"
              alt=""
            />
          </div>
          <div class="docs">
            <h3 class="title">{{ article?.translations[0].title }}</h3>
            <div class="d-flex gap-2 align-items-center">
              <svg
                id="time-line"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <p class="m-0 p-0">
                {{ new Date(article.date_updated).toDateString() }}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.bookSlider-container {
  @media (min-width: 767px) {
    display: none;
  }
  .swiper {
    width: 100%;
    height: 270px;
    margin: 10px 0;
    padding: 10px 0;
    @media (min-width: 567px) {
      height: 350px;
  }
    @media (min-width: 767px) {
      height: 350px;
  }
  }
  .swiper-slide.swiper-slide-active {
    border: 1px solid black;
    padding-top: 20px;

  }
  .swiper-slide {
    padding: 21px 19px 8px 19px;
    box-shadow: -4px -5px #000;
    width: 80%!important;
    height: 100%;
    outline: 1px solid black;
    margin-bottom: 33px;
    cursor: pointer;

    @media (min-width: 767px) {
      width: 25%!important;
      padding: 30px;

  }
  }

  .image {
        height: 138px;
        width: 100%;
        margin-bottom: 12px;

        @media(min-width:567px){
          height: 208px;

        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;

        }}
  .docs {
    margin-bottom: 10px;
    .title {
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
    }
  }
}
</style>
