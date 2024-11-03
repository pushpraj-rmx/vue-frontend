<template>
  <section>
    <b-container>
      <b-row>
        <b-col md="12">
          <div class="bg-light rounded-3 p-4">
            <div class="arrow-round arrow-creative arrow-blur arrow-hover py-1">
              <CustomTinySlider :settings="settings" id="course-slider">
                <div v-for="(item, idx) in courses" :key="idx">
                  <div class="bg-body text-center rounded-2 border py-2 px-1 position-relative">
                    <img :src="item.img" class="h-40px" alt="">
                    <a href="#" class="text-primary-hover stretched-link">
                      <span class="h6 ms-2">
                        {{ item.text }}
                      </span>
                    </a>
                  </div>
                </div>
              </CustomTinySlider>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

import element22 from '@/assets/images/element/22.svg';
import element23 from '@/assets/images/element/23.svg';
import element21 from '@/assets/images/element/21.svg';
import element24 from '@/assets/images/element/24.svg';
import element25 from '@/assets/images/element/25.svg';
import element26 from '@/assets/images/element/26.svg';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 80,
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
      items: 5,
    },
  },
};

const courses = [
  { img: element22, text: 'Chemistry' },
  { img: element23, text: 'Physics' },
  { img: element21, text: 'Technology' },
  { img: element24, text: 'Health' },
  { img: element25, text: 'Business' },
  { img: element26, text: 'Engineer' }
];
</script>