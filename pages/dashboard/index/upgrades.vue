<script setup lang="ts">
const authStore = useAuthStore()

const { data, pending } = useFetch<any>('https://supgrade-api.site/api/v1/admin/upgrades', {
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
    <div v-if="pending" class="flex items-center justify-center">
      <Loader />
    </div>
    <div v-else>
      <!-- create a table with tr and td with status amount id gateaway createdAt -->
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">
              Country
            </th>
            <th class="px-4 py-2">
              ID
            </th>
            <th class="px-4 py-2">
              Email
            </th>
            <th class="px-4 py-2">
              Created At
            </th>
            <th class="px-4 py-2">
              Status
            </th>
          </tr>
        </thead>
        <tbody class="even:bg-[#181818]">
          <tr v-for="upgrade in data.upgrades" :key="upgrade.id">
            <td class="px-4 py-2">
              {{ upgrade.country }}
            </td>
            <td class="px-4 py-2">
              {{ upgrade.id }}
            </td>
            <td class="px-4 py-2">
              {{ upgrade.email }}
            </td>
            <td class="px-4 py-2">
              {{ convertDate(upgrade.createdAt) }}
            </td>
            <td>
              {{ upgrade.status.charAt(0).toUpperCase() + upgrade.status.slice(1) }}
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
