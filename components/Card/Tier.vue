<script setup lang="ts">
defineProps({
  specs: {
    type: Array,
    required: true,
  },
})

const authStore = useAuthStore()
</script>

<template>
  <div class="md:w-full">
    <div class="relative group h-full w-full">
      <div
        class="absolute rounded-lg from-green-600 to-green-900 bg-gradient-to-r opacity-25 blur transition duration-1000 -inset-1 group-hover:opacity-100 group-hover:duration-200"
      />

      <div class="flex h-full bg-[#181818] relative flex-col gap-2 rounded-md p-4">
        <h3 class="text-2xl font-semibold">
          <slot name="title" />
        </h3>
        <p class="text-xl">
          <slot name="description" />
        </p>
        <div class="md:grid gap-1">
          <div v-for="(spec, index) in specs" :key="`pricing-spec-${index}`" class="flex items-center gap-2">
            <Icon name="tabler:check" class="w-6 h-6 text-green-500" />
            <span class="text-lg font-semibold">{{ spec }}</span>
          </div>
        </div>
        <div class="w-full">
          <slot name="button" />
        </div>
      </div>
    </div>
  </div>
</template>
