<template>
	<StickyHeader class-name="navbar-light navbar-sticky">
		<nav class="navbar navbar-expand-xl z-index-9">
			<b-container>
				<AppMenu :menu-items="menuItems" showIcon>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<BIconHeadset class="me-2 nt-" />Contact
						</a>
					</li>
				</AppMenu>
				<ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
					<li class="nav-item ms-2 dropdown ">
						<a class="btn btn-light btn-round mb-0 flex-centered" href="#" role="button" data-bs-toggle="dropdown"
							aria-expanded="false" data-bs-auto-close="outside">
							<BIconCart3 class="fa-fw" />
						</a>
						<span
							class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark mt-xl-2 ms-n1">2
							<span class="visually-hidden">unread messages</span>
						</span>
						<div
							class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
							<b-card no-body class="bg-transparent">
								<b-card-header class="bg-transparent border-bottom py-4">
									<h5 class="m-0">Cart items</h5>
								</b-card-header>
								<b-card-body class="p-0">
									<b-row class="p-3 g-2">
										<b-col cols="3">
											<img class="rounded-2" :src="book02" alt="avatar">
										</b-col>
										<b-col cols="9">
											<div class="d-flex justify-content-between">
												<h6 class="m-0">Angular 4 Tutorial in audio (Compact Disk)</h6>
												<a href="#" class="small text-primary-hover">
													<BIconXLg />
												</a>
											</div>
											<b-form class="choices-sm pt-2 col-4">
												<ChoicesSelect id="select-1" class="border-0 bg-transparent" data-search-enabled="false">
													<option>1</option>
													<option selected>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
												</ChoicesSelect>
											</b-form>
										</b-col>
									</b-row>
									<hr class="m-0">
									<b-row class="p-3 g-2">
										<b-col cols="3">
											<img class="rounded-2" :src="book04" alt="avatar">
										</b-col>
										<b-col cols="9">
											<div class="d-flex justify-content-between">
												<h6 class="m-0">The Principles of Beautiful Graphics Design (Paperback)</h6>
												<a href="#" class="small text-primary-hover">
													<BIconXLg />
												</a>
											</div>
											<b-form class="choices-sm pt-2 col-4">
												<ChoicesSelect id="select-2" class="border-0 bg-transparent" data-search-enabled="false">
													<option selected>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
												</ChoicesSelect>
											</b-form>
										</b-col>
									</b-row>
								</b-card-body>
								<b-card-footer
									class="bg-transparent border-top py-3 text-center d-flex justify-content-between position-relative">
									<a href="#" class="btn btn-sm btn-light mb-0">View Cart</a>
									<a href="#" class="btn btn-sm btn-success mb-0">Checkout</a>
								</b-card-footer>
							</b-card>
						</div>
					</li>

					<li class="nav-item ms-2 ms-sm-3 dropdown d-none d-sm-block">
						<a class="btn btn-light btn-round mb-0 flex-centered" href="#" role="button" data-bs-toggle="dropdown"
							aria-expanded="false" data-bs-auto-close="outside">
							<BIconBell class="fa-fw" />
						</a>
						<span class="notif-badge animation-blink"></span>
						<div
							class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
							<b-card no-body class="bg-transparent">
								<b-card-header
									class="bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
									<h6 class="m-0">Notifications <span class="badge bg-danger bg-opacity-10 text-danger ms-2">2
											new</span></h6>
									<a class="small" href="#">Clear all</a>
								</b-card-header>
								<b-card-body class="p-0">
									<ul class="list-group list-unstyled list-group-flush">
										<li>
											<a href="#" class="list-group-item-action border-0 border-bottom d-flex p-3">
												<div class="me-3">
													<div class="avatar avatar-md">
														<img class="avatar-img rounded-circle" :src="avatar03" alt="avatar">
													</div>
												</div>
												<div>
													<h6 class="mb-1">Update v2.3 completed successfully</h6>
													<p class="small text-body m-0">What's new! Find out about new features</p>
													<small class="text-body">5 min ago</small>
												</div>
											</a>
										</li>
									</ul>
								</b-card-body>
								<b-card-footer class="bg-transparent border-0 py-3 text-center position-relative">
									<a href="#" class="stretched-link">See all incoming activity</a>
								</b-card-footer>
							</b-card>
						</div>
					</li>
					<ProfileDropdown className="nav-item ms-3" />
				</ul>
			</b-container>
		</nav>

	</StickyHeader>
</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import AppMenu from '@/components/navbar/AppMenu/index.vue';
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';
import { BIconHeadset, BIconCart3, BIconXLg, BIconBell } from 'bootstrap-icons-vue';

import book02 from '@/assets/images/book/02.jpg';
import book04 from '@/assets/images/book/04.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';

const menuItems: MenuItemType[] = getAppMenuItems();
</script>