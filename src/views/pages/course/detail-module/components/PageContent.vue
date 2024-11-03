<template>
	<section class="pt-0">
		<b-container>
			<b-row>
				<b-col cols="12">
					<b-card no-body class="shadow rounded-2 p-0 mt-n5">
						<b-card-header class="border-bottom px-4 pt-3 pb-0">
							<ul class="nav nav-bottom-line py-0" id="course-pills-tab">
								<li class="nav-item me-2 me-sm-4">
									<button class="nav-link mb-2 mb-md-0" :class="show === 1 && 'active'" type="button" @click="show = 1">
										Course Materials
									</button>
								</li>
								<li class="nav-item me-2 me-sm-4">
									<button class="nav-link mb-2 mb-md-0" :class="show === 2 && 'active'" type="button" @click="show = 2">
										Notes
									</button>
								</li>
								<li class="nav-item me-2 me-sm-4">
									<button class="nav-link mb-2 mb-md-0" :class="show === 3 && 'active'" type="button" @click="show = 3">
										Discussion
									</button>
								</li>
							</ul>
						</b-card-header>

						<b-card-body class="p-sm-4">
							<div class="tab-content" id="course-pills-tabContent">
								<div class="tab-pane fade" :class="show === 1 && 'show active'" id="course-pills-1" role="tabpanel"
									aria-labelledby="course-pills-tab-1">
									<b-accordion class="accordion-icon accordion-border" id="accordionExample2">
										<template v-for="(item, idx) in courseMaterialData" :key="idx">
											<b-accordion-item button-class="fw-bold rounded d-flex" header-class="font-base" header-tag="h6"
												body-class="mt-3" class="mb-3" :visible="!idx">
												<template #title>
													Week {{ idx + 1 }} -
													<span class="small ms-2">{{ item.date }}</span>
													<span class="small ms-0 ms-sm-2 d-none d-sm-block">({{ item.lectures.length }} Items)</span>
													<span class="text-secondary ms-auto pe-4" v-b-tooltip.hover.top="'Mark as completed'">
														<BIconCheckCircleFill />
													</span>
												</template>

												<template v-for="(lecture, idx) in item.lectures" :key="idx">
													<div class="d-flex justify-content-between align-items-center">
														<div class="position-relative d-flex align-items-center">
															<div class="d-flex align-items-center">
																<a href="#" class="icon-md mb-0 position-static flex-shrink-0 text-body"
																	v-if="lecture.icon" @click="showModal = !showModal">
																	<font-awesome-icon :icon="lecture.icon" class="fa-fw fs-5" />
																</a>

																<CustomGLightbox link="https://www.youtube.com/embed/tXHviS-4ygo"
																	class="icon-md position-relative" v-else>
																	<img :src="courses01" class="rounded-1" alt="">
																	<small class="text-white position-absolute top-50 start-50 translate-middle">
																		<font-awesome-icon :icon="faPlay" class="me-0" />
																	</small>
																</CustomGLightbox>

																<div class="ms-3">
																	<a href="#"
																		class="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
																		{{ lecture.title }}
																	</a>
																	<ul class="nav nav-divider small mb-0">
																		<li class="nav-item" v-for="(feat, idx) in lecture.features" :key="idx">{{ feat }}
																		</li>
																		<li class="nav-item" v-if="lecture.isSubmitted">
																			<a href="#" class="text-success">Submitted</a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div class="hstack gap-2 align-items-center">
															<a class="btn btn-sm btn-primary mb-0" data-bs-toggle="collapse" href="#addnote-1"
																role="button" aria-expanded="false" v-if="lecture.isResume">
																<span class="d-none d-sm-block">Resume</span>
																<span class="d-sm-none">
																	<BIconPlayFill />
																</span>
															</a>

															<a href="#" class="p-2 mb-0"
																:class="lecture.isSubmitted ? 'text-success' : 'text-secondary'" v-b-tooltip.hover.top="'Completed'">
																<BIconCheckCircleFill />
															</a>
														</div>
													</div>
													<hr v-if="!(item.lectures.length - 1 === idx)">
												</template>
											</b-accordion-item>
										</template>
									</b-accordion>
								</div>

								<div class="tab-pane fade" :class="show === 2 && 'show active'" id="course-pills-2" role="tabpanel"
									aria-labelledby="course-pills-tab-2">
									<b-card no-body>
										<b-card-header class="border-bottom p-0 pb-3">
											<div class="d-sm-flex justify-content-between align-items-center">
												<h4 class="mb-0">All Notes</h4>
												<b-form class="col-sm-6 col-lg-3 bg-light-input">
													<ChoicesSelect id="sort-by" class="z-index-9">
														<option value="">Sort by</option>
														<option>All</option>
														<option>Introductions</option>
														<option>What is Digital Marketing</option>
														<option>Most Viewed</option>
													</ChoicesSelect>
												</b-form>
											</div>
										</b-card-header>

										<b-card-body class="p-0 pt-3">
											<template v-for="(item, idx) in allNotesData" :key="idx">
												<b-row class="g-4">
													<b-col sm="2" xl="1">
														<img :src="courses01" class="rounded flex-shrink-0" alt="">
													</b-col>
													<b-col sm="10" xl="11">
														<h5>{{ item.title }}</h5>
														<p>{{ item.description }}</p>
														<div class="hstack gap-3 flex-wrap">
															<a href="#" class="btn btn-sm btn-primary mb-0">
																<BIconPlayFill class="me-2" />Play
															</a>
															<a href="#" class="text-success mb-0">
																<BIconPencilSquare class="me-2" />Edit
															</a>
															<a href="#" class="text-danger mb-0">
																<BIconTrash class="me-2" />Delete
															</a>
														</div>
													</b-col>
												</b-row>
												<hr v-if="!idx">
											</template>
										</b-card-body>
									</b-card>
								</div>

								<div class="tab-pane fade" :class="show === 3 && 'show active'" id="course-pills-3" role="tabpanel"
									aria-labelledby="course-pills-tab-3">
									<b-card no-body>
										<b-card-header class="border-bottom p-0 pb-3">
											<h4 class="mb-3">Discussion</h4>
											<b-form class="row g-4">
												<b-col sm="6" lg="3">
													<div class="position-relative">
														<b-form-input class="pe-5 bg-transparent" type="search" placeholder="Search" />
														<button
															class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
															type="submit">
															<font-awesome-icon :icon="faSearch" class="fs-6" />
														</button>
													</div>
												</b-col>

												<b-col sm="6" lg="3">
													<ChoicesSelect id="select-week">
														<option value="">Select item</option>
														<option>Week 1</option>
														<option>Week 2</option>
														<option>Week 3</option>
														<option>Week 4</option>
														<option>Week 5</option>
														<option>Week 6</option>
													</ChoicesSelect>
												</b-col>

												<b-col sm="6" lg="3">
													<ChoicesSelect id="select-filter">
														<option value="">Filter</option>
														<option>All</option>
														<option>Answered</option>
														<option>Unanswered</option>
													</ChoicesSelect>
												</b-col>

												<b-col sm="6" lg="3">
													<a href="#" class="btn btn-primary-soft mb-0 w-100" data-bs-toggle="modal"
														data-bs-target="#modalCreatePost" @click="showModal1 = !showModal1">Create Post</a>
												</b-col>
											</b-form>
										</b-card-header>

										<b-card-body class="p-0 pt-3">
											<div class="vstack gap-3">
												<template v-for="(item, idx) in discussData" :key="idx">
													<div :class="!idx && 'border-bottom'">
														<div class="d-sm-flex justify-content-sm-between mb-3">
															<div class="d-flex align-items-center">
																<div class="avatar avatar-sm flex-shrink-0">
																	<img class="avatar-img rounded-circle" :src="item.image" alt="avatar">
																</div>
																<div class="ms-2">
																	<h6 class="mb-0"><a href="#">{{ item.name }}</a></h6>
																	<small>posted {{ timeSince(item.createdAt) }} </small>
																</div>
															</div>
														</div>

														<h5>{{ item.title }}</h5>
														<p class="mb-2">{{ item.comment }}</p>

														<ul class="nav nav-divider pb-3 small">
															<li class="nav-item">
																<a class="text-primary-hover" href="#">
																	<BIconHandThumbsUp class="me-2" />Like (3)
																</a>
															</li>
															<li class="nav-item">
																<a class="text-primary-hover" href="#">
																	<BIconChatLeft class="me-2" />Reply
																</a>
															</li>
														</ul>
													</div>
												</template>
											</div>
										</b-card-body>
									</b-card>
								</div>
							</div>
						</b-card-body>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</section>

	<b-modal v-model="showModal" title="Lecture Slides" ok-only ok-title="Mark as complete" centered>
		<h6 class="lead fw-bold">You can download or view this slide as:</h6>
		<p>
			These are the lecture slides from this unit. It would be helpful to take a look at them prior to taking the quiz.
		</p>
		<div class="hstack gap-3 flex-wrap">
			<a href="#" class="btn btn-lg btn-light">
				<div class="fs-4">
					<BIconFileEarmarkPdf />
				</div>
				<span class="fs-6 mb-0">Lecture 5 pdf</span>
			</a>

			<a href="#" class="btn btn-lg btn-light">
				<div class="fs-4">
					<BIconFileEarmarkWord />
				</div>
				<span class="fs-6 mb-0">Lecture 5 docs</span>
			</a>
		</div>
	</b-modal>

	<b-modal v-model="showModal1" title="Create Post" ok-only ok-title="Post" ok-variant="success-soft" centered>
		<b-form>
			<div class="mb-3">
				<b-form-group label="title">
					<b-form-input type="text" placeholder="Add title here" />
				</b-form-group>
			</div>

			<div class="mb-3">
				<b-form-group label="Description">
					<b-form-textarea rows="4" placeholder="Description here" />
				</b-form-group>
			</div>

			<div>
				<b-form-group label="Select Course Materials">
					<ChoicesSelect id="select-week-1">
						<option value="">Select item</option>
						<option>Week 1</option>
						<option>Week 2</option>
						<option>Week 3</option>
						<option>Week 4</option>
						<option>Week 5</option>
						<option>Week 6</option>
					</ChoicesSelect>
				</b-form-group>
			</div>

		</b-form>
	</b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { timeSince } from '@/helpers/date';
import { discussData, allNotesData, courseMaterialData } from '@/views/pages/course/detail-module/components/data';
import CustomGLightbox from '@/components/CustomGLightbox.vue';

import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BIconCheckCircleFill, BIconPlayFill, BIconPencilSquare, BIconTrash, BIconHandThumbsUp, BIconChatLeft, BIconFileEarmarkPdf, BIconFileEarmarkWord } from 'bootstrap-icons-vue';
import courses01 from '@/assets/images/courses/4by3/01.jpg';
const show = ref(1);
const showModal = ref(false);
const showModal1 = ref(false);
</script>