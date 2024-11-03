<template>
  <TopBar8 />
  <main>
    <section class="pt-0">
      <b-container fluid class="px-0">
        <div class="bg-blue h-100px h-md-200px rounded-0"
          :style="`background:url(${pattern04}) no-repeat center center; background-size:cover;`">
        </div>
      </b-container>
      <b-container class="mt-n4">
        <b-row>
          <b-col cols="12">
            <b-card no-body class="bg-transparent card-body p-0">
              <b-row class="d-flex justify-content-between">
                <div class="col-auto mt-4 mt-md-0">
                  <div class="avatar avatar-xxl mt-n3">
                    <img class="avatar-img rounded-circle border border-white border-3 shadow" :src="avatar01" alt="">
                  </div>
                </div>
                <div class="col d-md-flex justify-content-between align-items-center mt-4">
                  <div>
                    <h1 class="my-1 fs-4 d-flex align-items-center">
                      Lori Stevens
                      <BIconPatchCheckFill class="text-info small ms-2" />
                    </h1>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                        4.5/5.0
                      </li>{{ ' ' }}
                      <li class="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <font-awesome-icon :icon="faUserGraduate" class="text-orange me-1" />
                        12k Enrolled Students
                      </li>{{ ' ' }}
                      <li class="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <font-awesome-icon :icon="faBook" class="text-purple me-1" />
                        25 Courses
                      </li>
                    </ul>
                  </div>
                  <div class="d-flex align-items-center mt-2 mt-md-0">
                    <router-link to="#" class="btn btn-sm btn-primary mb-0" data-bs-toggle="modal" data-bs-target="#addQuiz" v-if="isQuizButton" @click="toggleModal">Add New Quiz</router-link>
                    <router-link :to="{name: 'instructor.create.course'}" class="btn btn-success mb-0" v-else>Create a course</router-link>
                  </div>
                </div>
              </b-row>
            </b-card>

            <hr class="d-xl-none">
            <b-col cols="12" xl="3" class="d-flex justify-content-between align-items-center">
              <a class="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
              <b-button variant="primary" class="d-xl-none" type="button" @click="offcanvas = !offcanvas">
                <font-awesome-icon :icon="faSlidersH" />
              </b-button>
            </b-col>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="pt-0">
      <b-container>
        <b-row>
          <b-col xl="3">
            <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasSidebar">
              <div class="offcanvas-header bg-light">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar"
                  aria-label="Close"></button>
              </div>
              <div class="offcanvas-body p-3 p-xl-0">
                <div class="bg-dark border rounded-3 pb-0 p-3 w-100">
                  <div class="list-group list-group-dark list-group-borderless">
                    <template v-for="(item, idx) in getMenuItems() || []" :key="idx">
                      <router-link class="list-group-item icons-center"
                        :class="item.route.name === currentRouteName && 'active', getMenuItems().length - 1 === idx && 'text-danger bg-danger-soft-hover'"
                        :to="{ name: item.route.name }">
                        <component :is="item.icon" class="fa-fw me-2" />
                        {{ item.title }}
                      </router-link>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <b-offcanvas v-model="offcanvas" placement="end" title="My profile" headerClass="bg-light"
              bodyClass="p-3 p-xl-0" class="offcanvas-xl" id="offcanvasSidebar">
              <div class="bg-dark border rounded-3 pb-0 p-3 w-100">
                <div class="list-group list-group-dark list-group-borderless">
                  <template v-for="(item, idx) in getMenuItems()" :key="idx">
                    <router-link class="list-group-item"
                      :class="item.route.name === currentRouteName && 'active', getMenuItems().length - 1 === idx && 'text-danger bg-danger-soft-hover'"
                      :to="{ name: item.route.name }">
                      <component :is="item.icon" class="fa-fw me-2" />
                      {{ item.title }}
                    </router-link>
                  </template>
                </div>
              </div>
            </b-offcanvas>
          </b-col>
          <slot />

        </b-row>
      </b-container>
    </section>
  </main>
  <Footer7 />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

import { INSTRUCTOR_MENU_ITEMS } from '@/assets/data/menu-items';

import TopBar8 from '@/layouts/components/TopBar8.vue';
import Footer7 from '@/layouts/components/Footer7.vue';

import pattern04 from '@/assets/images/pattern/04.png';
import avatar01 from '@/assets/images/avatar/01.jpg';

import { faStar, faUserGraduate, faBook, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { BIconPatchCheckFill } from 'bootstrap-icons-vue';

type LayoutPropType = {
  isQuizButton?: boolean;
  toggleModal? : any
};


defineProps<LayoutPropType>();

const currentRouteName = router.currentRoute.value.name;

const offcanvas = ref(false);

const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return INSTRUCTOR_MENU_ITEMS;
};
</script>