<template>
     <div class="read-head d-flex justify-content-between align-items-center">
      <h3 class="section-title">{{title}}</h3>
      <button class="more" @click="$router.push({name:toName})">اعرف المزيد</button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{title:string, toName:string}>()
</script>

<style scoped lang="scss">

  .more {
    @include button( 4px, 5px);
  }
</style>