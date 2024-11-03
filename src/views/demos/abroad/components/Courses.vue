<template>
  <section class="pt-0 pt-sm-5">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center mx-auto">
          <h2 class="h1 mb-0">What We Offer</h2>
        </b-col>
      </b-row>
      <b-row>
        <div class="arrow-hover arrow-blur arrow-round">
          <CustomTinySlider :settings="settings" id="courses">
            <div v-for="(item, idx) in offerList" :key="idx">
              <CoursesCard :item="item" />
            </div>
          </CustomTinySlider>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CoursesCard from '@/views/demos/abroad/components/CoursesCard.vue';
import { offerList } from '@/views/demos/abroad/components/data';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 2,

  items: 5,
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