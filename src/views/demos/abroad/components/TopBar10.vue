<template>
	<StickyHeader class="navbar-light navbar-sticky">
		<nav class="navbar navbar-expand-xl">
			<b-container>
				<b-row class="d-flex w-100 mx-auto align-items-center">
					<b-col cols="3" md="4" xl="5" class="d-flex align-items-center ps-0">
						<button class="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
							aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
							v-b-toggle="'navbarCollapse'">
							<span class="navbar-toggler-animation">
								<span></span>
								<span></span>
								<span></span>
							</span>
							<span class="text-body small d-none d-sm-inline-block ms-2">Menu</span>
						</button>
						<b-collapse class="navbar-collapse" id="navbarCollapse">
							<ul class="navbar-nav navbar-nav-scroll">
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle ps-0 arrow-none d-flex justify-content-between align-items-center w-100 active"
										href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category
										<font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
									</a>
									<ul class="dropdown-menu" aria-labelledby="demoMenu">
										<li> <a class="dropdown-item" href="#">IELTS</a></li>
										<li> <a class="dropdown-item" href="#">GRE</a></li>
										<li> <a class="dropdown-item" href="#">Duolingo</a></li>
										<li> <a class="dropdown-item" href="#">Toefl</a></li>
									</ul>
								</li>

								<li class="nav-item"><a class="nav-link" href="#">Eduport business</a></li>
								<li class="nav-item"><a class="nav-link" href="#">My learning</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
							</ul>
						</b-collapse>
					</b-col>
					<b-col cols="6" md="4" xl="2" class="text-center d-flex">
						<router-link class="navbar-brand mx-auto" :to="{ name: 'demos.default' }">
							<img class="navbar-brand-item light-mode-item" :src="logo" alt="logo">
							<img class="navbar-brand-item dark-mode-item" :src="logolight" alt="logo">
						</router-link>
					</b-col>
					<b-col cols="3" md="4" xl="5" class="d-flex justify-content-end pe-0">
						<ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
							<DropDown is="li" custom-class="nav-item ms-2 position-relative overflow-visible">
								<a class="nav-link mb-0 stretched-link" href="#" role="button" data-bs-toggle="dropdown"
									aria-expanded="false" data-bs-auto-close="outside">
									<BIconCart2 class="fs-4" />
								</a>
								<span
									class="position-absolute top-0 start-100 translate-middle badge rounded-circle text-bg-success mt-2 ms-n3 smaller">5
									<span class="visually-hidden">unread messages</span>
								</span>
								<div
									class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
									<b-card no-body class="bg-transparent">
										<b-card-header class="bg-transparent border-bottom py-4">
											<h5 class="m-0">Cart items</h5>
										</b-card-header>
										<b-card-body class="p-0">
											<b-row class="p-3 g-2">
												<b-col cols="3">
													<img class="rounded-2" :src="book02" alt="avatar">
												</b-col>
												<b-col cols="9">
													<div class="d-flex justify-content-between">
														<h6 class="m-0">Angular 4 Tutorial in audio (Compact Disk)</h6>
														<a href="#" class="small text-primary-hover">
															<BIconXLg />
														</a>
													</div>
													<b-form class="choices-sm pt-2 col-4">
														<ChoicesSelect id="select-size" class="border-0 bg-transparent" data-search-enabled="false">
															<option>1</option>
															<option selected>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</ChoicesSelect>
													</b-form>
												</b-col>
											</b-row>

										</b-card-body>
										<b-card-footer
											class="bg-transparent border-top py-3 text-center d-flex justify-content-between position-relative">
											<a href="#" class="btn btn-sm btn-light mb-0">View Cart</a>
											<a href="#" class="btn btn-sm btn-success mb-0">Checkout</a>
										</b-card-footer>
									</b-card>
								</div>
							</DropDown>
							<DropDown is="li" custom-class="nav-item nav-search d-none d-sm-block">
								<a class="nav-link mb-0" role="button" href="#" id="navSearch" data-bs-toggle="dropdown"
									aria-expanded="false" data-bs-auto-close="outside" data-bs-display="static">
									<BIconSearch class="fs-4" />
								</a>
								<div class="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
									<b-form class="input-group">
										<b-form-input class="border-primary" type="search" placeholder="Search..." aria-label="Search" />
										<b-button variant="primary" class="m-0" type="submit">Search</b-button>
									</b-form>

									<ul class="list-group list-group-borderless p-2 small">
										<li class="list-group-item d-flex justify-content-between align-items-center">
											<span class="fw-bold">Recent Searches:</span>
											<b-button variant="link" size="sm" class="mb-0 px-0">Clear all</b-button>
										</li>
										<li class="list-group-item text-primary-hover text-truncate">
											<a href="#" class="text-body"><font-awesome-icon :icon="faClock" class="me-1" />Digital marketing
												course for Beginner</a>
										</li>
									</ul>
								</div>
							</DropDown>
							<li class="nav-item ms-2 d-none d-md-block">
								<a href="#" class="btn btn-sm btn-dark mb-0">Sign In</a>
							</li>
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</nav>
	</StickyHeader>
</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import DropDown from '@/components/DropDown.vue';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BIconXLg, BIconSearch, BIconCart2 } from 'bootstrap-icons-vue';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import logo from '@/assets/images/logo.svg';
import logolight from '@/assets/images/logo-light.svg';
import book02 from '@/assets/images/book/02.jpg';
</script>