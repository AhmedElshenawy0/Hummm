<template>
  <div class="container-responsive">
    <div class="press-head d-flex justify-content-between align-items-center">
      <h2>علامات تجارية تعلن معنا</h2>
      <button>أعلن معنا</button>
    </div>
    <div class="brands row">
      <div class="col-4 col-md-2 text-center border border-black">
        <img src="https://humm.world/wp-content/uploads/2023/05/deb9835d-7ccb-4d54-9ead-09c586d7b070.jpg" alt="">
      </div>
      <div class="col-4 col-md-2 text-center border border-black">
        <img src="https://humm.world/wp-content/uploads/2023/05/8.jpg" alt="">
      </div>
      <div class="col-4 col-md-2 text-center border border-black">
        <img src="https://humm.world/wp-content/uploads/2023/05/7-1.jpg" alt="">
      </div>
      <div class="col-4 col-md-2 text-center border border-black">
        <img src="https://humm.world/wp-content/uploads/2023/05/6-1.jpg" alt="">
      </div>
      <div class="col-4 col-md-2 text-center border border-black">
        <img src="https://humm.world/wp-content/uploads/2023/05/5-1.jpg" alt="">
      </div>
      <div class="col-4 col-md-2 text-center border border-black">
        <img src="https://humm.world/wp-content/uploads/2023/05/4-1.jpg" alt="">
      </div>
        
    </div>
    <NewAds/>
  </div>
</template>

<script setup lang="ts">
import HeadSection from "@/components/Home/HeadSection.vue";
import NewAds from "../Advertising/NewAds.vue";
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";

.press-head {
  margin: 20px 0 10px;

  h2 {
    font-size: 32px;
    line-height: 43px;
    font-weight: bold;
  }
  button {
    display: none;

    @include button( 4px, 5px);
  }
  @include breakpoints(small) {
    button {
      display: block;
    }
  }
  @include breakpoints(medium) {
    margin-bottom: 43px;

    h2 {
      font-size: 44px;
      line-height: 55px;
    }
    button {
      display: block;
      font-size: 15px;
    }

    .press-container {
      gap: 30px;
    }

    @include breakpoints(large) {
      h2 {
        font-size: 55px;
        line-height: 73px;
      }
      button {
        font-size: 18px;
      }
    }
  }
}
.brands div {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
img{
  width:100%;
  height: 100%;
}
  @include breakpoints(medium){
    height: 110px;

  }
}
.advertising{
  position:relative;
  margin-top: 30px;
  // height: 105px;

  img{
    width: 100%;
    height:100%;
    object-fit: cover;
  }
  h2{
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    left:10px;
    background-color: white;
    font-size: 68px;
    // line-height:69px;
    max-width: 350px;
    padding:10px ;
    font-weight: bold;
    text-align: center;
    box-shadow: 12px 10px black;
    display: none;
  }

  @include breakpoints(large){
    height: 377px;
 
    h2{
      display: block;
    }
  }
}
</style>
