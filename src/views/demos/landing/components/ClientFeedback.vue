<template>
  <section class="bg-light position-relative">
    <figure class="position-absolute start-0 bottom-0 mb-0">
      <img :src="element10" class="h-200px" alt="">
    </figure>

    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="mx-auto text-center">
          <h2>Our Customer Feedback</h2>
          <p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
        </b-col>
      </b-row>
      <b-row>
        <div class="arrow-round arrow-creative arrow-dark arrow-hover">
          <CustomTinySlider :settings="settings" id="client-slider">
            <div v-for="(item, idx) in customerFeedback" :key="idx">
              <div class="bg-body text-center p-4 rounded-3 border border-1 position-relative">
                <div class="avatar avatar-lg mb-3">
                  <img class="avatar-img rounded-circle" :src="item.avatar" alt="avatar">
                </div>
                <h6 class="mb-2">{{ item.name }}</h6>
                <blockquote class="mt-1">
                  <p>
                    <span class="me-1 small">
                      <font-awesome-icon :icon="faQuoteLeft" />
                    </span>
                    {{ item.quote }}
                    <span class="ms-1 small">
                      <font-awesome-icon :icon="faQuoteRight" />
                    </span>
                  </p>
                </blockquote>
              </div>
            </div>
          </CustomTinySlider>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { customerFeedback } from '@/views/demos/landing/components/data';
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import element10 from '@/assets/images/element/10.svg';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  mouseDrag: true,
  controls: true,
  edgePadding: 5,
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
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};
</script>