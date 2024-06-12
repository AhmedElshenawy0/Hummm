<template>
  <div class="advertising w-100">
    <img src="@/assets/Adv2.jpg" class="w-100 h-100" alt="" />
    <h2>
      Banner <br />for <br />
      advertising
    </h2>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.advertising {
  position: relative;
  margin: 20px 0;

  h2 {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 16px;
    font-weight: bold;
    line-height: 21px;
    padding: 2px 10px;
    height: fit-content;
    margin: auto 0;
    text-align: end;
    max-width: 402px;
    min-width: 112px ;
    box-shadow: 5px 4px #000000;
  }
  @include breakpoints(small) {
    h2 {
      padding: 15px;
      font-size: 38px;
      line-height: 35px;
      left: 15px;

    }
  }
  @include breakpoints(medium) {
    h2 {
      padding: 25px;
      font-size: 40px;
      line-height: 45px;
      box-shadow: 15px 17px #000000;
    }
  }
  @include breakpoints(large) {
    h2 {
      padding: 30px;
      font-size: 58px;
      line-height: 59px;
    }
  }
}
</style>
