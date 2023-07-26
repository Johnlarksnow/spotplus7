<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'dash',
})

const nav = [
  {
    name: 'Home',
    path: '/dashboard',
    icon: 'tabler:home',
  },
  {
    name: 'Payments',
    path: '/dashboard/payments',
    icon: 'tabler:receipt',
  },
  {
    name: 'Upgrades',
    path: '/dashboard/upgrades',
    icon: 'tabler:arrow-big-up-lines-filled',
  },
  {
    name: 'Renewals',
    path: '/dashboard/renewals',
    icon: 'tabler:rotate-clockwise',
  },

]

const authStore = useAuthStore()

const { data, pending } = await useFetch(
  'https://supgrade-api.site/api/v1/admin/user_data',
  {
    method: 'POST',
    body: JSON.stringify({
      user: authStore.decodeJwt().id,
    }),
    headers: {
      Authorization: `Bearer ${authStore.jwt}`,
    },
  },
)
</script>

<template>
  <ClientOnly>
      <NavDash></NavDash>
  </ClientOnly>
  <div>
    <div v-if="pending">
      Loading...
    </div>
    <div v-else>
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <img :src="data.avatar" class="w-12 h-12 rounded-full">
          <h2 style="color: white;" class="font-bold text-2xl">
            {{ data.username }}
          </h2>
        </div>
        <p style="color: white;" class="text-sm text-gray-400">
          {{ data.email }}
        </p>
        <p class="text-sm text-gray-400">
          {{ data.id }}
        </p>
      </div>

      
      <NuxtPage />
    </div>
  </div>
</template>

<style src="@/components/css/style.css"></style>
<style src="@/components/css/animate.css"></style>
<style src="@/components/css/bootstrap.min.css"></style>
<style src="@/components/css/magnific-popup.min.css"></style>
<style src="@/components/css/meanmenu.css"></style>
<style src="@/components/css/odometer.css"></style>
<style src="@/components/css/owl.carousel.min.css"></style>
<style src="@/components/css/responsive.css"></style>
<style src="@/components/css/slick.css"></style>