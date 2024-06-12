<template>
  <div class="container-responsive">
    <img
      class="card-img"
      src="https://humm.world/wp-content/uploads/2023/05/c9d0ed92-faaf-4984-afb0-85283ddbb14e.png"
      alt=""
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-responsive {
  // margin: 20px 0;
  @include breakpoints(xs) {
    img {
      height: 131px;
    }
  }
}
</style>
