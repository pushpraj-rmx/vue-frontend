<template>
	<StudentLayout>
		<b-col xl="9">
			<b-card no-body class="card-body bg-transparent border rounded-3">
				<b-row class="g-4">
					<b-col cols="6" lg="3">
						<span>Active Plan</span>
						<h4>Basic</h4>
					</b-col>
					<b-col cols="6" lg="3">
						<span>Monthly limit</span>
						<h4>Unlimited</h4>
					</b-col>
					<b-col cols="6" lg="3">
						<span>Cost</span>
						<h4>{{ currency }}99/Month</h4>
					</b-col>
					<b-col cols="6" lg="3">
						<span>Renewal Date</span>
						<h4>Feb 17, 2023</h4>
					</b-col>
				</b-row>

				<div class="overflow-hidden my-4">
					<h6 class="mb-0">85%</h6>
					<b-progress class="progress-sm bg-primary bg-opacity-10">
						<b-progress-bar class="bg-primary aos" :value="85" />
					</b-progress>
				</div>

				<div class="d-sm-flex justify-content-sm-between align-items-center">
					<div>
						<div class="d-sm-flex">
							<div class="form-check form-switch form-check-md">
								<input class="form-check-input" type="checkbox" id="checkPrivacy1" checked>
								<label class="form-check-label" for="checkPrivacy1">Auto Renewal</label>
							</div>
						</div>
						<p class="mb-0 small">Your plan will automatically renew on: 02/17/2023. Payment Amount: USD250</p>
					</div>
					<div class="mt-2 mt-sm-0">
						<b-button type="button" :variant="null" size="sm" class="btn-danger-soft me-2 mb-0">Cancel plan</b-button>{{ ' ' }}
						<a href="#" class="btn btn-sm btn-success mb-0">Upgrade plan</a>
					</div>
				</div>

				<hr>

				<b-row>
					<h6 class="mb-3">The plan includes</h6>
					<b-col md="6">
						<ul class="list-unstyled">
							<li class="mb-3 h6 fw-light d-flex align-items-center">
								<BIconPatchCheckFill class="text-success me-2" />Up to 05 users monthly
							</li>
							<li class="mb-3 h6 fw-light d-flex align-items-center">
								<BIconPatchCheckFill class="text-success me-2" />Free 5 host &amp; domain
							</li>
							<li class="mb-3 h6 fw-light d-flex align-items-center">
								<BIconPatchCheckFill class="text-success me-2" />Custom infrastructure
							</li>
							<li class="mb-3 h6 fw-light d-flex align-items-center">
								<BIconPatchCheckFill class="text-success me-2" />Access to all our room
							</li>
						</ul>
					</b-col>

					<b-col md="6">
						<ul class="list-unstyled">
							<li class="mb-3 h6 fw-light d-flex align-items-center">
								<BIconPatchCheckFill class="text-success me-2" />24/7 dedicated Support
							</li>
							<li class="mb-3 h6 fw-light d-flex align-items-center">
								<BIconPatchCheckFill class="text-success me-2" />Unlimited updates
							</li>
							<li class="h6 fw-light d-flex align-items-center">
								<BIconPatchCheckFill class="text-success me-2" />Landing pages &amp; Web widgets
							</li>
						</ul>
					</b-col>
				</b-row>
			</b-card>
		</b-col>
	</StudentLayout>
</template>
<script setup lang="ts">
import StudentLayout from '@/layouts/StudentLayout.vue';
import { currency } from '@/helpers/constants';
import { BIconPatchCheckFill } from 'bootstrap-icons-vue';
</script>