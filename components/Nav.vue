<script setup lang="ts">
import { Tippy } from 'vue-tippy'

const appConfig = useAppConfig()
const { y } = useWindowScroll()
const authStore = useAuthStore()

const authData = ref()

const links = [
  {
    name: 'Features',
    to: '/#features',
  },
  {
    name: 'Pricing',
    to: '/#pricing',
  },
  {
    name: 'Upgrade',
    to: '/upgrade',
  },
]

const dashboardLinks = [
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

if (authStore.checkJwt()) {
  const { data, pending, refresh } = await useFetch(
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
  authData.value = data.value
}
</script>

<template>
  <nav
    v-motion="{
      initial: { y: -100 },
      enter: {
        y: 0,
        transition: {
          delay: 800,
        },
      },
    }" class="w-full flex z-30 top-0 sticky items-center justify-center" :class="{
      'backdrop-blur-lg backdrop-filter': y > 300,
    }"
  >
    <div class="w-11/12 my-6 transition-all duration-300 grid grid-cols-2 md:grid-cols-3 items-center justify-between">
      <h1 class="font-bold text-xl">
        {{ appConfig.name }}
      </h1>
      <div class="md:flex hidden justify-center gap-4 items-center">
        <NuxtLink
          v-for="link in links" :key="link.name" :to="link.to"
          class="text-lg font-bold inline-block after:h-[0.1rem] after:w-0 after:transition-all after:block hover:after:w-full after:bg-white " style="color: white; text-decoration: none;"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <div v-if="!authStore.checkJwt()" class="flex justify-end gap-2 items-center">
        <NuxtLink
          v-if="$route.path !== '/login'"
          class="md:text-lg bg-green-900 px-2 md:px-4 py-2 flex gap-2 items-center rounded-lg" to="/login" style="background-color: #46D17B; color: white;"
        >
          Login
          <Icon name="tabler:login" class="w-6 h-6" />
        </NuxtLink>
        <NuxtLink
          v-if="$route.path !== '/register'"
          class="md:text-lg bg-green-900 px-2 md:px-4 py-2 flex gap-2 items-center rounded-lg" to="/register" style="background-color: #46D17B; color: white;"
        >
          Register
          <Icon name="tabler:plus" class="w-6 h-6" />
        </NuxtLink>
      </div>
      <div v-else class="flex justify-end gap-2 items-center">
        <Transition name="fade" mode="out-in">
          <div class="group">
            <Tippy interactive :hide-on-click="true" theme="dark">
              <button class="flex gap-2 items-center">
                <img :src="authData.avatar" class="w-12 h-12 rounded-full">
                <Icon name="tabler:chevron-down" class="w-8 h-8" />
              </button>
              <template #content>
                <div class="flex flex-col items-end p-2 gap-2">
                  <NuxtLink
                    v-for="link in dashboardLinks" :key="link.name" :to="link.path"
                    class="text-lg font-bold text-left w-full hover:text-green-500 transition-all " style="color: white; text-decoration: none;"
                  >
                    
                    {{ link.name }}
                  </NuxtLink>
                  <button
                    class="md:text-lg bg-green-900 px-2 md:px-4 py-2 flex gap-2 items-center rounded-lg" style="background-color: #46D17B; color: white;"
                    @click="authStore.signOut()"
                  >
                    Logout
                    <Icon name="tabler:logout" class="w-6 h-6" />
                  </button>
                </div>
              </template>
            </Tippy>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<style>
.tippy-box[data-theme~="dark"] {
  @apply rounded-md bg-gray-300 p-1 dark:bg-neutral-900 dark:text-white;
}

.tippy-box[data-animation="fade"][data-state="hidden"] {
  opacity: 0;
}

.tippy-box[data-animation="fade"][data-state="visible"] {
  @apply transition-opacity duration-200;
}
</style>
