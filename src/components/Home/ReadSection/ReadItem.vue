<template>
  <div
    class="right-read d-flex"
    @click="
      $router.push({
        name: 'Single-Read',
        params: { id: data.id },
        query: { name: data.translations[0].title },
      })
    "
  >
    <div class="image">
      <img
        :src="`https://board.humm.world/assets/${data?.translations[0]?.cover.id}`"
        class="img-fluid"
        alt=""
      />
    </div>
    <div class="docs">
      <h5>{{ data?.translations[0]?.title }}</h5>
      <div class="info">
        <span
          ><img src="@/assets/user-6-line.svg" alt="" />{{
            data?.user_updated?.first_name
          }}
          {{ data?.user_updated?.last_name }}</span
        >
        <span
          ><img src="@/assets/time-line.svg" alt="" />{{
            new Date(data?.date_updated).toDateString()
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "@/generated/graphql";

// const data = Date()
const props = defineProps<{ ImageId: string; data: Article }>();
</script>

<style scoped lang="scss">
.right-read {
  width: 100%;
  gap: 25px;
  height: 100%;
  cursor: pointer;

  .image {
    width: 120px;
    height: 144px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .docs {
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 16px;
      font-weight: bold;
      line-height: 37px;
      margin-bottom: 20px;
    }

    .info {
      font-size: 12px;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      gap: 10px;

      span {
        display: flex;
        gap: 7px;
      }
    }
  }
  @include breakpoints(small) {
    .image {
      width: 155px;
      height: 195px;
    }
    .docs {
      display: flex;
      flex-direction: column;

      h5 {
        font-size: 20px;
        font-weight: bold;
        line-height: 37px;
        margin-bottom: 20px;
      }
      .info {
        font-size: 14px;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
  @include breakpoints(medium) {
    width: 100%;
    gap: 25px;
    height: 100%;

    .image {
      min-width: 185px;
      height: 222px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .docs {
      display: flex;
      flex-direction: column;

      h5 {
        font-size: 30px;
        font-weight: bold;
        line-height: 37px;
        margin-bottom: 20px;
      }

      .info {
        font-size: 14px;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;


        span {
          display: flex;
          gap: 7px;
        }
      }
    }
  }
}
</style>
