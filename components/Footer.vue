<script setup lang="ts">
const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Upgrade',
    href: '/upgrade',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Pricing',
    href: '/#pricing',
  },
  {
    title: 'Features',
    href: '/#features',
  },
]

const authStore = useAuthStore()
const appConfig = useAppConfig()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer-area bg-f7fafd">
		<div class="w-full" style="width: 70rem;" >
			<div class="w-full flex justify-center md:justify-start border-b-[1px] border-primary"><a
					class="inline-block mb-5" href="/"><img alt="logo" src="../components/img/spotifylogo.png" 
						decoding="async" data-nimg="1" class="block w-full" loading="lazy" style="color:transparent; height: 60px;"></a>
			</div>
			<div class="flex mt-4 mb-5 w-full">
				<ul class="flex flex-col justify-between items-center w-full md:flex-row lg:flex lg:space-x-12">
					<p class="text-xs font-medium leading-relaxed text-white md:text-base">© 2023 SpotPlus. All rights
						reserved.</p>
					<div class="hidden justify-between w-3/12 md:flex">
						
				</div>
				<div class="flex justify-between"><a href="https://discord.gg/spotifyplug"><img
							src="https://www.spotgrade.io/images/footer/discord.svg"></a>
				</div>
			</ul>
		</div>
	</div>

</footer>
</template>
<style>
  @import 'css/style.css';
  @import 'css/animate.css';
  @import 'css/bootstrap.min.css';
  @import 'css/magnific-popup.min.css';
  @import 'css/meanmenu.css';
  @import 'css/odometer.css';
  @import 'css/owl.carousel.min.css';
  @import 'css/responsive.css';
  @import 'css/slick.css';
 
</style>