<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  document.body.style.paddingLeft = '0px';
});
</script>

<template>
  <div class="grid">
    <Hero />
    <ClientOnly>
      <Features />
      <Pricing />
    </ClientOnly>
    <Steps />
  </div>
</template>
