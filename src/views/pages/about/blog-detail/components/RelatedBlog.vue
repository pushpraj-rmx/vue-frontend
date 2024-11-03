<template>
  <section class="pt-0">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12">
          <h2 class="mb-0">You may also like</h2>
        </b-col>
      </b-row>
      <div class="arrow-round arrow-hover arrow-dark">
        <CustomTinySlider :settings="settings" id="blog-detail-slider">
          <b-card no-body class="bg-transparent" v-for="(item, idx) in blogs" :key="idx">
            <b-row class="g-0">
              <b-col md="4">
                <img :src="item.img" class="img-fluid rounded-start" alt="...">
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <b-card-title tag="h6"><a href="#">{{ item.title }}</a></b-card-title>
                  <span class="small">{{ item.timestamp }}</span>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { blogs } from '@/views/pages/about/blog-detail/components/data';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 20,
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