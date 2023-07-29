<script setup lang="ts">
const formData = reactive({
  email: '',
  password: '',
})

const alert = reactive({
  type: 'success',
  icon: 'tabler:check',
  title: 'Success',
  message: 'You have successfully registered!',
})
const showAlert = ref(false)

async function login() {
  try {
    const { data } = await useFetch(
      'https://supgrade-api.site/api/v1/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(formData),
      },
    )
    if (data.value.status !== 'success') {
      showAlert.value = true
      alert.icon = 'tabler:x'
      alert.type = 'error'
      alert.title = 'Error'
      alert.message = data.value.message || 'API is not reachable!'

      setTimeout(() => {
        showAlert.value = false
      }, 3000)
    }
    else {
      showAlert.value = true
      alert.icon = 'tabler:check'
      alert.type = 'success'
      alert.title = 'Success'
      alert.message = 'You have successfully logged in!'

      setTimeout(() => {
        showAlert.value = false
      }, 3000)
      const authStore = useAuthStore()
      authStore.signIn(data.value.token)
    }
  }
  catch (error) {
    console.log(error)
  }
}

definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div class="flex flex-col w-full gap-3 h-full justify-center items-center">
    <div class="flex gap-2 flex-col items-start justify-center">
      <NuxtLink
        to="/"
        class="text-green-500 font*bold text-lg hover:text-green-400 transition-all"
      >
        &larr; Back to home
      </NuxtLink>
      <h1 class="text-2xl font-bold">
        Login
      </h1>
      <form class="flex flex-col gap-2" @submit.prevent="login">
        <input
          v-model="formData.email"
          type="email"
          placeholder="Email"
          class="input"
        >
        <input
          v-model="formData.password"
          type="password"
          placeholder="Password"
          class="input"
        >
        <button
          type="submit"
          class="bg-green-900 mt-2 text-white rounded-lg py-2 px-4"
        >
          Login
        </button>
      </form>
      <NuxtLink
        to="/register"
        class="text-green-500 hover:text-green-400 transition-all"
      >
        I don't have an account
      </NuxtLink>
    </div>
    <Alert
      v-if="showAlert"
      :type="alert.type"
      :icon="alert.icon"
    >
      <template #title>
        {{ alert.title }}
      </template>
      {{ alert.message }}
    </Alert>
  </div>
</template>

<style>
.input {
  @apply bg-[#181818] border-b-2 w-full border-zinc-800 focus:outline-none text-lg p-2;
}
</style>
