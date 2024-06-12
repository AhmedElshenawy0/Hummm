<template>
  <div>
    <div class="about">
      <div class="banner">
        <h2 class="banner-title">أهلًا بيكم في همم!</h2>
        <p class="banner-desc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82.77"
            height="82.77"
            viewBox="0 0 148.564 148.564"
          >
            <path
              id="Path_35127"
              data-name="Path 35127"
              d="M926.374,464.009a74.282,74.282,0,1,0-74.282,74.282,74.282,74.282,0,0,0,74.282-74.282"
              transform="translate(-777.81 -389.727)"
              fill="#00c6c0"
            />
            <path
              id="Path_35128"
              data-name="Path 35128"
              d="M904.911,464.009a52.944,52.944,0,0,1-52.943-52.943,52.944,52.944,0,0,1-52.943,52.943,52.944,52.944,0,0,1,52.943,52.943,52.944,52.944,0,0,1,52.943-52.943"
              transform="translate(-777.81 -389.727)"
              fill="#ff3200"
            />
          </svg>

          إحنا شركة عصرية متخصصة في الأكل باللغة العربية، في ظل اقتصاد
          التكنولوجيا والتجارة الالكترونية وصناعة المحتوى. بنوصل لملايين
          المتابعين والمشتركين من خلال الفيديوهات والمحتوى الإبداعي عن الأكل كل
          يوم. إحنا ملتزمين بتقديم مغامرة غذائية لمصر والشرق الأوسط من خلال
          برامجنا الترفيهية والمقالات والنصائح والتكّات وآلاف الوصفات والأفكار
          اللي هتجوّعك.
        </p>
      </div>
    </div>
      <MotivateCard />
      <CompanyAd/>
      <BrandsCom/>
  </div>
</template>
<script lang="ts" setup>
import CompanyAd from "@/components/About/CompanyAd.vue";
import MotivateCard from "@/components/About/MotivateCard.vue";
import BrandsCom from "@/components/Home/BrandsSection/BrandsCom.vue";
import { ref } from "vue";

</script>
<style lang="scss" scoped>
.about {
  max-width: 1630px;
  margin: 0 auto;
  height: 600px;
  background-image: url("../assets/about-img.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000c2;
    z-index: 1;
  }
  .banner {
    height: 600px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 10px;
    gap: 40px;

    @include breakpoints(medium) {
      flex-direction: row;
      padding: 0px 60px;
      gap: 100px;
    }
    .banner-title {
      z-index: 9;
      font-size: 40px;
      line-height: 56px;
      font-weight: bold;
      @include breakpoints(small) {
        font-size: 40px;
        line-height: 56px;
      }
      @include breakpoints(medium) {
        font-size: 55px;
        line-height: 76px;
      }
      @include breakpoints(large) {
        font-size: 80px;
        line-height: 96px;
      }
    }
    .banner-desc {
      height: fit-content;
      z-index: 9;
      padding: 33px 26px 33px 33px;
      background-color: white;
      width: 90%;
      margin: 0 auto;
      color: #000000;
      position: relative;
      font-size: 22px;
      line-height: 30px;
      @include breakpoints(medium) {
        padding: 53px 36px 53px 63px;
        width: 500px;
        margin: 0;
      }
      @include breakpoints(large) {
        padding: 63px 46px 63px 73px;
        width: 543px;
        margin: 0;
      }
      svg {
        position: absolute;
        top: -39px;
        left: -27px;
        width: 62.77px;
        @include breakpoints(medium) {
          width: 82.77px;
          height: 82.77px;
          top: -39px;
          left: -35px;
        }
      }
    }
  }

}
</style>
