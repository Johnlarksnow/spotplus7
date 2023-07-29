<script setup lang="ts">
defineProps({
  icon: String,
})
</script>

<template>
  <div class="flex h-full relative border-2 border-dashed border-green-900 flex-col gap-2 rounded-md p-4">
    <div class="gap-2 flex items-center">
      <Icon :name="icon" class="w-10 h-10 bg-gradient-to-r from-green-500 p-1 to-green-600 rounded-md" />
      <h3 class="text-2xl font-semibold">
        <slot name="title" />
      </h3>
    </div>

    <p class="text-lg">
      <slot name="description" />
    </p>
  </div>
</template>
