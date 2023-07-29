<script setup lang="ts">
const formData = reactive({
  username: '',
  email: '',
  password: '',
  password_repeat: '',
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
    if (formData.password !== formData.password_repeat) {
      showAlert.value = true
      alert.icon = 'tabler:asterisk'
      alert.type = 'error'
      alert.title = 'Error'
      alert.message = 'Passwords do not match!'

      setTimeout(() => {
        showAlert.value = false
      }, 3000)
    }
    else {
      const { data, error } = await useFetch(
        'https://supgrade-api.site/api/v1/auth/register',
        {
          method: 'POST',
          body: JSON.stringify(formData),
        },
      )
      if (data.value?.status !== 'success' || error) {
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
        alert.message = 'You have successfully registered!'

        setTimeout(() => {
          showAlert.value = false
          router.push('/login')
        }, 3000)
      }
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
        Register
      </h1>
      <form class="flex flex-col gap-2" @submit.prevent="login">
        <input
          v-model="formData.username"
          type="text"
          placeholder="Username"
          class="input"
          required
        >
        <input
          v-model="formData.email"
          type="email"
          placeholder="Email"
          class="input"
          required
        >
        <input
          v-model="formData.password"
          type="password"
          placeholder="Password"
          class="input"
          required
        >
        <input
          v-model="formData.password_repeat"
          type="password"
          placeholder="Repeat Password"
          required
          class="input"
        >
        <button
          type="submit"
          class="bg-green-900 mt-2 text-white rounded-lg py-2 px-4"
        >
          Register
        </button>
      </form>
      <NuxtLink
        to="/login"
        class="text-green-500 hover:text-green-400 transition-all"
      >
        I have an account
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
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
