<template>
	<StudentLayout>
		<b-col xl="9">
			<b-card no-body class="bg-transparent border rounded-3">
				<b-card-header class="bg-transparent border-bottom">
					<h3 class="mb-0">My Courses List</h3>
				</b-card-header>
				<b-card-body>
					<b-row class="g-3 align-items-center justify-content-between mb-4">
						<b-col md="8">
							<b-form class="rounded position-relative">
								<b-form-input class="pe-5 bg-transparent" type="search" placeholder="Search" />
								<button
									class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
									type="submit">
									<font-awesome-icon :icon="faSearch" class="fs-6" />
								</button>
							</b-form>
						</b-col>

						<b-col md="3">
							<b-form>
								<ChoicesSelect id="sort-by" class="border-0 z-index-9 bg-transparent">
									<option value="">Sort by</option>
									<option>Free</option>
									<option>Newest</option>
									<option>Most popular</option>
									<option>Most Viewed</option>
								</ChoicesSelect>
							</b-form>
						</b-col>
					</b-row>

					<div class="table-responsive border-0">
						<table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
							<thead>
								<tr>
									<th scope="col" class="border-0 rounded-start">Course Title</th>
									<th scope="col" class="border-0">Total Lectures</th>
									<th scope="col" class="border-0">Completed Lecture</th>
									<th scope="col" class="border-0 rounded-end">Action</th>
								</tr>
							</thead>

							<tbody>
								<tr v-for="(item, idx) in myCourses" :key="idx">
									<td>
										<div class="d-flex align-items-center">
											<div class="w-100px">
												<img :src="item.image" class="rounded" alt="">
											</div>
											<div class="mb-0 ms-2">
												<h6><a href="#">{{ item.title }}</a></h6>
												<div class="overflow-hidden">
													<h6 class="mb-0 text-end">{{ item.progress }}%</h6>
													<b-progress class="progress-sm bg-primary bg-opacity-10">
														<b-progress-bar class="bg-primary aos" :value="item.progress" />
													</b-progress>
												</div>
											</div>
										</div>
									</td>

									<td>{{ item.lectures }}</td>

									<td>{{ item.completed }}</td>

									<td>
										<template v-if="item.progress === 100">
											<b-button variant="success" size="sm" class="me-1 mb-1 mb-x;-0 disabled icons-center">
												<BIconCheck class="me-1" />
												Complete
											</b-button>{{ ' ' }}
											<a href="#" class="btn btn-sm btn-light me-1 icons-center">
												<BIconArrowRepeat class="me-1" />
												Restart
											</a>
										</template>
										<template v-else>
											<a href="#" class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0 icons-center">
												<BIconPlayCircle class="me-1" />
												Continue
											</a>
										</template>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
						<p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
						<nav class="d-flex justify-content-center mb-0" aria-label="navigation">
							<ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
								<li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon :icon="faAngleLeft" /></a></li>
								<li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
								<li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
								<li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
								<li class="page-item mb-0"><a class="page-link" href="#"><font-awesome-icon :icon="faAngleRight" /></a></li>
							</ul>
						</nav>
					</div>
				</b-card-body>
			</b-card>
		</b-col>
	</StudentLayout>
</template>
<script setup lang="ts">
import StudentLayout from '@/layouts/StudentLayout.vue';
import { faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BIconPlayCircle, BIconCheck, BIconArrowRepeat } from 'bootstrap-icons-vue';
import { myCourses } from '@/views/accounts/student/dashboard/components/data';
</script>