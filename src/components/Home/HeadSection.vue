<template>
  <div class="press-head d-flex justify-content-between align-items-center">
    <h2>{{ title }}</h2>
    <button>{{ btn }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; btn: string }>();
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";

.press-head {
  margin-bottom: 43px;
  h2 {
    font-size: 22px;
    line-height: 43px;
    font-weight: bold;
  }
  button {
    font-size: 12px;

    @include button(4px, 5px);
  }
  @include breakpoints(medium) {
    h2 {
      font-size: 44px;
      line-height: 55px;
    }
    button {
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
</style>
