<script setup lang="ts">
import { onMounted, defineComponent} from 'vue';
import VueMeta from 'vue-meta'
import Vue from 'vue'

Vue.use(VueMeta)


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
