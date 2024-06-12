<template>
  <div class="container-responsive d-flex">
    <div class="lovers">
      <h2>{{ about?.home_intro_title }}</h2>
      <p>{{ about?.home_about_description }}</p>
      <div class="d-flex justify-content-center">
        <button @click="$router.push({name:'About'})">About Humm</button>

      </div>
    </div>
    <div class="image">
      <img
        src="https://humm.world/wp-content/uploads/2023/05/9.png"
        class="w-100"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ABOUT_QUERY } from "@/graphql/queries";
import { computed } from "vue";
const { result } = useQuery(ABOUT_QUERY);
const about = computed(() => result.value?.homepage?.translations[0]);
</script>

<style scoped lang="scss">
.container-responsive {
  flex-direction: column-reverse;
  button {
    @include button( 4px, 5px);
    font-size: 12px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .lovers {
    width: 100%;
  }
  .image {
    width: 100%;
  }
  @include breakpoints(small) {
    flex-direction: row;
    button {
      @include button(4px, 5px);
      font-size: 12px;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    .lovers {
      width: 50%;
    }
    .image {
      width: 50%;
    }
  }
}
</style>
