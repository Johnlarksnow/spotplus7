<script setup lang="ts">
const tiers = [
  {
    title: 'Single',
    description: 'Get Premium on your Spotify account in just one-click, using our automatic upgrade tool.',
    specs: [

    ],
    price: 4.99,
  },
  {
    title: 'Duo',
    description: 'Get Premium on your Spotify account in just one-click, using our automatic upgrade tool.',
    specs: [
      'Up to 2 Accounts',
      'High Quality Music',
      'Cheap',
      'Automated',
      '24/7 Support',
      'Secure',
    ],
    price: 7.99,
  },
  {
    title: 'Family',
    description: 'Get Premium on your Spotify account in just one-click, using our automatic upgrade tool.',
    specs: [
      'Up to 5 Accounts',
      'High Quality Music',
      'Cheap',
      'Automated',
      '24/7 Support',
      'Secure',
    ],
    price: 14.99,
  },
]

const authStore = useAuthStore()
const isModalOpen = ref(false)
</script>

<template class="content">
  <section  class="pricing-area ptb-80 bg-f9f6f6 " id="products">
    <div class="container">
     
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="pricing-table">
            <div class="pricing-header" style="color: black;">
              <h3 >Single</h3>
            </div>
            <div class="price"> <span><sup>$</sup>4.99<span>/Lifetime</span></span>
            </div>
            <div class="pricing-features">
              <ul>
                <li class="active">1x Upgrade Key</li>
                <li class="active">Automated Upgrade</li>
                <li class="active">Lifetime Warranty</li>
                <li class="active">Adless Listening</li>
                <li class="active">Offline Listening</li>

              </ul>
            </div>
            <button v-if="!authStore.checkJwt()" @click="isModalOpen = true" name="product" value="subscription"
              class="btn btn-primary">Purchase</button>
            <button v-else @click="useBuy('single', '4.99')" name="product" value="subscription"
              class="btn btn-primary">Purchase</button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="pricing-table active-plan">
            <div class="pricing-header">
              <h3>Family </h3>
            </div>
            <div class="price"> <span><sup>$</sup>17.99 <span>/Lifetime</span></span>
            </div>
            <div class="pricing-features">
              <ul>
                <li class="active">5x Upgrade Key</li>
                <li class="active">Automated Upgrade</li>
                <li class="active">Lifetime Warranty</li>
                <li class="active">Adless Listening</li>
                <li class="active">Offline Listening</li>
              </ul>
            </div>
            <button v-if="!authStore.checkJwt()" @click="isModalOpen = true" name="product" value="subscription"
              class="btn btn-primary">Purchase</button>
            <button v-else @click="useBuy('Family', '17.99')" name="product" value="subscription"
              class="btn btn-primary">Purchase</button>

          </div>
        </div>
        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div class="pricing-table">
            <div class="pricing-header" style="color: black;">
              <h3>Duo</h3>
            </div>
            <div class="price"> <span><sup></sup>$8.99 <span>/Lifetime</span></span>
            </div>
            <div class="pricing-features">
              <ul>
                <li class="active">d2x Upgrade Key</li>
                <li class="active">Automated Upgrade</li>
                <li class="active">Lifetime Warranty</li>
                <li class="active">Adless Listening</li>
                <li class="active">N/A</li>
              </ul>
            </div>
            <button v-if="!authStore.checkJwt()" @click="isModalOpen = true" name="product" value="subscription"
              class="btn btn-primary">Purchase</button>
            <button v-else @click="useBuy('Duo', '7.99')" name="product" value="subscription"
              class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
    <div class="shape8 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div>
    <div class="shape2 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div>
    <div class="shape7"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div>
    <div class="shape4"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div>
  </section>

  <Transition name="fade" mode="out-in">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title>
        Login Required
      </template>
      <p>
        You need to be logged in first to upgrade your account.
      </p>
      <NuxtLink to="/login"
        class="py-2 px-3 flex items-center justify-center text-xl gap-2 font-bold rounded-md w-full bg-green-900">
        <Icon name="tabler:user-bolt" class="w-6 h-6" />
        Login
      </NuxtLink>
    </Modal>
  </Transition>
</template>

<style src="@/components/css/style.css"></style>
<style src="@/components/css/animate.css"></style>
<style src="@/components/css/bootstrap.min.css"></style>
<style src="@/components/css/magnific-popup.min.css"></style>
<style src="@/components/css/meanmenu.css"></style>
<style src="@/components/css/odometer.css"></style>
<style src="@/components/css/owl.carousel.min.css"></style>
<style src="@/components/css/responsive.css"></style>
<style src="@/components/css/slick.css"></style>