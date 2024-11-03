<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="8" class="text-center mx-auto">
          <h2>What people say about us</h2>
          <p>
            Happiness prosperous impression had conviction For every delay in they Extremity now strangers
            contained breakfast him discourse additions Sincerity collected contented led now perpetual extremely
            forfeited
          </p>
        </b-col>
      </b-row>

      <b-row class="mt-4 mt-lg-5">
        <b-col cols="10" class="mx-auto">
          <b-row class="g-4">
            <div class="arrow-round arrow-dark arrow-hover pb-1">
              <CustomTinySlider :settings="settings" id="request-slider">
                <b-col cols="6" v-for="(item, idx) in testimonials" :key="idx">
                  <p class="fs-5">{{ item.content }}</p>
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-md">
                      <img class="avatar-img rounded-circle" :src="item.avatar" alt="avatar">
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-0">{{ item.name }}</h6>
                      <p class="mb-0 small">{{ item.position }}</p>
                    </div>
                  </div>
                </b-col>
              </CustomTinySlider>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { testimonials } from '@/views/pages/form/request-access/components/data';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 20,
  autoplayButton: false,
  autoplayTimeout: 2000,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 2,
  mouseDrag: true,
  items: 2,
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
      items: 2,
    },
  },
};
</script>