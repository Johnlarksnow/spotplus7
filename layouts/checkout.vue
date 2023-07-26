<script setup lang="ts">
const item = ref()
</script>

<template>
  <div class="flex flex-col min-h-screen items-center">
    <div class="flex-grow flex w-full bg-[#181818] z-20">
      <div class="mx-auto w-11/12 py-8">
        <slot />
      </div>
    </div>
  </div>
</template>
