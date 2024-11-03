<template>
  <StickyHeader class-name="navbar-light navbar-sticky">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <AppMenu :menu-items="menuItems.slice(0, 1)" ul-class="ms-auto">
          <template #collapseMenuHeader>
            <b-col xl="7">
              <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                <div class="nav-item w-100">
                  <b-form class="rounded position-relative">
                    <b-form-input class="pe-5 bg-secondary bg-opacity-10 border-0" type="search" placeholder="Search"
                      aria-label="Search" />
                    <button
                      class="btn btn-link bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                      type="submit">
                      <font-awesome-icon :icon="faSearch" class="fs-6 text-primary" />
                    </button>
                  </b-form>
                </div>
              </div>
            </b-col>
          </template>
          <li class="nav-item dropdown">
            <router-link class="nav-link" :to="{ name: 'course.grid.classic' }">
              Courses
            </router-link>
          </li>
        </AppMenu>

        <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
          <DropDown custom-class="nav-item ms-0 ms-md-3">
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
          <ProfileDropdown className="nav-item ms-3" />
        </ul>
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import DropDown from '@/components/DropDown.vue';
import AppMenu from '@/components/navbar/AppMenu/index.vue';
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BIconBell } from 'bootstrap-icons-vue';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';

const menuItems: MenuItemType[] = getAppMenuItems();
</script>