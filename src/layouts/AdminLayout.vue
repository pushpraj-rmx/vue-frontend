<template>
  <main>
    <nav class="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
      <div class="d-flex align-items-center">
        <router-link class="navbar-brand" :to="{ name: 'demos.default' }">
          <img class="navbar-brand-item" :src="logolight" alt="">
        </router-link>
      </div>

      <OverlayScrollbarsComponent defer class="offcanvas offcanvas-start flex-row custom-scrollbar h-100"
        :class="offcanvas && 'show'" data-bs-backdrop="true" tabindex="-1" id="offcanvasSidebar">
        <div class="offcanvas-body sidebar-content d-flex flex-column bg-dark">
          <AdminMenu />
          <div class="px-3 mt-auto pt-3">
            <div class="d-flex align-items-center justify-content-between text-primary-hover">
              <router-link class="h5 mb-0 text-body" :to="{ name: 'admin.setting' }" v-b-tooltip.hover.top="'Settings'">
                <BIconGearFill />
              </router-link>
              <router-link class="h5 mb-0 text-body" :to="{ name: 'demos.default' }" v-b-tooltip.hover.top="'Home'">
                <BIconGlobe />
              </router-link>
              <router-link class="h5 mb-0 text-body" :to="{ name: 'auth.sign-in' }" v-b-tooltip.hover.top="'Sign out'">
                <BIconPower />
              </router-link>
            </div>
          </div>
        </div>
      </OverlayScrollbarsComponent>
    </nav>
    <div class="page-content">
      <nav class="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
        <b-container class="p-0" fluid>
          <div class="d-flex align-items-center w-100">
            <div class="d-flex align-items-center d-xl-none">
              <router-link class="navbar-brand" :to="{ name: 'demos.default' }">
                <img class="light-mode-item navbar-brand-item h-30px" :src="logoMobile" alt="">
                <img class="dark-mode-item navbar-brand-item h-30px" :src="logoMobilelight" alt="">
              </router-link>
            </div>

            <div class="navbar-expand-xl sidebar-offcanvas-menu">
              <button class="navbar-toggler me-auto" type="button" @click="offcanvas = !offcanvas">
                <BIconTextRight class="fa-fw h2 lh-0 mb-0 rtl-flip" data-bs-target="#offcanvasMenu" />
              </button>
            </div>

            <div class="navbar-expand-lg ms-auto ms-xl-0">
              <MobileNavbarToggler />
              <b-collapse class="navbar-collapse w-100" id="navbarCollapse">
                <div class="nav my-3 my-xl-0 flex-nowrap align-items-center">
                  <div class="nav-item w-100">
                    <b-form class="position-relative">
                      <b-form-input class="pe-5 bg-secondary bg-opacity-10 border-0" type="search"
                        placeholder="Search" />
                      <button
                        class="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                        type="submit">
                        <font-awesome-icon :icon="faSearch" class="fs-6 text-primary" />
                      </button>
                    </b-form>
                  </div>
                </div>
              </b-collapse>
            </div>

            <div class="ms-xl-auto">
              <ul class="navbar-nav flex-row align-items-center">
                <DropDown custom-class="nav-item ms-2 ms-md-3">
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
                                  <img class="avatar-img rounded-circle" :src="avatar08" alt="avatar">
                                </div>
                              </div>
                              <div>
                                <p class="text-body small m-0">Congratulate <b>Joan Wallace</b> for graduating from
                                  <b>Microverse university</b>
                                </p>
                                <u class="small">Say congrats</u>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#" class="list-group-item-action border-0 border-bottom d-flex p-3">
                              <div class="me-3">
                                <div class="avatar avatar-md">
                                  <img class="avatar-img rounded-circle" :src="avatar02" alt="avatar">
                                </div>
                              </div>
                              <div>
                                <h6 class="mb-1">Larry Lawson Added a new course</h6>
                                <p class="small text-body m-0">What's new! Find out about new features</p>
                                <u class="small">View detail</u>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#" class="list-group-item-action border-0 border-bottom d-flex p-3">
                              <div class="me-3">
                                <div class="avatar avatar-md">
                                  <img class="avatar-img rounded-circle" :src="avatar05" alt="avatar">
                                </div>
                              </div>
                              <div>
                                <h6 class="mb-1">New request to apply for Instructor</h6>
                                <u class="small">View detail</u>
                              </div>
                            </a>
                          </li>

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
                </DropDown>

                <ProfileDropdown className="nav-item ms-2 ms-md-3" />
              </ul>
            </div>
          </div>
        </b-container>
      </nav>
      <div class="page-content-wrapper border">
        <slot />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DropDown from '@/components/DropDown.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import MobileNavbarToggler from '@/components/MobileNavbarToggler.vue';
import AdminMenu from '@/components/navbar/AdminMenu/index.vue';
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BIconGearFill, BIconGlobe, BIconPower, BIconTextRight, BIconBell } from 'bootstrap-icons-vue';

import logolight from '@/assets/images/logo-light.svg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import logoMobile from '@/assets/images/logo-mobile.svg';
import logoMobilelight from '@/assets/images/logo-mobile-light.svg';

const offcanvas = ref(false);

const resize = () => {
  if (window.innerWidth > 1200) {
    offcanvas.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", () => {
    resize();
  });
});
</script>