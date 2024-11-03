<template>
	<section class="bg-blue py-7">
		<b-container>
			<b-row class="justify-content-lg-between">
				<b-col lg="8">
					<h1 class="text-white">The Complete Digital Marketing Course - 12 Courses in 1</h1>
					<p class="text-white">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private
						blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr
						feeling does chiefly cordial in do.</p>

					<ul class="list-inline mb-5">
						<li class="list-inline-item h6 me-4 mb-1 mb-sm-0 text-white"><span class="fw-light">By</span> Lori Stevens
						</li>
						<li class="list-inline-item me-4 mb-1 mb-sm-0">
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-1 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
								<li class="list-inline-item me-1 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
								<li class="list-inline-item me-1 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
								<li class="list-inline-item me-1 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
								<li class="list-inline-item me-1 small"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" /></li>
								<li class="list-inline-item ms-2 h6 text-white">4.5/5.0 </li>
								<li class="list-inline-item text-white ms-1">(1,586 reviews)</li>
							</ul>
						</li>
						<li class="list-inline-item h6 mb-0 text-white">
							<font-awesome-icon :icon="faGlobe" class="text-info me-1" />
							English
						</li>
					</ul>
				</b-col>
				<b-col lg="3">
					<h6 class="text-white lead fw-light mb-3">
						<font-awesome-icon :icon="faUserGraduate" class="text-orange me-1" />
						12,155 already enrolled
					</h6>
					<a href="#" class="btn btn-warning mb-3 w-100">Enroll Course</a>

					<div class="overflow-hidden mb-4">
						<h6 class="text-white">Your Progress</h6>
						<b-progress class="progress-sm bg-white bg-opacity-10 mb-1">
							<b-progress-bar class="bg-white aos" :value="25" />
						</b-progress>
						<small class="text-white">08 of 135 Completed</small>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>
<script setup lang="ts">
import { faStar, faStarHalfAlt, faGlobe, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
</script>