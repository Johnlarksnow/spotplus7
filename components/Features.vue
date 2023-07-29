<script setup lang="ts">
import { register } from 'swiper/element/bundle'

const features = [
  {
    title: 'High Quality',
    description: 'All of our stock is brought to our customers with the highest quality.',
    icon: 'tabler:check',
  },
  {
    title: 'Cheap',
    description: 'We are the cheapest upgrader on the market, starting as cheap as $2,20 with our reselling pricing.',
    icon: 'tabler:cash',
  },
  {
    title: 'Lifetime Warranty',
    description: 'We offer a lifetime warranty on all of our upgrades, so you can be sure that you will never lose your upgrade.',
    icon: 'tabler:shield-check',
  },
  {
    title: 'Automated',
    description: 'Get Premium on your Spotify account in just one-click, using our automatic upgrade tool.',
    icon: 'tabler:robot',
  },
  {
    title: '24/7 Support',
    description: 'We offer 24/7 support to all of our customers, your questions and problems means a lot for us!',
    icon: 'tabler:message-chatbot',
  },
  {
    title: 'Secure',
    description: 'We use the most secure all data in our servers, so you can be sure that your data is safe with us.',
    icon: 'tabler:lock',
  },
]

const sentence = 'We offer a lot of features to our customers, so they can be sure that they are getting the best upgrade on the market.'

onMounted(() => {
  register()
})
</script>

<template>
  <section class="boxes-area" style="margin-top: 5rem;">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6">
					<div class="single-box">
						<div class="icon"> <svg style="margin-left: 1rem; margin-top: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" class="feather feather-server">
								<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
								<rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
								<line x1="6" y1="6" x2="6" y2="6"></line>
								<line x1="6" y1="18" x2="6" y2="18"></line>
							</svg> </div>
						<h3 class="thingthing">Zero Configuration</h3>
						<p>In a matter of minutes you can have your upgraded account up and running.</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="single-box bg-f78acb">
						<div class="icon"> <svg style="margin-left: 1rem; margin-top: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" class="feather feather-code">
								<polyline points="16 18 22 12 16 6"></polyline>
								<polyline points="8 6 2 12 8 18"></polyline>
							</svg> </div>
						<h3 class="thingthing">Cheap</h3>
						<p>We have one of the best pricing on the whole market beating our competitors!</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="single-box bg-c679e3">
						<div class="icon"> <svg style="margin-left: 1rem; margin-top: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg> </div>
						<h3 class="thingthing">24/7 Support</h3>
						<p>We have an experience staff team ready to help you whenever you need help.</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="single-box bg-eb6b3d">
						<div class="icon"> <svg style="margin-left: 1rem; margin-top: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch">
								<line x1="6" y1="3" x2="6" y2="15"></line>
								<circle cx="18" cy="6" r="3"></circle>
								<circle cx="6" cy="18" r="3"></circle>
								<path d="M18 9a9 9 0 0 1-9 9"></path>
							</svg> </div>
						<h3 class="thingthing">Instant</h3>
						<p>We deliver all your purchased keys upon payment confirmation, zero hassle.

						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  <section class="features-area ptb-80 bg-f7fafd" id="features">
		<div align="center"> </div>
		<div class="container">
			<div class="section-title">
				<h2 class="ourfeatures">How it works?</h2>
				<div class="bar"></div>

			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6">
					<div class="single-features">
						<div class="icon"> <b style="font-size: 22px;">1</b></div>
						<h3 class="features">Automated Upgrading</h3>
						<p style='color: rgb(173, 170, 170);'>The customer provides the purchased key, Spotify account
							login, and Spotify account password. Our system then logs into the customer's account and
							handles all the necessary tasks on behalf of the customer.

						</p>
					</div>
				</div>
				<div class="col-lg-6 col-md-6">
					<div class="single-features">
						<div class="icon"> <b style="font-size: 22px;">2</b></div>
						<h3 class="features">Automated Renewing</h3>
						<p style='color: rgb(173, 170, 170);'>Removed from the family plan? No worries! Our system
							features an automated renewal system that detects account removal, verifies if it's the same
							upgraded account, checks for key redemption.


						</p>
					</div>
				</div>
				<div style="margin-left: 20rem;" class="col-lg-6 col-md-6">
					<div class="single-features">
						<div class="icon"> <b style="font-size: 22px;">3</b></div>
						<h3 class="features">Automated Account</h3>
						<p style='color: rgb(173, 170, 170);'>Want to register an account in France but don't want to go
							through all the hassle of setting up a VPN? Our system can create a fresh Spotify account in
							any country within a few seconds.

						</p>
					</div>
				</div>

			</div>
		</div>
	</section>
  <div class="videoflavor">
		<video autoplay loop muted>
			<source src="https://i.imgur.com/LsCOytX.mp4" type="video/mp4">
		</video>
		<div class="text-overlay">
			<h1>Automated
				Spotify Premium</h1>
		</div>
	</div>
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
