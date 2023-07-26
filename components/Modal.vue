<script setup lang="ts">
const emits = defineEmits(['close'])

onKeyStroke('Escape', () => {
  emits('close')
})
</script>

<template>
  <div class="fixed  left-0 top-0 h-screen w-screen backdrop-blur-lg backdrop-filter z-40 flex items-center justify-center">
    <div class="rounded-lg grid md:w-2/6 gap-2 p-4 bg-[#181818]">
      <div class="flex justify-between w-full">
        <h2 class="text-3xl font-bold">
          <slot name="title" />
        </h2>
        <button @click="$emit('close')">
          <Icon name="tabler:x" class="w-10 h-10" />
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>
