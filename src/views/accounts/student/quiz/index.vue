<template>
	<StudentLayout>
		<b-col xl="9">
			<b-card no-body class="border">
				<b-card-header class="border-bottom">
					<b-row>
						<b-col cols="12">
							<b-card no-body>
								<b-row class="g-0">
									<b-col md="2">
										<img :src="courses01" class="rounded-2" alt="card img">
									</b-col>
									<b-col md="10">
										<b-card-body>
											<b-card-title tag="h3">
												<a href="#">The Complete Digital Marketing Course - 12 Courses in 1</a>
											</b-card-title>
										</b-card-body>
									</b-col>
								</b-row>
							</b-card>
						</b-col>
					</b-row>
				</b-card-header>
				<b-card-body>
					<b-card no-body class="bg-transparent border rounded-3 mb-1">
						<div id="stepper" ref="stepperRef" class="bs-stepper stepper-outline">
							<b-card-header class="bg-light border-bottom px-lg-5">
								<div class="bs-stepper-header" role="tablist">
									<div class="step" data-target="#step-1">
										<div class="d-grid text-center align-items-center">
											<button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1"
												aria-controls="step-1">
												<span class="bs-stepper-circle">1</span>
											</button>
										</div>
									</div>
									<div class="line"></div>

									<div class="step" data-target="#step-2">
										<div class="d-grid text-center align-items-center">
											<button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2"
												aria-controls="step-2">
												<span class="bs-stepper-circle">2</span>
											</button>
										</div>
									</div>
									<div class="line"></div>

									<div class="step" data-target="#step-3">
										<div class="d-grid text-center align-items-center">
											<button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3"
												aria-controls="step-3">
												<span class="bs-stepper-circle">3</span>
											</button>
										</div>
									</div>
									<div class="line"></div>

									<div class="step" data-target="#step-4">
										<div class="d-grid text-center align-items-center">
											<button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4"
												aria-controls="step-4">
												<span class="bs-stepper-circle">4</span>
											</button>
										</div>
									</div>
								</div>
							</b-card-header>
							<b-card-body>

								<h6 class="text-danger text-end mb-0 flex-centered justify-content-end">
									<BIconClockHistory class="me-2" />Time Left: 00:01:30
								</h6>

								<div class="bs-stepper-content">
									<b-form>

										<div id="step-1" role="tabpanel" class="content fade" aria-labelledby="steppertrigger1">
											<h4>How do you protect your business against cyber-crime?</h4>

											<hr>
											<div class="vstack gap-2">
												<div>
													<input type="radio" class="btn-check" name="ques" id="option1">
													<label class="btn btn-outline-primary w-100" for="option1">We have cybersecurity insurance
														coverage</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option2">
													<label class="btn btn-outline-primary w-100" for="option2">Our dedicated staff will protect
														us</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option3">
													<label class="btn btn-outline-primary w-100" for="option3">We give regular training for best
														practices</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option4">
													<label class="btn btn-outline-primary w-100" for="option4">Third-party vendor
														protection</label>
												</div>
											</div>

											<div class="d-flex justify-content-center mt-3">
												<b-button type="button" variant="primary" class="next-btn mb-0" @click="stepperInstance?.next()">Next question</b-button>
											</div>

										</div>

										<div id="step-2" role="tabpanel" class="content fade" aria-labelledby="steppertrigger2">
											<h4>What is SEO?</h4>

											<hr>
											<div class="vstack gap-2">
												<div>
													<input type="radio" class="btn-check" name="ques" id="option11">
													<label class="btn btn-outline-primary w-100" for="option11">We have cybersecurity insurance
														coverage</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option22">
													<label class="btn btn-outline-primary w-100" for="option22">Our dedicated staff will protect
														us</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option33">
													<label class="btn btn-outline-primary w-100" for="option33">We give regular training for best
														practices</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option44">
													<label class="btn btn-outline-primary w-100" for="option44">Third-party vendor
														protection</label>
												</div>
											</div>

											<div class="d-flex justify-content-center mt-3">
												<b-button type="button" variant="primary" class="next-btn mb-0" @click="stepperInstance?.next()">Next question</b-button>
											</div>
										</div>

										<div id="step-3" role="tabpanel" class="content fade" aria-labelledby="steppertrigger3">
											<h4>Who should join this course?</h4>

											<hr>
											<div class="vstack gap-2">
												<div>
													<input type="radio" class="btn-check" name="ques" id="option111">
													<label class="btn btn-outline-primary w-100" for="option111">We have cybersecurity insurance
														coverage</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option222">
													<label class="btn btn-outline-primary w-100" for="option222">Our dedicated staff will protect
														us</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option333">
													<label class="btn btn-outline-primary w-100" for="option333">We give regular training for best
														practices</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option444">
													<label class="btn btn-outline-primary w-100" for="option444">Third-party vendor
														protection</label>
												</div>
											</div>

											<div class="d-flex justify-content-center mt-3">
												<b-button type="button" variant="primary" class="next-btn mb-0" @click="stepperInstance?.next()">Next question</b-button>
											</div>

										</div>

										<div id="step-4" role="tabpanel" class="content fade" aria-labelledby="steppertrigger4">
											<h4>What are the T&C for this program?</h4>

											<hr>
											<div class="vstack gap-2">
												<div>
													<input type="radio" class="btn-check" name="ques" id="option1111">
													<label class="btn btn-outline-primary w-100" for="option1111">We have cybersecurity insurance
														coverage</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option2222">
													<label class="btn btn-outline-primary w-100" for="option2222">Our dedicated staff will protect
														us</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option3333">
													<label class="btn btn-outline-primary w-100" for="option3333">We give regular training for
														best practices</label>
												</div>
												<div>
													<input type="radio" class="btn-check" name="ques" id="option4444">
													<label class="btn btn-outline-primary w-100" for="option4444">Third-party vendor
														protection</label>
												</div>
											</div>

											<div class="d-flex justify-content-center mt-3">
												<b-button type="button" variant="success" class="next-btn mb-0">View result</b-button>
											</div>

										</div>

									</b-form>
								</div>
							</b-card-body>
						</div>
					</b-card>
				</b-card-body>
			</b-card>
		</b-col>
	</StudentLayout>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import StudentLayout from '@/layouts/StudentLayout.vue';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import { BIconClockHistory } from 'bootstrap-icons-vue';

import Stepper from 'bs-stepper';
import type { default as StepperType } from 'bs-stepper';

const stepperRef = ref<HTMLElement | null>(null);

let stepperInstance = ref<StepperType>();

onMounted(() => {
	if (stepperRef.value) {
		stepperInstance.value = new Stepper(stepperRef.value, {
			linear: false,
			animation: true
		});
	}
});
</script>