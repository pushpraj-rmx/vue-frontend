<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <h2 class="mb-0">Related Instructors</h2>
      </b-row>
      <div class="arrow-round arrow-creative arrow-blur arrow-hover">
        <CustomTinySlider :settings="settings" id="instructor-slide">
          <b-card no-body class="bg-transparent" v-for="(item, idx) in relatedInstructor" :key="idx">
            <div class="position-relative">
              <img :src="item.image" class="card-img" alt="course img">
              <div class="card-img-overlay d-flex flex-column p-3">
                <div class="w-100 mt-auto text-end">
                  <a href="#" class="badge text-bg-info rounded-1">
                    <font-awesome-icon :icon="faUserGraduate" class="me-2" />
                    {{ item.students }}</a>{{  ' ' }}
                  <a href="#" class="badge text-bg-orange rounded-1">
                    <font-awesome-icon :icon="faClipboardList" class="me-2" />
                    {{ item.lecture }}</a>
                </div>
              </div>
            </div>
            <b-card-body class="text-center">
              <b-card-title tag="h5"><a href="#">{{ item.name }}</a></b-card-title>
              <p class="mb-2">{{ item.title }}</p>
              <ul class="list-inline hstack justify-content-center">
                <li class="list-inline-item ms-2 h6 mb-0 fw-normal">{{ item.rating }}/5.0</li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

import { relatedInstructor } from '@/views/pages/instructors/[id]/components/data';
import { faUserGraduate, faClipboardList, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  mouseDrag: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 2,

  items: 4,
  nav: false,
  responsive: {
    1: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};
</script>