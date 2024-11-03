<template>
	<section class="pb-0 py-lg-5">
		<b-container>
			<b-row>
				<DetailTabs />
				<b-col lg="4" class="pt-5 pt-lg-0">
					<b-row class="mb-5 mb-lg-0">
						<b-col md="6" lg="12">
							<b-card no-body class="shadow p-2 mb-4 z-index-9">
								<div class="overflow-hidden rounded-3">
									<img :src="courses01" class="card-img" alt="course img">
									<div class="bg-overlay bg-dark opacity-6"></div>
									<div class="card-img-overlay d-flex align-items-start flex-column p-3">
										<div class="m-auto">
											<CustomGLightbox link="https://www.youtube.com/embed/tXHviS-4ygo"
												class="btn btn-lg text-danger btn-round btn-white-shadow mb-0">
												<font-awesome-icon :icon="faPlay" />
											</CustomGLightbox>
										</div>
									</div>
								</div>

								<b-card-body class="px-3">
									<div class="d-flex justify-content-between align-items-center">
										<div>
											<div class="d-flex align-items-center">
												<h3 class="fw-bold mb-0 me-2">{{ currency }}150</h3>
												<span class="text-decoration-line-through mb-0 me-2">{{ currency }}350</span>
												<span class="badge text-bg-orange mb-0">60% off</span>
											</div>
											<p class="mb-0 text-danger">
												<font-awesome-icon :icon="faStopwatch" class="me-2" />
												5 days left at this price
											</p>
										</div>

										<b-dropdown end variant="link" toggle-class="btn btn-sm btn-light rounded small"
											menu-class="dropdown-w-sm dropdown-menu-end shadow rounded" no-caret>
											<template #button-content>
												<font-awesome-icon :icon="faShareAlt" class="fa-fw" />
											</template>
											<b-dropdown-item href="#">
												<font-awesome-icon :icon="faTwitterSquare" class="me-2" />
													Twitter
												</b-dropdown-item>
											<b-dropdown-item href="#">
												<font-awesome-icon :icon="faFacebookSquare" class="me-2" />
													Facebook
												</b-dropdown-item>
											<b-dropdown-item href="#">
												<font-awesome-icon :icon="faLinkedinIn" class="me-2" />
													LinkedIn
												</b-dropdown-item>
											<b-dropdown-item href="#">
												<font-awesome-icon :icon="faCopy" class="me-2" />
												Copy link
											</b-dropdown-item>
										</b-dropdown>
									</div>

									<div class="mt-3 d-sm-flex justify-content-sm-between">
										<a href="#" class="btn btn-outline-primary mb-0">Free trial</a>{{ ' ' }}
										<a href="#" class="btn btn-success mb-0">Buy course</a>
									</div>
								</b-card-body>
							</b-card>

							<b-card no-body class="card-body shadow p-4 mb-4">
								<h4 class="mb-3">This course includes</h4>
								<ul class="list-group list-group-borderless">
									<li class="list-group-item d-flex justify-content-between align-items-center">
										<span class="h6 fw-light mb-0">
											<font-awesome-icon :icon="faBookOpen" class="fa-fw text-primary" />
											Lectures
										</span>
										<span>30</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										<span class="h6 fw-light mb-0">
											<font-awesome-icon :icon="faClock" class="fa-fw text-primary" />
											Duration
										</span>
										<span>4h 50m</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										<span class="h6 fw-light mb-0">
											<font-awesome-icon :icon="faSignal" class="fa-fw text-primary" />
											Skills
										</span>
										<span>Beginner</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										<span class="h6 fw-light mb-0">
											<font-awesome-icon :icon="faGlobe" class="fa-fw text-primary" />
											Language
										</span>
										<span>English</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										<span class="h6 fw-light mb-0">
											<font-awesome-icon :icon="faUserClock" class="fa-fw text-primary" />
											Deadline
										</span>
										<span>Nov 30 2021</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										<span class="h6 fw-light mb-0">
											<font-awesome-icon :icon="faMedal" class="fa-fw text-primary" />
											Certificate
										</span>
										<span>Yes</span>
									</li>
								</ul>
							</b-card>
						</b-col>

						<b-col md="6" lg="12">
							<b-card no-body class="card-body shadow p-4 mb-4">
								<h4 class="mb-3">Recently Viewed</h4>
								<b-row class="gx-3 mb-3">
									<b-col cols="4">
										<img class="rounded" :src="courses21" alt="">
									</b-col>
									<b-col cols="8">
										<h6 class="mb-0"><a href="#">Fundamentals of Business Analysis</a></h6>
										<ul class="list-group list-group-borderless mt-1 d-flex justify-content-between">
											<li class="list-group-item px-0 d-flex justify-content-between">
												<span class="text-success">{{ currency }}130</span>
												<span class="h6 fw-light">4.5
													<font-awesome-icon :icon="faStar" class="text-warning ms-1" />
												</span>
											</li>
										</ul>
									</b-col>
								</b-row>

								<b-row class="gx-3">
									<b-col cols="4">
										<img class="rounded" :src="courses18" alt="">
									</b-col>
									<b-col cols="8">
										<h6 class="mb-0"><a href="#">The Complete Video Production Bootcamp</a></h6>
										<ul class="list-group list-group-borderless mt-1 d-flex justify-content-between">
											<li class="list-group-item px-0 d-flex justify-content-between">
												<span class="text-success">{{ currency }}150</span>
												<span class="h6 fw-light">4.0
													<font-awesome-icon :icon="faStar" class="text-warning ms-1" />
												</span>
											</li>
										</ul>
									</b-col>
								</b-row>
							</b-card>

							<b-card no-body class="card-body shadow p-4">
								<h4 class="mb-3">Popular Tags</h4>
								<ul class="list-inline mb-0">
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">blog</a> </li>
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">business</a> </li>
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">theme</a> </li>
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">data science</a> </li>
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">web development</a></li>
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">tips</a> </li>
									<li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">machine learning</a>
									</li>
								</ul>
							</b-card>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';
import CustomGLightbox from '@/components/CustomGLightbox.vue';

import DetailTabs from '@/views/pages/course/detail-classic/components/DetailTabs.vue';
import { faShareAlt, faPlay, faStopwatch, faCopy, faBookOpen, faClock, faSignal, faGlobe, faUserClock, faMedal, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses18 from '@/assets/images/courses/4by3/18.jpg';
import courses21 from '@/assets/images/courses/4by3/21.jpg';
</script>