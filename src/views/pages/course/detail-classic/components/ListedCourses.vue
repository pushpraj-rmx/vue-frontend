<template>
	<section class="pt-0">
		<b-container>
			<b-row class="mb-4">
				<h2 class="mb-0">Top Listed Courses</h2>
			</b-row>
			<b-row>
				<div class="arrow-round arrow-blur arrow-hover">
					<CustomTinySlider :settings="settings" id="course-detail-slider">
						<div class="pb-4" v-for="(item, idx) in topCourses" :key="idx">
							<CourseCard :item="item" />
						</div>
					</CustomTinySlider>
				</div>
			</b-row>
		</b-container>
	</section>
</template>
<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

import { topCourses } from '@/views/pages/course/detail-classic/components/data';
import CourseCard from '@/views/pages/course/detail-classic/components/CourseCard.vue';

const settings: TinySliderSettings = {
	arrowKeys: true,
	gutter: 30,
	autoplayButton: false,
	autoplayButtonOutput: false,
	nested: 'inner',
	mouseDrag: true,
	autoplay: false,
	controls: true,
	edgePadding: 2,

	items: 3,
	nav: false,
	responsive: {
		1: {
			items: 1,
		},
		576: {
			items: 1,
		},
		768: {
			items: 2,
		},
		992: {
			items: 2,
		},
		1200: {
			items: 3,
		},
	},
};
</script>