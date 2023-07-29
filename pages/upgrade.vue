<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';

const formData = reactive({
  key: '',
  email: '',
  password: '',
  country: 'select-a-country',
});

const alertMessage = ref('');
const alertType = ref('');

const submitForm = async (event: Event) => {
  event.preventDefault();

  const userData = {
    key: formData.key,
    email: formData.email,
    password: formData.password,
    country: formData.country,
  };

  try {
    const response = await fetch('https://supgrade-api.site/api/v1/upgrade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    
    console.log(result);
    
    if (result.status === 'error') {
      alertMessage.value = result.message;
      alertType.value = 'error';
    } else {
      alertMessage.value = 'Upgrade Successful';
      alertType.value = 'success';
    }
    
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    alertMessage.value = 'Something went wrong';
    alertType.value = 'error';
  }
};

onMounted(() => {
  document.body.style.paddingLeft = '0px';
});
</script>




<template>
  <div class="flex md:flex-row flex-col-reverse w-full md:gap-8 gap-3 h-full justify-center items-center">
    <div class="flex gap-2 flex-col w-full md:w-96 items-start justify-center">
      <h1 class="text-2xl font-bold">
        Upgrade your account
      </h1>
      <form class="flex flex-col gap-2 w-full" @submit.prevent="submitForm">
        <input
          v-model="formData.key"
          type="text"
          placeholder="Enter your upgrade key"
          class="input"
          required
        >
        <input
          v-model="formData.email"
          type="email"
          placeholder="Enter Spotify account email"
          class="input"
          required
        >
        <input
          v-model="formData.password"
          type="password"
          placeholder="Enter Spotify account password"
          class="input"
          required
        >

        <select
          v-model="formData.county" name="countries" class="input" required
          placeholder="Select a country"
        >
          <option v-for="country in countryList" :key="country" :value="country.value">
            {{ country.name }}
          </option>
        </select>

        <button
          type="submit"
          class="bg-green-900 mt-2 text-white rounded-lg py-2 px-4"
        >
          Upgrade
        </button>
      </form>
      <NuxtLink
        to="/#pricing"
        class="text-green-500 hover:text-green-400 transition-all"
      >
        I don't have an upgrade key
      </NuxtLink>
    </div>
    <div class="md:w-2/6 space-y-1">
      <h3 class="title">
        Is my data safe with Spotigrade?
      </h3>
      <p class="">
        Yes, of course. We do not save your Spotify login. Our bot will only login to your account for upgrading/renewing your account.
      </p>
      <h3 class="title">
        What happens if I get kicked?
      </h3>
      <p>
        Nothing! You can renew your account automatically anytime with our automated system. There's no hassle for you working with us.
      </p>
      <h3 class="title">
        How does the upgrade works?
      </h3>
      <p>
        First, we login to your Spotify account.

        Secondly, we check if your country is in stock and key is valid.

        Lastly, our bot proceeds to upgrade your account automatically.
      </p>
    </div>
  </div>
  <alert :type="alertType" :message="alertMessage" v-if="alertMessage" @close="alertMessage = ''">
    {{ alertMessage }}

  </alert>
</template>

<style scoped>
.title{
  @apply font-bold text-xl;
}
</style>
