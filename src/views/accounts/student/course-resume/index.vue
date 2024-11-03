<template>
	<StudentLayout>
		<b-col xl="9">
			<b-card no-body class="border">
				<b-card-header class="border-bottom">
					<b-card no-body>
						<b-row class="g-0">
							<b-col md="3">
								<img :src="courses01" class="rounded-2" alt="card img">
							</b-col>
							<b-col md="9">
								<b-card-body>
									<b-card-title tag="h3">
										<a href="#">
											The Complete Digital Marketing Course - 12 Courses in 1
										</a>
									</b-card-title>

									<ul class="list-inline mb-2">
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faClock" class="text-danger me-1" />
											6h 56m
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faTable" class="text-orange me-1" />
											82 lectures
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light">
											<font-awesome-icon :icon="faSignal" class="text-success me-1" />
											Beginner
										</li>
									</ul>

									<a href="#" class="btn btn-primary-soft btn-sm mb-0">Resume course</a>
								</b-card-body>
							</b-col>
						</b-row>
					</b-card>
				</b-card-header>
				<b-card-body>
					<h5>Course Curriculum</h5>
					<b-accordion class="accordion-icon accordion-bg-light" id="accordionExample2">
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6" body-class="mt-3"
							header-class="font-base" class="mb-3" visible>
							<template #title>
								<span class="mb-0">Introduction of Digital Marketing</span>
								<span class="small d-block mt-1">(3 Lectures)</span>
							</template>
							<div class="vstack gap-3">
								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">1/2 Completed</p>
										<h6 class="mb-1 text-end">80%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="80" />
									</b-progress>
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span
												class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-200px">Introduction</span>
										</div>
										<p class="mb-0 text-truncate">2m 10s</p>
									</div>

									<a class="btn btn-xs btn-warning mb-0 me-1" data-bs-toggle="collapse" href="#addnote-1" role="button"
										aria-expanded="false" aria-controls="addnote-1" v-b-toggle="'addnote-1'">
										<BIconPencilSquare class="fa-fw me-1" />
										Note
									</a>
									<a href="#" class="btn btn-xs btn-dark mb-0">Play again</a>

									<b-collapse id="addnote-1">
										<b-card no-body class="card-body p-0 mt-2">

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">5:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Describe SEO
														Engine</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">10:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Know about all
														marketing</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

										</b-card>
									</b-collapse>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> What is
												Digital Marketing What is Digital Marketing</span>
										</div>
										<p class="mb-0 text-truncate">15m 10s</p>
									</div>

									<a class="btn btn-xs btn-warning mb-0 me-1" data-bs-toggle="collapse" href="#addnote-2" role="button"
										aria-expanded="false" aria-controls="addnote-2" v-b-toggle="'addnote-2'">
										<BIconPencilSquare class="fa-fw me-1" />
										Note
									</a>
									<a href="#" class="btn btn-xs btn-dark mb-0">Play again</a>
									<b-collapse id="addnote-2">
										<b-card no-body class="card-body p-0 mt-2">
											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">5:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Describe SEO
														Engine</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">10:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Know about all
														marketing</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>
										</b-card>
									</b-collapse>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
											<font-awesome-icon :icon="faPlay" class="me-0" />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Type of
											Digital Marketing</span>
									</div>
									<p class="mb-0 text-truncate">18m 10s</p>
								</div>
							</div>
						</b-accordion-item>
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6" body-class="mt-3"
							header-class="font-base" class="mb-3">
							<template #title>
								<span class="mb-0">Customer Life cycle</span>
								<span class="small d-block mt-1">(3 Lectures)</span>
							</template>
							<div class="vstack gap-3">
								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">0/3 Completed</p>
										<h6 class="mb-1 text-end">0%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="0" />
									</b-progress>
								</div>
								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-sm-400px">Introduction</span>
										</div>
										<p class="mb-0 text-truncate">2m 10s</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> What is
												Digital Marketing What is Digital Marketing</span>
										</div>
										<p class="mb-0 text-truncate">15m 10s</p>
									</div>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
											@click="showModal = !showModal">
											<BIconLockFill />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Type of
											Digital Marketing</span>
									</div>
									<p class="mb-0 text-truncate">18m 10s</p>
								</div>
							</div>
						</b-accordion-item>
					</b-accordion>
				</b-card-body>
			</b-card>
			<b-card no-body class="border mt-4">
				<b-card-header class="border-bottom">
					<b-card no-body>
						<b-row class="g-0">
							<b-col md="3">
								<img :src="courses08" class="rounded-2" alt="card img">
							</b-col>
							<b-col md="9">
								<b-card-body>
									<b-card-title tag="h3"><a href="#">Sketch from A to Z: for app designer</a></b-card-title>
									<ul class="list-inline mb-2">
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faClock" class="text-danger me-1" />
											8h 56m
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faTable" class="text-orange me-1" />
											65 lectures
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light">
											<font-awesome-icon :icon="faSignal" class="text-success me-1" />
											All level
										</li>
									</ul>
									<a href="#" class="btn btn-primary-soft btn-sm mb-0">Resume course</a>
								</b-card-body>
							</b-col>
						</b-row>
					</b-card>
				</b-card-header>
				<b-card-body>
					<h5>Course Curriculum</h5>
					<b-accordion class="accordion-icon accordion-bg-light" id="accordionExample4">
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6"
							header-class="font-base" body-class="mt-3" class="mb-3">
							<template #title>
								<span class="mb-0">Introduction of Sketch</span>
								<span class="small d-block mt-1">(3 Lectures)</span>
							</template>
							<div class="vstack gap-3">

								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">1/3 Completed</p>
										<h6 class="mb-1 text-end">35%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="35" />
									</b-progress>
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span
												class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Introduction</span>
										</div>
										<p class="mb-0 text-truncate">2m 10s</p>
									</div>

									<a class="btn btn-xs btn-warning mb-0 me-1" href="#addnote-3" role="button" v-b-toggle="'addnote-3'">
										<BIconPencilSquare class="fa-fw me-1" />
										Note
									</a>
									<a href="#" class="btn btn-xs btn-dark mb-0">Play again</a>

									<b-collapse id="addnote-3">
										<b-card no-body class="card-body p-0 mt-2">

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">5:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">Describe SEO
														Engine</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">10:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">Know about all
														marketing</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

										</b-card>
									</b-collapse>
									<hr class="mb-0">
								</div>
								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> What is
												Digital Marketing What is Digital Marketing</span>
										</div>
										<p class="mb-0 text-truncate">15m 10s</p>
									</div>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
											<font-awesome-icon :icon="faPlay" class="me-0" />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Type of
											Digital Marketing</span>
									</div>
									<p class="mb-0 text-truncate">18m 10s</p>
								</div>
							</div>
						</b-accordion-item>
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6"
							header-class="font-base" body-class="mt-3" class="mb-3">
							<template #title>
								<span class="mb-0">YouTube Marketing</span>
								<span class="small d-block mt-1">(5 Lectures)</span>
							</template>
							<div class="vstack gap-3">
								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">0/5 Completed</p>
										<h6 class="mb-1 text-end">0%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="0" />
									</b-progress>
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Video
												Flow</span>
										</div>
										<p class="mb-0 text-truncate">25m 5s</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Webmaster
												Tool</span>
										</div>
										<p class="mb-0 text-truncate">15m 20s</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Featured
												Contents on Channel</span>
										</div>
										<p class="mb-0 text-truncate">32m 20s</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
												@click="showModal = !showModal">
												<BIconLockFill />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Managing
												Comments</span>
										</div>
										<p class="mb-0 text-truncate">20m 20s</p>
									</div>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
											@click="showModal = !showModal">
											<BIconLockFill />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Channel
											Analytics
										</span>
									</div>
									<p class="mb-0 text-truncate">18m 20s</p>
								</div>
							</div>
						</b-accordion-item>
					</b-accordion>
				</b-card-body>
			</b-card>
		</b-col>
	</StudentLayout>

	<b-modal v-model="showModal" size="lg" body-class="p-0" header-class="border-0" hide-footer centered>
		<div class="px-5 pb-5 position-relative overflow-hidden">
			<figure class="position-absolute bottom-0 end-0 mb-n4 me-n4 d-none d-sm-block">
				<img :src="element01" alt="element">
			</figure>
			<figure class="position-absolute top-0 end-0 z-index-n1 opacity-2">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="818.6px"
					height="235.1px" viewBox="0 0 818.6 235.1">
					<path class="fill-info"
						d="M735,226.3c-5.7,0.6-11.5,1.1-17.2,1.7c-66.2,6.8-134.7,13.7-192.6-16.6c-34.6-18.1-61.4-47.9-87.3-76.7 c-21.4-23.8-43.6-48.5-70.2-66.7c-53.2-36.4-121.6-44.8-175.1-48c-13.6-0.8-27.5-1.4-40.9-1.9c-46.9-1.9-95.4-3.9-141.2-16.5 C8.3,1.2,6.2,0.6,4.2,0H0c3.3,1,6.6,2,10,3c46,12.5,94.5,14.6,141.5,16.5c13.4,0.6,27.3,1.1,40.8,1.9 c53.4,3.2,121.5,11.5,174.5,47.7c26.5,18.1,48.6,42.7,70,66.5c26,28.9,52.9,58.8,87.7,76.9c58.3,30.5,127,23.5,193.3,16.7 c5.8-0.6,11.5-1.2,17.2-1.7c26.2-2.6,55-4.2,83.5-2.2v-1.2C790,222,761.2,223.7,735,226.3z">
					</path>
				</svg>
			</figure>
			<h2>Get Premium Course in <span class="text-success">{{currency}}800</span></h2>
			<p>Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or
				perfectly.</p>
			<b-row class="mb-3 item-collapse">
				<b-col sm="6">
					<ul class="list-group list-group-borderless">
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />High quality Curriculum
						</li>
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Tuition Assistance
						</li>
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Diploma course
						</li>
					</ul>
				</b-col>
				<b-col sm="6">
					<ul class="list-group list-group-borderless">
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Intermediate courses
						</li>
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Over 200 online courses
						</li>
					</ul>
				</b-col>
			</b-row>
			<a href="#" class="btn btn-lg btn-orange-soft">Purchase premium</a>
		</div>
		<div class="modal-footer d-block bg-info">
			<div class="d-sm-flex justify-content-sm-between align-items-center text-center text-sm-start">
				<ul class="list-inline mb-0 social-media-btn mb-2 mb-sm-0">
					<li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
						<a :class="`btn btn-sm mb-0 me-1 bg-white ${link.class}`" href="#">
							<font-awesome-icon :icon="link.icon" class="fa-fw" />
						</a>
					</li>
				</ul>
				<div>
					<p class="mb-1 small">
						<a href="#" class="text-white">
							<font-awesome-icon :icon="faEnvelope" class="fa-fw me-2" />
							example@gmail.com
						</a>
					</p>
					<p class="mb-0 small"><a href="#" class="text-white">
							<font-awesome-icon :icon="faHeadset" class="fa-fw me-2" />
							123-456-789
						</a>
					</p>
				</div>
			</div>
		</div>
	</b-modal>

</template>
<script setup lang="ts">
import { ref } from 'vue';

import StudentLayout from '@/layouts/StudentLayout.vue';
import { faPlay, faTable, faSignal, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BIconPencilSquare, BIconPlayFill, BIconTrashFill, BIconLockFill, BIconPatchCheckFill } from 'bootstrap-icons-vue';
import { currency } from '@/helpers/constants';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses08 from '@/assets/images/courses/4by3/08.jpg';
import element01 from '@/assets/images/element/01.svg';

const showModal = ref(false);

const socialLink = [
	{ icon: faFacebookF, class: 'text-facebook' },
	{ icon: faInstagram, class: 'text-instagram' },
	{ icon: faTwitter, class: 'text-twitter' },
	{ icon: faLinkedinIn, class: 'text-linkedin' },
];
</script>