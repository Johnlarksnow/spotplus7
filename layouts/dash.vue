<script setup lang="ts">
const item = ref()
</script>

<template>
  <div class="flex flex-col gap-2 min-h-screen items-center">
    <Nav />
    <div class="flex-grow flex min-h-screen w-full">
      <div class="mx-auto w-11/12 py-8">
        <slot />
      </div>
    </div>
    <Footer />
    <Up />
  </div>
</template>
