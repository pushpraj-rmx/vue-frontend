<template>
	<InstructorLayout>
		<b-col xl="9">
			<b-card no-body class="border bg-transparent rounded-3 mb-0">
				<b-card-header class="bg-transparent border-bottom">
					<h3 class="card-header-title mb-0">Deactivate Account</h3>
				</b-card-header>
				<b-card-body>
					<h6>Before you go...</h6>
					<ul>
						<li>Take a backup of your data <a href="#">Here</a> </li>
						<li>If you delete your account, you will lose your all data.</li>
					</ul>

					<div class="form-check form-check-md my-4">
						<input class="form-check-input" type="checkbox" value="" id="deleteaccountCheck">
						<label class="form-check-label" for="deleteaccountCheck">Yes, I'd like to delete my account</label>
					</div>

					<a href="#" class="btn btn-success-soft mb-2 mb-sm-0 me-1">Keep my account</a>
					<a href="#" class="btn btn-danger mb-0">Delete my account</a>
				</b-card-body>
			</b-card>
		</b-col>
	</InstructorLayout>
</template>
<script setup lang="ts">
import InstructorLayout from '@/layouts/InstructorLayout.vue';
</script>