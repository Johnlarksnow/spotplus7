<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

defineEmits(['close'])

function getBgColor() {
  switch (props.type) {
    case 'success':
      return 'green'
    case 'error':
      return 'red'
    case 'warning':
      return 'yellow'
    default:
      return 'blue'
  }
}
</script>

<template>
  <div

    v-motion
    :initial="{
      opacity: 0,
      y: 20,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }" :leave="{
      opacity: 0,
      y: 20,
    }"

    class="fixed left-0 bottom-4 z-50 w-full flex justify-center items-center"
  >
    <div :class="`p-4 rounded-md justify-between flex items-center md:w-8/12 w-11/12 bg-green-500 gap-2`">
      
      <div class="flex flex-col gap-2 text-right">
        
        <p :class="`text-gray-200`">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<style>
</style>
