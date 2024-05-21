<template>
  <div>
    <ShowPlayer />
    <div class="container-responsive">
      <ShowItem :shows="shows"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowPlayer from "@/components/Show/ShowPlayer.vue";
import { useQuery } from "@vue/apollo-composable";
import { ALL_SHOW_QUERY } from "@/graphql/queries";
import { computed, onBeforeMount, onUpdated, watchEffect } from "vue";
import ShowItem from "@/components/Show/ShowItem.vue";
import type { Shows } from "@/generated/graphql";
const { result } = useQuery(ALL_SHOW_QUERY);
const shows = computed(():Shows[] => result?.value?.shows);

onBeforeMount(() => {
  window.scrollTo(0, 0)

})
onUpdated(()=> {
  window.scrollTo(0, 0)
})
</script>

<style scoped lang="scss"></style>
