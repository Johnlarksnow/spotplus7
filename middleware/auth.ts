export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  if (to.path.includes('/dashboard') && !authStore.checkJwt())
    return navigateTo('/login')
  else if ((to.path === '/login' || to.path === '/register') && authStore.checkJwt())
    return navigateTo('/dashboard')
})
