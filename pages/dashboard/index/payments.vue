<script setup lang="ts">
const authStore = useAuthStore()

const { data, pending } = useFetch<any>('https://supgrade-api.site/api/v1/payments/userPayments', {
  method: 'POST',
  body: JSON.stringify({
    userId: authStore.decodeJwt().id,
  }),
  headers: {
    Authorization: `Bearer ${authStore.jwt}`,
  },
})
</script>

<template>
  <div>
    <button v-for="link in nav" :key="link.name" @click="$router.push(link.path)"
      class="text-lg font-bold cursor-pointer inline-block after:h-[0.1rem] after:w-0 after:transition-all after:block hover:after:w-full after:bg-white"
      :class="{
        'text-green-600': $route.path === link.path,
      }">
      <h1 class="flex items-center gap-1 mb-1">
        <Icon :name="link.icon" class="w-6 h-6" />
        {{ link.name }}
      </h1>
    </button>
    <div v-if="pending" class="flex items-center justify-center">
      <Loader />
    </div>
    <div v-else>
      <table class="table-auto even:bg-[#181818] odd:bg-transparent w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">
              Amount
            </th>
            <th class="px-4 py-2">
              ID
            </th>
            <th class="px-4 py-2">
              Gateway
            </th>
            <th class="px-4 py-2">
              Created At
            </th>
            <th class="px-4 py-2">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in data.payments" :key="payment.id">
            <td class="px-4 py-2">
              {{ payment.amount }}
            </td>
            <td class="px-4 py-2">
              {{ payment.id }}
            </td>
            <td v-if="payment.gateway" class="px-4 py-2">
              {{ payment.gateway.charAt(0).toUpperCase() + payment.gateway.slice(1) }}
            </td>
            <td v-else class="px-4 py-2">
              None
            </td>
            <td class="px-4 py-2">
              {{ convertDate(payment.createdAt) }}
            </td>
            <td class="px-4 py-2" :class="{
              'text-green-500': payment.status === 'success',
              'text-red-500': payment.status === 'cancelled' || payment.status === 'failed',
              'text-yellow-500': payment.status === 'unpaid',
            }">
              {{ payment.status.charAt(0).toUpperCase() + payment.status.slice(1) }}
            </td>
            <td v-if="payment.status === 'unpaid'" class="px-4 py-2">
              <NuxtLink :to="{
                name: 'checkout-id',
                params: {
                  id: payment.id,
                },
              }" class="px-2 py-1 flex items-center justify-center bg-green-500 text-white rounded-md">
                Pay
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
th {
  @apply text-left;
}

td {
  @apply align-middle h-full;
}
</style>
