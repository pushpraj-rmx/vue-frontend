<template>
  <section class="py-5">
    <b-container>
      <b-row class="justify-content-center my-4">
        <b-col cols="12">
          <CustomTinySlider :settings="settings" id="client">
            <div class="item" v-for="(img, idx) in clientImg" :key="idx">
              <img :src="img" alt="client-logo" />
            </div>
          </CustomTinySlider>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import type { TinySliderSettings } from 'tiny-slider';

import cocacola from '@/assets/images/client/coca-cola.svg';
import android from '@/assets/images/client/android.svg';
import envato from '@/assets/images/client/envato.svg';
import microsoft from '@/assets/images/client/microsoft.svg';
import netflix from '@/assets/images/client/netflix.svg';
import google from '@/assets/images/client/google.svg';
import linkedin from '@/assets/images/client/linkedin.svg';

const clientImg = [cocacola, android, envato, microsoft, netflix, google, linkedin];

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