<script setup lang="ts">
import FoodComVue from "@/components/Home/FoodSection/FoodCom.vue";
import TopAdVue from "@/components/Home/Advertising/TopAd.vue";
import ReadComVue from "@/components/Home/ReadSection/ReadCom.vue";
import ReadSliderVue from "@/components/Home/ReadSection/ReadSlider.vue";
import ShowCompVue from "@/components/Home/ShowSection/ShowComp.vue";
import LoversComVue from "@/components/Home/LoversSection/LoversCom.vue";
import SubscribeCom from "@/components/Home/SubscribSection/SubscribeCom.vue";
import PressComvue from "@/components/Home/PressSection/PressCom.vue";
import BrandsComVue from "@/components/Home/BrandsSection/BrandsCom.vue";
</script>

<template>
  <div>
    <div class="banner">
      <div class="bg-white banner-text">
        <h1>عالم للأكل واللي بيحبوه</h1>
        <button
          class="call-us-btn"
          @click="$router.push({ name: 'About' })"
        >
          اعرف المزيد
        </button>
      </div>
    </div>
    <FoodComVue />
    <TopAdVue />
    <ReadComVue />
    <ReadSliderVue />
    <ShowCompVue background="#000000" />
    <LoversComVue />
    <SubscribeCom />
    <PressComvue />
    <BrandsComVue />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/main.scss";

.banner {
  background-image: url("https://humm.world/wp-content/uploads/2023/05/ac08abd1-d24d-4d1b-aa18-dc5911920b02.png");
  height: 600px;
  max-width: 1630px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  position: relative;
  margin: 0 auto;
  @include breakpoints(xs) {
    height: 248px;
  }
  @include breakpoints(mobile) {
    height: 378px;
  }
  @include breakpoints(small) {
    height: 400px;
  }
  @include breakpoints(medium) {
    height: 500px;
  }
  @include breakpoints(large) {
    height: 600px;
  }
  .banner-text {
    position: absolute;
    padding: 11px 14px 24px 15px;
    width: 187px;
    bottom: 32px;
    right: 29px;
    @include breakpoints(mobile) {
      padding: 13px 20px 25px 15px;
      bottom: 25px;
      right: 55px;
      width: 300px;
    }
    @include breakpoints(small) {
      padding: 15px 24px 30px 20px;
      bottom: 30px;
      right: 75px;
      width: 407px;
    }
    @include breakpoints(medium) {
      padding: 21px 34px 35px 31px;
      bottom: 35px;
      right: 115px;
      width: 500px;
    }

    @include breakpoints(xl) {
      padding: 51px 64px 65px 83px;
      width: 634px;
      bottom: 75px;
      right: 165px;
    }
    h1 {
      font-size: 58px;
      line-height: 67px;
      font-weight: bold;
      letter-spacing: -2px;
      max-width: 487px;

      @media (max-width: 767px) {
        font-size: 33px;
        line-height: 32px;
      }
      @media (max-width: 576px) {
        font-size: 24px;
        letter-spacing: 0px;
        // line-height: 32px;
      }
    }
    .call-us-btn {
      border: 1px solid #000000;
      font-weight: bold;
      background-color: white;
      width: 132px;
      height: 44px;
      position:relative;
      left:0;
      margin-top: 20px;
      @include breakpoints(small) {
        width: 172px;
        height: 54px;
      }
    }
  }
}
</style>
