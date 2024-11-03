<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-lg-5">
        <b-col lg="8">
          <b-row class="g-4">
            <b-col cols="12">
              <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
              <ul class="list-inline mb-0 hstack gap-1">
                <li class="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                  4.5/5.0
                </li>
                <li class="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <font-awesome-icon :icon="faUserGraduate" class="text-orange me-1" />
                  12k Enrolled
                </li>
                <li class="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <font-awesome-icon :icon="faSignal" class="text-success me-1" />
                  All levels
                </li>
              </ul>
            </b-col>
            <b-col cols="12">
              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-lg">
                    <img class="avatar-img rounded-circle" :src="avatar05" alt="avatar">
                  </div>
                  <div class="ms-3">
                    <h6 class="mb-0"><a href="#">By Jacqueline Miller</a></h6>
                    <p class="mb-0 small">Founder Eduport company</p>
                  </div>
                </div>

                <div class="d-flex mt-2 mt-sm-0">
                  <a class="btn btn-danger-soft btn-sm mb-0" href="#">Follow</a>
                  <b-dropdown end variant="link" text="share" class="ms-2"
                    toggle-class="btn btn-sm mb-0 btn-info-soft small"
                    menu-class="dropdown-w-sm dropdown-menu-end shadow rounded" no-caret>
                    <b-dropdown-item href="#">
                      <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                        Twitter
                      </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                        Facebook
                      </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <font-awesome-icon :icon="faLinkedinIn" class="me-2" />
                        LinkedIn
                      </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <font-awesome-icon :icon="faCopy" class="me-2" />
                      Copy link
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </b-col>
            <CourseDetailTab />
          </b-row>
        </b-col>

        <b-col lg="4">
          <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar"
            aria-labelledby="offcanvasSidebarLabel">
            <div class="offcanvas-header bg-dark">
              <h5 class="offcanvas-title text-white" id="offcanvasSidebarLabel">Course playlist</h5>
              <b-button type="button" variant="light" size="sm" class="mb-0" data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasSidebar" aria-label="Close">
                <BIconXLg />
              </b-button>
            </div>
            <div class="offcanvas-body p-3 p-lg-0">
              <b-col cols="12">
                <CoursePlaylist />
              </b-col>
            </div>
          </div>


          <b-offcanvas v-model="props.offcanvas" placement="end" headerClass="bg-dark" bodyClass="p-3 p-xl-0"
            class="offcanvas-lg" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
            <template #header>
              <h5 class="offcanvas-title text-white" id="offcanvasSidebarLabel">Course playlist</h5>
              <b-button type="button" variant="light" size="sm" class="mb-0 ms-auto" @click="props.toggleOffcanvas">
                <BIconXLg />
              </b-button>
            </template>
            <b-col cols="12">
              <CoursePlaylist />
            </b-col>
          </b-offcanvas>

          <div class="mt-4">
            <h4 class="mb-3">Tags</h4>
            <ul class="list-inline mb-0">
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">blog</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">business</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">theme</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">data science</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">web development</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">tips</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">machine learning</a> </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CourseDetailTab from '@/views/pages/course/detail-minimal/components/CourseDetailTab.vue';
import CoursePlaylist from '@/views/pages/course/detail-minimal/components/CoursePlaylist.vue';
import { faCopy, faStar, faUserGraduate, faSignal } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BIconXLg } from 'bootstrap-icons-vue';
import avatar05 from '@/assets/images/avatar/05.jpg';
const props = defineProps(['offcanvas', 'toggleOffcanvas']);
</script>