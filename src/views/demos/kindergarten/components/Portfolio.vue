<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="8" class="mb-4">
          <h2>Our Lovely Movements</h2>
          <p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
        </b-col>
      </b-row>
      <b-row class="g-4 filter-container overflow-hidden" data-isotope='{"layoutMode": "masonry"}'>
        <b-col cols="6" md="4" lg="3" class="grid-item" v-for="(item, idx) in portfolioList" :key="idx">
          <b-card no-body class="overflow-hidden">
            <div class="card-overlay-hover">
              <img :src="item" class="rounded-3" alt="course img">
            </div>
            <CustomGLightbox class="card-element-hover position-absolute w-100 h-100" :link="item">
              <BIconFullscreen
                class="h3 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" />
            </CustomGLightbox>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import Isotope from 'isotope-layout';
import CustomGLightbox from '@/components/CustomGLightbox.vue';
import { portfolioList } from '@/views/demos/kindergarten/components/data';
import { BIconFullscreen } from 'bootstrap-icons-vue';

onMounted(() => {
  let grid = document.querySelector<HTMLElement>('.filter-container');
  if (grid) {
    let iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'masonry'
    });

    setTimeout(() => {
      iso.arrange({});
    }, 100);
  }
});
</script>