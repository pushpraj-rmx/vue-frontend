<template>
  <section class="pt-0">
    <b-container>
      <div class="bg-light p-4 rounded-3">
        <b-row class="mb-4">
          <b-col cols="12" class="text-center">
            <h2>What students are saying</h2>
          </b-col>
        </b-row>
        <b-row>
          <div class="arrow-round arrow-blur arrow-hover">
            <CustomTinySlider :settings="settings" id="testimonial-slide" class="pb-1">
              <div v-for="(item, idx) in testimonialsList" :key="idx">
                <b-card no-body class="card-body h-100">
                  <div class="d-sm-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center mb-1 mb-sm-0">
                      <div class="avatar avatar-sm">
                        <img class="avatar-img rounded-circle" :src="item.avatar" alt="avatar">
                      </div>
                      <div class="ms-2">
                        <h6 class="mb-0">{{ item.name }}</h6>
                      </div>
                    </div>
                    <ul class="list-inline mb-0 hstack gap-1">
                      <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" /></li>
                    </ul>
                  </div>
                  <h6 class="fw-normal mb-0">{{ item.quote }}</h6>
                </b-card>
              </div>
            </CustomTinySlider>
          </div>
        </b-row>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { testimonialsList } from '@/views/pages/workshop-detail/components/data';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  mouseDrag: true,
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
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};
</script>