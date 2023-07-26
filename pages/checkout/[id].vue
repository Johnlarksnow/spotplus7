<script setup lang="ts">
const route = useRoute()
const authStore = useAuthStore()
import { onMounted } from 'vue';
onMounted(() => {
  document.body.style.paddingLeft = '0px';
});
const { data, pending } = await useFetch('https://supgrade-api.site/api/v1/payments/valid',
  {
    method: 'POST',
    body: JSON.stringify({
      checkoutId: route.params.id,
    }),
    headers: {
      Authorization: `Bearer ${authStore.jwt}`,
    },
  })

definePageMeta({
  middleware: 'auth',
  layout: 'checkout',
})

async function pay() {
  try {
    const response = await fetch('https://supgrade-api.site/api/v1/payments/checkout', {
      method: 'POST',
      body: JSON.stringify({
        gateway: 'cryptocurrency',
        id: route.params.id,
      }),
      headers: {
        Authorization: `Bearer ${authStore.jwt}`,
        'Content-Type': 'application/json', // Make sure to set the correct content type
      },
    });

    if (!response.ok) {
      console.error('Error: The server responded with an error', response.status);
      return;
    }

    const data = await response.json();

    if (data && data.link) {
      window.location.href = data.link;
    } else {
      console.error('Invalid response format or missing link property');
    }
  } catch (error) {
    console.error('An error occurred during payment:', error);
  }
}



const svgs = [
  'btc',
  'eth',
  'ltc',
  'usdt',
  'usc',
]
</script>

<template>
  <div class="flex w-full flex-col h-full gap-2 items-center justify-center">
    <div v-if="pending">
      Loading...
    </div>
    <div v-else class="flex md:w-3/6 flex-col gap-2 items-center justify-center">
      <div v-if="data.status === 'unpaid'" class="flex w-full flex-col gap-2">
        <NuxtLink
          to="/"
          class="text-green-500 font*bold text-lg hover:text-green-400 transition-all"
        >
          &larr; Back to home
        </NuxtLink>
        <h1 class="text-2xl font-bold">
          Checkout
        </h1>
        
        <h2 class="text-gray-400 text-lg">
          {{ data.email }}
        </h2>
        <button class="flex flex-col w-full md:flex-row md:justify-between items-center gap-2 bg-[#181818] p-4 rounded-lg" @click="pay">
          <h2 class="flex gap-2 items-center text-xl font-bold">
            <img src="/cbase.svg" class="w-10 h-10">
            Pay with Coinbase
          </h2>
        </button>
        <div class="space-y-2">
          <h3 class="text-lg text-gray-400">
            Supported Coins
          </h3>
          <div class="flex gap-2">
            <template v-for="svg in svgs" :key="svg">
              <img :src="`/${svg}.svg`" class="w-10 h-10">
            </template>
          </div>
        </div>
      </div>
      <div v-else-if="data.status === 'success'" class="w-full flex justify-center">
        <div class="flex flex-col gap-2 items-center justify-center">
          <h1 class="font-bold text-3xl text-center">
            This payment has already been paid. Go grab your key from
          </h1>
          <NuxtLink to="/upgrade" class="text-xl text-green-500 font-bold hover:text-green-400 transition-all">
            Here
            <Icon name="tabler:arrow-right" class="w-6 h-6" />
          </NuxtLink>
        </div>
      </div>
      <div v-else class="w-full flex justify-center">
        <div class="flex flex-col gap-2 items-center justify-center">
          <h1 class="font-bold text-3xl text-center">
            This payment has been failed or cancelled.
            Buy another key from
          </h1>
          <NuxtLink to="/dashboard" class="text-xl text-green-500 font-bold hover:text-green-400 transition-all">
            Here
            <Icon name="tabler:arrow-right" class="w-6 h-6" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
