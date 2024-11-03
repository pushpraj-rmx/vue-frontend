<template>
  <b-container>
    <b-alert variant="success"
      class="d-flex justify-content-between align-items-center fade show mt-2 mb-0 rounded-3 pe-2" :model-value="true"
      dismissible>
      <div>
        <div class="avatar avatar-xs me-2">
          <img class="avatar-img rounded-circle" :src="avatar09" alt="avatar">
        </div>
        The personality development class starts at 2:00 pm, click to <a href="#" class="alert-link">Join Now</a>
      </div>
    </b-alert>
  </b-container>
  <TopBar8 />
  <main>

    <MainBanner />

    <About />

    <ListedCollege />

    <Counter />

    <LatestNews />

    <Event />

  </main>
  <Footer4 />
</template>
<script setup lang="ts">
import TopBar8 from '@/views/demos/university/components/TopBar8.vue';
import MainBanner from '@/views/demos/university/components/MainBanner.vue';
import About from '@/views/demos/university/components/About.vue';
import ListedCollege from '@/views/demos/university/components/ListedColleges.vue';
import Counter from '@/views/demos/university/components/Counter.vue';
import LatestNews from '@/views/demos/university/components/LatestNews.vue';
import Event from '@/views/demos/university/components/Events.vue';
import Footer4 from '@/views/demos/university/components/Footer4.vue';

import avatar09 from '@/assets/images/avatar/09.jpg';
</script>