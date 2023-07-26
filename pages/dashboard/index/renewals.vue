<script setup lang="ts">
const authStore = useAuthStore()

const { data, pending } = useFetch<any>('https://supgrade-api.site/api/v1/admin/renewals', {
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
              Key
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
          <tr v-for="ren in data.renewals" :key="ren.id">
            <td class="px-4 py-2">
              {{ ren.country }}
            </td>
            <td class="px-4 py-2">
              {{ ren.key }}
            </td>
            <td class="px-4 py-2">
              {{ convertDate(ren.createdAt) }}
            </td>
            <td>
              {{ ren.status.charAt(0).toUpperCase() + ren.status.slice(1) }}
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
