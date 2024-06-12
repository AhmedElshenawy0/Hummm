<template>
  <div class="container-responsive d-flex flex-column mt-2">
    <SectionHead title="مقالات" toName="Read"/>
    <ReadBody />
  </div>
</template>

<script setup lang="ts">
import ReadBody from "@/components/Home/ReadSection/ReadBody.vue";
import SectionHead from "@/components/Home/SectionHead.vue";
</script>

<style scoped lang="scss">
.container-responsive {
  gap: 10px;


}
</style>
