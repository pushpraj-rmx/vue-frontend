<template>
	<section class="py-5 price-wrap">
		<b-container>
			<b-row class="g-4 position-relative mb-4">
				<figure class="position-absolute top-0 start-0 d-none d-sm-block">
					<svg width="22px" height="22px" viewBox="0 0 22 22">
						<polygon class="fill-purple"
							points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 ">
						</polygon>
					</svg>
				</figure>

				<b-col lg="10" class="mx-auto text-center position-relative">
					<figure class="position-absolute top-50 end-0 translate-middle-y d-none d-md-block">
						<svg width="27px" height="27px">
							<path class="fill-orange"
								d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z">
							</path>
						</svg>
					</figure>
					<h1>Affordable Pricing Packages</h1>
					<p class="mb-4 pb-1">Perceived end knowledge certainly day sweetness why cordially</p>

					<b-form class="d-flex align-items-center justify-content-center">
						<span class="h6 mb-0 fw-bold">Monthly</span>
						<div class="form-check form-switch form-check-lg mx-3 mb-0">
							<input class="form-check-input mt-0 price-toggle" type="checkbox" id="flexSwitchCheckDefault"
								@click="plan = !plan">
						</div>
						<div class="position-relative">
							<span class="h6 mb-0 fw-bold">Yearly</span>
							<span
								class="badge bg-danger bg-opacity-10 text-danger ms-1 position-absolute top-0 start-100 translate-middle mt-n2 ms-2 ms-md-5">10%
								discount</span>
						</div>
					</b-form>
				</b-col>
			</b-row>
			<b-row class="g-4">

				<b-col md="6" xl="4">
					<b-card no-body class="border rounded-3 p-2 p-sm-4 h-100">
						<b-card-header class="p-0">
							<div class="d-flex justify-content-between align-items-center p-3 bg-light rounded-2">
								<div>
									<h5 class="mb-0">Basic</h5>
									<div class="badge text-bg-dark mb-0 rounded-pill">Most popular</div>
								</div>
								<div>
									<h4 class="text-success mb-0 plan-price">
										{{ currency }}{{ plan ? '570' : '20' }}</h4>
									<p class="small mb-0">/ per user</p>
								</div>
							</div>
						</b-card-header>

						<div class="position-relative my-3 text-center">
							<hr>
							<p class="small position-absolute top-50 start-50 translate-middle bg-body px-3">All plans included</p>
						</div>

						<b-card-body class="pt-0">
							<ul class="list-unstyled mt-2 mb-0">
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Up to 05 users monthly
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Free 5 host &amp; domain
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Custom infrastructure
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Access to all our room
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconXOctagonFill class="text-danger me-2 icons-center" />24/7 dedicated Support
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconXOctagonFill class="text-danger me-2 icons-center" />Unlimited updates
								</li>
								<li class="h6 fw-light">
									<BIconXOctagonFill class="text-danger me-2 icons-center" />Landing pages &amp; Web widgets
								</li>
							</ul>
						</b-card-body>
						<b-card-footer class="text-center d-grid pb-0">
							<b-button type="button" variant="light" class="mb-0">Get Started</b-button>
						</b-card-footer>
					</b-card>
				</b-col>

				<b-col md="6" xl="4">
					<b-card no-body class="border rounded-3 p-2 p-sm-4 h-100">
						<b-card-header class="p-0">
							<div class="d-flex justify-content-between align-items-center p-3 bg-light rounded-2">
								<div>
									<h5 class="mb-0">Professional</h5>
									<div class="badge bg-grad mb-0 rounded-pill">Recommended</div>
								</div>
								<div>
									<h4 class="text-success mb-0 plan-price">
										{{ currency }}{{ plan ? '840' : '59' }}</h4>
									<p class="small mb-0">/ per user</p>
								</div>
							</div>
						</b-card-header>

						<div class="position-relative my-3 text-center">
							<hr>
							<p class="small position-absolute top-50 start-50 translate-middle bg-body px-3">All plans included</p>
						</div>

						<b-card-body class="pt-0">
							<ul class="list-unstyled mt-2 mb-0">
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Up to 05 users monthly
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Free 5 host &amp; domain
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Custom infrastructure
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Access to all our room
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />24/7 dedicated Support
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconXOctagonFill class="text-danger me-2 icons-center" />Unlimited updates
								</li>
								<li class="h6 fw-light">
									<BIconXOctagonFill class="text-danger me-2 icons-center" />Landing pages &amp; Web widgets
								</li>
							</ul>
						</b-card-body>
						<b-card-footer class="text-center d-grid pb-0">
							<b-button type="button" variant="dark" class="mb-0">Get Started</b-button>
						</b-card-footer>
					</b-card>
				</b-col>

				<b-col md="6" xl="4">
					<b-card no-body class="border rounded-3 p-2 p-sm-4 h-100">
						<b-card-header class="p-0">
							<div class="d-flex justify-content-between align-items-center p-3 bg-light rounded-2">
								<div>
									<h5 class="mb-0">Premium</h5>
									<div class="badge text-bg-dark mb-0 rounded-pill">Best value</div>
								</div>
								<div>
									<h4 class="text-success mb-0 plan-price">
										{{ currency }}{{ plan ? '999' : '99' }}</h4>
									<p class="small mb-0">/ per user</p>
								</div>
							</div>
						</b-card-header>

						<div class="position-relative my-3 text-center">
							<hr>
							<p class="small position-absolute top-50 start-50 translate-middle bg-body px-3">All plans included</p>
						</div>

						<b-card-body class="pt-0">
							<ul class="list-unstyled mt-2 mb-0">
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Up to 05 users monthly
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Free 5 host &amp; domain
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Custom infrastructure
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Access to all our room
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />24/7 dedicated Support
								</li>
								<li class="mb-3 h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Unlimited updates
								</li>
								<li class="h6 fw-light">
									<BIconPatchCheckFill class="text-success me-2 icons-center" />Landing pages &amp; Web widgets
								</li>
							</ul>
						</b-card-body>
						<b-card-footer class="text-center d-grid pb-0">
							<b-button type="button" variant="light" class="mb-0">Get Started</b-button>
						</b-card-footer>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { currency } from '@/helpers/constants';
import { BIconPatchCheckFill, BIconXOctagonFill } from 'bootstrap-icons-vue';

const plan = ref(false);
</script>