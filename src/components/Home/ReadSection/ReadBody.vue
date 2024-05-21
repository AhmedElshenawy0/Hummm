<template>
  <div class="read">
    <div
      class="main-read"
      @click="
        $router.push({
          name: 'Single-Read',
          params: { id: reads[randomRead]?.id },
          query: { name: reads[randomRead]?.translations[0]?.title },
        })
      "
    >
      <div class="image">
        <img
          :src="`https://board.humm.world/assets/${reads[randomRead]?.translations[0].cover.id}`"
          alt=""
        />
      </div>
      <h5>{{ reads[randomRead]?.translations[0].title }}</h5>
      <div class="info d-flex gap-5 mt-4">
        <span
          ><img src="@/assets/user-6-line.svg" alt="" />{{
            reads[randomRead]?.user_updated?.first_name
          }}
          {{ reads[randomRead]?.user_updated?.last_name }}</span
        >
        <span
          ><img src="@/assets/time-line.svg" alt="" />{{
            new Date(reads[randomRead]?.date_updated).toDateString()
          }}</span
        >
      </div>
    </div>
    <div class="right-read-container">
      <ReadItemVue
        :ImageId="reads[randomRead + 1]?.translations[0].cover.id"
        :data="reads[randomRead + 1]"
      />
      <ReadItemVue
        :ImageId="reads[randomRead + 2]?.translations[0].cover.id"
        :data="reads[randomRead + 2]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReadItemVue from "@/components/Home/ReadSection/ReadItem.vue";
import { ALL_READ_QUERY } from "@/graphql/queries";
import { computed, ref, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
const { result } = useQuery(ALL_READ_QUERY);
const reads = computed(() => result.value?.Article ?? []);
const randomRead = ref<number>(Math.floor(Math.random() * 50))

</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";

.read {
  display: flex;
  flex-direction: column;

  .main-read {
    padding: 21px 19px 8px 19px;
    box-shadow: -4px -5px #000;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    margin-bottom: 33px;
    cursor: pointer;

    .image {
      height: 138px;
      width: 100%;
      margin-bottom: 12px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    h5 {
      font-size: 16px;
      font-weight: bold;
    }
    .info {
      span {
        display: flex;
        gap: 7px;
      }
    }
  }
  .right-read-container {
    width: 100%;
    gap: 25px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @include breakpoints(small) {
    .main-read {
      padding: 40px 36px 19px 36px;
      margin-bottom: 25px;

      .image {
        height: 208px;
        margin-bottom: 24px;
        width: 100%;

        img {
          height: 100%;
          width: 100%;
        }
      }

      h5 {
        font-size: 20px;
        font-weight: bold;
      }
      .info {
        span {
          display: flex;
          gap: 7px;
        }
      }
    }
  }
  @include breakpoints(medium) {
    gap: 57px;
    height: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .main-read {
      padding: 40px 36px 19px 36px;
      box-shadow: -4px -5px #000;
      width: 50%;
      height: 100%;
      border: 1px solid black;
      margin: 0;

      .image {
        height: 258px;
        margin-bottom: 24px;
        width: 100%;

        img {
          height: 100%;
          width: 100%;
        }
      }

      h5 {
        font-size: 30px;
        font-weight: bold;
      }
      .info {
        span {
          display: flex;
          gap: 7px;
        }
      }
    }
    .right-read-container {
      width: calc(50% - 57px);
      gap: 30px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
}
</style>
