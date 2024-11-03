<template>
  <section class="pb-5 pt-0 pt-lg-5">
    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="mx-auto text-center">
          <h2 class="fs-1">Our Trending Courses</h2>
          <p class="mb-0">Check out most 🔥 courses in the market</p>
        </b-col>
      </b-row>
      <b-row>
        <div class="arrow-round arrow-blur arrow-hover">
          <CustomTinySlider :settings="settings" id="trending-courses" class="pb-1">
            <div v-for="(item, idx) in trendingCourse" :key="idx">
              <TrendingCoursesCard :item="item" />
            </div>
          </CustomTinySlider>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

import { trendingCourse } from '@/views/demos/default/components/data';
import TrendingCoursesCard from '@/views/demos/default/components/TrendingCoursesCard.vue';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 2,

  items: 3,
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
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};
</script>