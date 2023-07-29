<script setup lang="ts">
const { y } = useWindowScroll()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button v-if="y > 200" class="flex p-2 rounded-full bg-[#181818] fixed z-40 bottom-5 right-5" @click="scrollToTop">
    <Icon name="tabler:chevron-up" class="w-10 h-10" />
  </button>
</template>
