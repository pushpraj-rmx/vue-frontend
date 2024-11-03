<template>
  <section class="pt-0">
    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="mx-auto text-center">
          <h2 class="mb-0">Top Listed College</h2>
          <p class="mb-0">Perceived end knowledge certainly day sweetness why cordially.</p>
        </b-col>
      </b-row>

      <b-row>
        <div class="arrow-round arrow-dark arrow-hover">
          <CustomTinySlider :settings="settings" id="colleges-slider">
            <div v-for="(item, idx) in collegeData" :key="idx">
              <ColleageCard :item="item" />
            </div>
          </CustomTinySlider>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { collegeData } from '@/views/demos/university/components/data';
import ColleageCard from '@/views/demos/university/components/ColleageCard.vue';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: false,
  mouseDrag: true,
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