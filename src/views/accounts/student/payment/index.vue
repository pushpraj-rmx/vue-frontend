<template>
	<StudentLayout>
		<b-col xl="9">
			<b-card no-body class="bg-transparent border rounded-3 mb-4 z-index-9">
				<b-card-header class="bg-transparent d-sm-flex justify-content-sm-between align-items-center border-bottom">
					<h3 class="mb-2 mb-sm-0">Payment methods</h3>
					<a href="#" class="btn btn-sm btn-primary-soft mb-0" @click="showModal = !showModal">Add
						new card</a>
				</b-card-header>

				<b-card-body>
					<b-accordion class="accordion-circle" id="accordioncircle">
						<b-accordion-item title="Credit or Debit Card" button-class="rounded" header-tag="h6" class="mb-3" visible>
							<b-form class="row g-3">
								<b-col cols="12">
									<b-form-group>
										<template #label>
											Card Number <span class="text-danger">*</span>
										</template>
										<div class="position-relative">
											<b-form-input type="text" placeholder="xxxx xxxx xxxx xxxx" />
											<img :src="visa"
												class="w-40px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block" alt="">
										</div>
									</b-form-group>
								</b-col>
								<b-col md="6">
									<b-form-group>
										<template #label>
											Expiration date <span class="text-danger">*</span>
										</template>
										<div class="input-group">
											<b-form-input type="text" maxlength="2" placeholder="Month" />
											<b-form-input type="text" maxlength="4" placeholder="Year" />
										</div>
									</b-form-group>
								</b-col>
								<b-col md="6">
									<b-form-group>
										<template #label>
											CVV / CVC <span class="text-danger">*</span>
										</template>
										<b-form-input type="text" maxlength="3" placeholder="xxx" />
									</b-form-group>
								</b-col>
								<b-col cols="12">
									<b-form-group>
										<template #label>
											Name on Card <span class="text-danger">*</span>
										</template>
										<b-form-input type="text" placeholder="Enter card holder name" />
									</b-form-group>
								</b-col>
							</b-form>
						</b-accordion-item>
						<b-accordion-item title="Pay with Net Banking" button-class="rounded" header-tag="h6" class="mb-3">
							<b-form class="row text-start g-3">
								<p class="mb-1">In order to complete your transaction, we will transfer you over to
									Eduport secure servers.</p>
								<p class="my-0">Select your bank from the drop-down list and click proceed to continue
									with your payment.</p>
								<b-col md="6">
									<ChoicesSelect id="select-bank" class="form-select-sm border-0">
										<option value="">Please choose one</option>
										<option>Bank of America</option>
										<option>Bank of India</option>
										<option>Bank of London</option>
									</ChoicesSelect>
								</b-col>
							</b-form>
						</b-accordion-item>
					</b-accordion>
				</b-card-body>
			</b-card>

			<b-card no-body class="bg-transparent border rounded-3 mb-4">
				<b-card-header class="bg-transparent d-sm-flex justify-content-sm-between align-items-center border-bottom">
					<h3 class="mb-2 mb-sm-0">Billing address</h3>
					<a href="#" class="btn btn-sm btn-primary-soft mb-0">Add new address</a>
				</b-card-header>

				<b-card-body>
					<div
						class="bg-body border border-1 p-3 rounded-3 d-sm-flex justify-content-sm-between align-items-center mb-4">
						<div class="form-check">
							<input class="form-check-input mb-1" type="radio" name="address" id="address1" checked>
							<label class="form-check-label mb-0 h5" for="address1">Address-1</label>
							<p class="mb-0">2492 Centennial NW, Acworth, GA, 30102</p>
						</div>
						<div>
							<a href="#" class="btn btn-sm btn-success mb-0">Edit</a>{{ ' ' }}
							<b-button variant="danger" size="sm" class="mb-0">Delete</b-button>
						</div>
					</div>

					<div
						class="bg-body border border-1 p-3 rounded-3 d-sm-flex justify-content-sm-between align-items-center mb-4">
						<div class="form-check">
							<input class="form-check-input mb-1" type="radio" name="address" id="address2">
							<label class="form-check-label mb-0 h5" for="address2">Address-2</label>
							<p class="mb-0">2002 Horton Ford Rd, Eidson, TN, 37731</p>
						</div>

						<div>
							<a href="#" class="btn btn-sm btn-success mb-0">Edit</a>{{ ' ' }}
							<b-button variant="danger" size="sm" class="mb-0">Delete</b-button>
						</div>

					</div>
				</b-card-body>
			</b-card>

			<b-card no-body class="bg-transparent border rounded-3">
				<b-card-header class="bg-transparent border-bottom">
					<h3 class="mb-0">Billing history</h3>
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
									<option>Newest</option>
									<option>Oldest</option>
								</ChoicesSelect>
							</b-form>
						</b-col>
					</b-row>
					<div class="table-responsive border-0">
						<table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
							<thead>
								<tr>
									<th scope="col" class="border-0 rounded-start">Date</th>
									<th scope="col" class="border-0">Course name</th>
									<th scope="col" class="border-0">Payment method</th>
									<th scope="col" class="border-0">Status</th>
									<th scope="col" class="border-0">Total</th>
									<th scope="col" class="border-0 rounded-end">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>4/2/2023</td>
									<td>
										<h6 class="mt-2 mt-lg-0 mb-0"><a href="#">Sketch from A to Z: for app designer</a></h6>
									</td>
									<td><img :src="mastercard" class="h-40px" alt=""><span class="ms-2">****4568</span></td>
									<td>
										<span class="badge bg-success bg-opacity-10 text-success">Paid</span>
									</td>
									<td>{{ currency }}350</td>
									<td>
										<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0 flex-centered" v-b-tooltip.hover.top="'Download'">
											<BIconDownload />
										</a>
									</td>
								</tr>

								<tr>
									<td>10/1/2023</td>
									<td>
										<h6 class="mt-2 mt-lg-0 mb-0"><a href="#">Create a Design System in Figma</a></h6>
									</td>
									<td><img :src="mastercard" class="h-40px" alt=""><span class="ms-2">****2588</span></td>
									<td>
										<span class="badge bg-success bg-opacity-10 text-success">Paid</span>
									</td>
									<td>{{ currency }}242</td>
									<td>
										<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0 flex-centered" v-b-tooltip.hover.top="'Download'">
											<BIconDownload />
										</a>
									</td>
								</tr>

								<tr>
									<td>21/1/2023</td>
									<td>
										<h6 class="mt-2 mt-lg-0 mb-0"><a href="#">The Complete Web Development in python</a></h6>
									</td>
									<td><img :src="paypal" class="w-80px" alt=""></td>
									<td>
										<span class="badge bg-orange bg-opacity-10 text-orange">Pending</span>
									</td>
									<td>{{ currency }}576</td>
									<td>
										<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0 flex-centered" v-b-tooltip.hover.top="'Download'">
											<BIconDownload />
										</a>
									</td>
								</tr>

								<tr>
									<td>18/1/2023</td>
									<td>
										<h6 class="mt-2 mt-lg-0 mb-0"><a href="#">Deep Learning with React-Native</a></h6>
									</td>
									<td><img :src="mastercard" class="h-40px" alt=""><span class="ms-2">****2588</span></td>
									<td>
										<span class="badge bg-danger bg-opacity-10 text-danger">Cancel</span>
									</td>
									<td>{{ currency }}425</td>
									<td>
										<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0 flex-centered" v-b-tooltip.hover.top="'Download'">
											<BIconDownload />
										</a>
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

	<b-modal v-model="showModal" title="Add card" header-class="bg-dark" title-class="text-white" ok-title="Save Card"
		cancel-title="Close" ok-variant="success" cancel-variant="danger-soft">
		<b-form class="row text-start g-3">
			<b-col cols="12">
				<b-form-group>
					<template #label>
						Card Number <span class="text-danger">*</span>
					</template>
					<div class="position-relative">
						<b-form-input type="text" maxlength="16" placeholder="xxxx xxxx xxxx xxxx" />
						<img :src="visa"
							class="w-40px position-absolute top-50 end-0 translate-middle-y me-2" alt="">
					</div>
				</b-form-group>
			</b-col>
			<b-col md="6">
				<b-form-group>
					<template #label>
						Expiration date <span class="text-danger">*</span>
					</template>
					<div class="input-group">
						<b-form-input type="text" maxlength="2" placeholder="Month" />
						<b-form-input type="text" maxlength="4" placeholder="Year" />
					</div>
				</b-form-group>
			</b-col>
			<b-col md="6">
				<b-form-group>
					<template #label>
						CVV / CVC <span class="text-danger">*</span>
					</template>
					<b-form-input type="text" maxlength="3" placeholder="xxx" />
				</b-form-group>
			</b-col>
			<b-col cols="12">
				<b-form-group>
					<template #label>
						Name on Card <span class="text-danger">*</span>
					</template>
					<b-form-input type="text" placeholder="Enter card holder name" />
				</b-form-group>
			</b-col>
			<b-col md="12">
				<div class="form-check mb-0">
					<input type="checkbox" class="form-check-input" id="exampleCheck1">
					<label class="form-check-label" for="exampleCheck1">Secuarely save card and details</label>
				</div>
			</b-col>
		</b-form>
	</b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import StudentLayout from '@/layouts/StudentLayout.vue';
import { currency } from '@/helpers/constants';

import visa from '@/assets/images/client/visa.svg';
import mastercard from '@/assets/images/client/mastercard.svg';
import paypal from '@/assets/images/client/paypal.svg';

import { faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BIconDownload } from 'bootstrap-icons-vue';

const showModal = ref(false);
</script>