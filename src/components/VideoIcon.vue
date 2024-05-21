<template>
  <div class="video-icon bg-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 18 18"
      :fill="iconColor"
    >
      <path
        id="Path_35239"
        data-name="Path 35239"
        d="M3,3.993A.994.994,0,0,1,3.993,3H20.007A.994.994,0,0,1,21,3.993V20.007a.994.994,0,0,1-.993.993H3.993A.994.994,0,0,1,3,20.007ZM5,5V19H19V5Zm5.622,3.415L15.5,11.667a.4.4,0,0,1,0,.666l-4.88,3.252A.4.4,0,0,1,10,15.253V8.747a.4.4,0,0,1,.622-.332Z"
        transform="translate(-3 -3)"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{iconColor: string}>()
</script>

<style scoped lang="scss">
.video-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>
