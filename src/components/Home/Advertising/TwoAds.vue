<template>
  <div class="d-flex justify-content-between border">
    <img src="@/assets/Group 21906.svg" class="" alt="" />
    <img src="@/assets/Group 21905.svg" class="" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
div {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 100%;
    // height:300px;
  }

  @include breakpoints(small) {
    display: flex;
    flex-direction: row;
    gap: 0px;

    img {
      width: 49%;
    }
  }
}
</style>
