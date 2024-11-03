<template>
  <section class="py-5 bg-light">
    <b-container>
      <b-row class="justify-content-center my-4">
        <b-col cols="12">
          <CustomTinySlider :settings="settings" id="pricing-slider" class="arrow-round">
            <div class="item" v-for="(item, idx) in clients" :key="idx">
              <img :src="item" class="grayscale" alt="">
            </div>
          </CustomTinySlider>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { clients } from '@/views/pages/about/pricing/components/data';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 80,
  autoplayButton: false,
  autoplayTimeout: 2000,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: false,
  edgePadding: 2,
  mouseDrag: true,
  items: 6,
  nav: false,
  responsive: {
    1: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
};
</script>