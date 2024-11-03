<template>
  <section class="pb-0 pb-md-5">
    <b-container>
      <b-row class="mb-4">
        <h2 class="mb-0">Upcoming <span class="text-warning">Education</span> Events</h2>
      </b-row>
      <b-row>
        <div class="arrow-round arrow-creative arrow-blur arrow-hover">
          <CustomTinySlider :settings="settings" id="edu-event-slider">
            <template v-for="(item, idx) in eventsList" :key="idx">
              <EventsCard :item="item" />
            </template>
          </CustomTinySlider>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { eventsList } from '@/views/demos/education/components/data';
import EventsCard from '@/views/demos/education/components/EventsCard.vue';

import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

const settings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: false,
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