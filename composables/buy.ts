export async function useBuy(plan: string, amount: string) {
  const authStore = useAuthStore()

  const { data } = await useFetch('https://supgrade-api.site/api/v1/payments/create', {
    method: 'POST',
    body: JSON.stringify({
      plan,
      amount,
      userId: authStore.decodeJwt().id,
    }),
    headers: {
      Authorization: `Bearer ${authStore.decodeJwt().id}`,
    },
  })

  const router = useRouter()
  router.push({
    name: 'checkout-id',
    params: { id: data.value.checkout },
  })
}
