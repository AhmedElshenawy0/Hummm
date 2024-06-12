<template>
  <div class="container-responsive">
    <SectionHead title="الصحافه" toName="Press"/>

    <div class="press-holder" v-dragscroll>
      <div
        class="press-container d-flex justify-content-between overflow-scroll"
      >
        <PressItemVue v-for="(item, i) in pressItems" :key="i" :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PressItemVue from "./PressItem.vue";
import { useQuery } from "@vue/apollo-composable";
import { LIMITED_PRESS_QUERY } from "@/graphql/queries";
import { computed, watchEffect } from "vue";
import SectionHead from "../SectionHead.vue";
const { result } = useQuery(LIMITED_PRESS_QUERY);
const pressItems = computed(() => result.value?.Article);


</script>

<style scoped lang="scss">
.container-responsive {
  .press-head {
    margin-bottom: 43px;
    h2 {
      font-size: 32px;
      line-height: 43px;
      font-weight: bold;
    }
    button {
      @include button(4px, 5px);
      font-size: 12px;
    }
  }
  .press-holder {
    overflow-x: scroll;
    cursor: grab;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
    &::-webkit-scrollbar {
  display: none;}
  }
  .press-container {
    width: 650px;
    gap:30px;
    &::-webkit-scrollbar{
        display:none;
        }
  }
  @include breakpoints(small) {
    .press-container {
    width: 100%;}
  }
  }
  @include breakpoints(medium) {
    .press-head {
      h2 {
        font-size: 44px;
        line-height: 55px;
      }
      button {
        font-size: 15px;
      }
    }
    .press-container {
    gap:30px}
 
  @include breakpoints(large) {
    .press-head {
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
