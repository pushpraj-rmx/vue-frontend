<template>
	<section class="pt-0">
		<b-container>
			<b-row>
				<b-col cols="12">
					<b-card no-body class="overflow-hidden h-400px h-xl-600px rounded-3"
						:style="`background-image:url(${bg08}); background-position: center left; background-size: cover;`">
						<div class="bg-overlay bg-dark opacity-6"></div>
						<div class="card-img-overlay d-flex align-items-start flex-column">
							<div class="w-100 mb-auto d-flex justify-content-end icons-center">
								<b-button :variant="null" size="sm" class="btn-white mb-0">
									<BIconShare /> Share
								</b-button>
							</div>
							<div class="w-100 mt-auto">
								<b-row class="p-0 p-sm-3">
									<b-col cols="11" lg="7">
										<h1 class="text-white">Host local tours to familiarize students.</h1>
										<p class="text-white mb-0">Supposing so be resolving breakfast am or perfectly. It drew a hill from
											me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all
											had supported.</p>
									</b-col>
								</b-row>
							</div>
						</div>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>
<script setup lang="ts">
import bg08 from '@/assets/images/bg/08.jpg';
import { BIconShare } from 'bootstrap-icons-vue';
</script>