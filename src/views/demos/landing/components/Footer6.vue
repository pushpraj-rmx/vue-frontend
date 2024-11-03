<template>
	<footer>
		<b-container>
			<b-row class="g-4 justify-content-between pt-5">
				<b-col md="5" lg="4">
					<router-link class="me-0" :to="{ name: 'demos.default' }">
						<img class="light-mode-item h-40px" :src="logo" alt="logo">
						<img class="dark-mode-item h-40px" :src="logolight" alt="logo">
					</router-link>

					<p class="my-3">Eduport education theme, built specifically for the education centers which is dedicated to
						teaching and involve learners.</p>
					<b-form class="row row-cols-lg-auto g-2">
						<b-col cols="12">
							<b-form-input type="email" placeholder="Enter your email address" />
						</b-col>
						<b-col cols="12">
							<b-button type="submit" variant="dark" class="m-0">Subscribe</b-button>
						</b-col>
					</b-form>
				</b-col>

				<b-col md="7" lg="6">
					<b-row class="g-4 g-lg-5">
						<b-col cols="6" sm="4" v-for="(link, idx) in footerLink" :key="idx">
							<ul class="nav flex-column">
								<li class="nav-item" v-for="(label, idx) in link.label" :key="idx">
									<a class="nav-link" :class="!idx && 'pt-0'" href="#">{{ label }}</a>
								</li>
							</ul>
						</b-col>
						<b-col cols="6" sm="4">
							<ul class="nav flex-column">
								<li class="nav-item"><a class="nav-link pt-0" href="#">
										<font-awesome-icon :icon="faFacebookSquare" class="text-facebook me-2" />Facebook</a>
								</li>
								<li class="nav-item"><a class="nav-link" href="#">
										<font-awesome-icon :icon="faInstagramSquare" class="text-instagram me-2" />Instagram</a>
								</li>
								<li class="nav-item"><a class="nav-link" href="#">
										<font-awesome-icon :icon="faTwitterSquare" class="text-twitter me-2" />Twitter</a>
								</li>
								<li class="nav-item"><a class="nav-link" href="#">
										<font-awesome-icon :icon="faLinkedin" class="text-linkedin me-2" />Linkedin</a>
								</li>
							</ul>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<hr>
			<b-row>
				<b-col cols="12">
					<div class="d-md-flex justify-content-between align-items-center pt-2 pb-4 text-center">
						<div class="text-primary-hover"> Copyrights ©{{ currentYear }} Eduport. Build by <a :href="developedByLink"
								target="_blank" class="text-reset">{{ developedBy }}</a>.</div>
						<div class="nav justify-content-center mt-3 mt-md-0">
							<ul class="list-inline mb-0">
								<li class="list-inline-item"><a class="nav-link" href="#">Terms of use</a></li>
								<li class="list-inline-item"><a class="nav-link" href="#">Privacy policy</a></li>
								<li class="list-inline-item pe-0"><a class="nav-link" href="#">Cookies</a></li>
							</ul>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</footer>
</template>
<script setup lang="ts">
import { currentYear, developedByLink, developedBy } from '@/helpers/constants';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import logo from '@/assets/images/logo.svg';
import logolight from '@/assets/images/logo-light.svg';

const footerLink = [
	{ label: ['Blog', 'About', 'Contact us', 'Privacy Policy', 'Documentation', 'Sitemap'] },
	{ label: ['Become instructor', 'Download', 'Pricing', 'Services'] },
];
</script>