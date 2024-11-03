<template>
  <section class="pt-0">
    <b-container>
      <b-row class="mb-4">
        <h2 class="mb-0">Upcoming Events</h2>
      </b-row>

      <b-row>
        <div class="arrow-round arrow-creative arrow-blur">
          <CustomTinySlider :settings="settings" id="event-slider">
            <template v-for="(item, idx) in eventsList" :key="idx">
              <EventCard :item="item" />
            </template>
          </CustomTinySlider>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { eventsList } from '@/views/demos/university/components/data';
import EventCard from '@/views/demos/university/components/EventCard.vue';

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