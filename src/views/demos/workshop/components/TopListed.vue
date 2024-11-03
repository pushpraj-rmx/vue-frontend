<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="mx-auto text-center">
          <h2 class="fs-1">Top Listed Courses</h2>
          <p class="mb-0">Check out most 🤩 courses in the market</p>
        </b-col>
      </b-row>
      <b-row>
        <div class="arrow-round arrow-blur arrow-hover pb-1">
        <CustomTinySlider :settings="settings" id="courses-slider">
          <div v-for="(item, idx) in coursesList" :key="idx">
            <CoursesCard :item="item" />
          </div>
        </CustomTinySlider>
      </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { coursesList } from '@/views/demos/workshop/components/data';
import CoursesCard from '@/views/demos/workshop/components/CoursesCard.vue';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  mouseDrag: true,
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