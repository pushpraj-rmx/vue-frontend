<template>
  <section>
    <b-container>
      <b-row>
        <b-col md="4" class="mb-4 mb-md-0">
          <h2>Awards'N Stuff</h2>
          <ul class="list-group list-group-borderless mt-4">
            <li class="list-group-item d-flex align-items-center px-0" v-for="(item, idx) in awards" :key="idx">
              <h6 class="mb-0">{{ item.year }}</h6>
              <span class="fs-6 ms-3">{{ item.name }}</span>
            </li>
          </ul>
        </b-col>

        <b-col md="8">
          <div class="d-sm-flex justify-content-sm-between">
            <h2 class="mb-0">Meet Our Team</h2>
            <a href="#" class="btn btn-light mt-2">Join Team</a>
          </div>

          <div class="arrow-creative arrow-blur arrow-hover mt-2 mt-sm-5">
          <CustomTinySlider :settings="settings" id="about-team-slider">
            <div class="text-center" v-for="(item, idx) in teamData" :key="idx">
              <div class="avatar avatar-xxl mb-3">
                <img class="avatar-img rounded-circle" :src="item.img" alt="avatar">
              </div>
              <h6 class="mb-0"><a href="#">{{ item.name }}</a></h6>
              <p class="mb-0 small">{{ item.designation }}</p>
              <ul class="list-inline mb-0 flex-centered hstack gap-1">
                <li class="list-inline-item me-0 small"><font-awesome-icon class="text-warning" :icon="faStar" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon class="text-warning" :icon="faStar" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon class="text-warning" :icon="faStar" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon class="text-warning" :icon="faStar" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon class="text-warning" :icon="faStarHalfAlt" />
                </li>
              </ul>
            </div>
          </CustomTinySlider>
        </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { awards, teamData } from '@/views/pages/about/about-us/components/data';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 20,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  mouseDrag: true,
  autoplay: true,
  controls: true,
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