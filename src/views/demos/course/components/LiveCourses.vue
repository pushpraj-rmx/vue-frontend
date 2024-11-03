<template>
  <section class="bg-light position-relative">
    <figure class="position-absolute top-50 start-0 translate-middle-y ms-5 d-none d-xxl-block">
      <svg width="29px" height="29px">
        <path class="fill-orange"
          d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z">
        </path>
      </svg>
    </figure>

    <figure class="position-absolute bottom-0 start-50 translate-middle-x">
      <svg width="23px" height="23px">
        <path class="fill-primary"
          d="M23.003,11.501 C23.003,17.854 17.853,23.003 11.501,23.003 C5.149,23.003 -0.001,17.854 -0.001,11.501 C-0.001,5.149 5.149,-0.000 11.501,-0.000 C17.853,-0.000 23.003,5.149 23.003,11.501 Z">
        </path>
      </svg>
    </figure>

    <figure class="position-absolute top-50 end-0 translate-middle-y ms-5">
      <svg width="22px" height="22px">
        <path class="fill-warning"
          d="M22.003,11.001 C22.003,17.078 17.077,22.003 11.001,22.003 C4.925,22.003 -0.001,17.078 -0.001,11.001 C-0.001,4.925 4.925,-0.000 11.001,-0.000 C17.077,-0.000 22.003,4.925 22.003,11.001 Z">
        </path>
      </svg>
    </figure>

    <b-container>
      <b-row class="g-4 align-items-center justify-content-between">
        <b-col md="6" xl="4">
          <h2 class="fs-1">Today's Top Free Live Courses</h2>
          <p>How promotion excellent curiosity yet attempted happiness prosperous impression had conviction For every
            delay death ask to style Me mean able my by in they Extremity now strangers contained.</p>
          <a href="#" class="btn btn-orange mb-0">Get premium courses</a>
        </b-col>

        <b-col md="6" xl="8">
          <b-row>
            <div class="arrow-round arrow-blur">
              <CustomTinySlider :settings="settings" id="live-course-slider">
                <div v-for="(item, idx) in liveCourseList" :key="idx">
                  <b-card no-body class="p-2">
                    <div class="position-relative">
                      <img :src="item.image" class="card-img rounded-2" alt="Card img">
                      <div class="card-img-overlay">
                        <div class="position-absolute top-50 start-50 translate-middle">
                          <CustomGLightbox :link="item.video_link" class="btn btn-lg text-danger btn-round btn-white-shadow mb-0" v-if="item.video_link">
                            <font-awesome-icon :icon="faPlay" />
                          </CustomGLightbox>
                        </div>
                      </div>
                    </div>

                    <b-card-body>
                      <h5><a href="#">{{ item.title }}</a></h5>
                      <div class="d-sm-flex justify-content-sm-between align-items-center mt-3">
                        <div>
                          <h6 class="mb-1 fw-normal">
                            <font-awesome-icon :icon="faCircle" class="fw-bold text-success small me-1" />
                            Live Students
                          </h6>
                          <ul class="avatar-group mb-2 mb-sm-0">
                            <li class="avatar avatar-xs" v-for="(student, idx) in item.students" :key="idx">
                              <img class="avatar-img rounded-circle" :src="student" alt="avatar">
                            </li>
                            <li class="avatar avatar-xs">
                              <div class="avatar-img rounded-circle bg-primary">
                                <span
                                  class="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <b-button variant="success" size="sm" class="mb-0">Join now</b-button>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
              </CustomTinySlider>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { liveCourseList } from '@/views/demos/course/components/data';
import { faPlay, faCircle } from '@fortawesome/free-solid-svg-icons';

import CustomGLightbox from '@/components/CustomGLightbox.vue';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  mouseDrag: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: false,
  controls: true,
  edgePadding: 2,
  items: 2,
  nav: false,
  responsive: {
    1: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
};
</script>