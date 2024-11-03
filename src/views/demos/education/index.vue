<template>
  <TopBar2 />
  <main>

    <MainBanner />

    <Client />

    <About />

    <TrendingCourses />

    <VideoDivider />

    <Events />

    <Newsletter />

  </main>
  <CookieAlertBox />
  <Footer2 />
</template>
<script setup lang="ts">
import TopBar2 from '@/views/demos/education/components/TopBar2.vue';
import MainBanner from '@/views/demos/education/components/MainBanner.vue';
import Client from '@/views/demos/education/components/Client.vue';
import About from '@/views/demos/education/components/About.vue';
import TrendingCourses from '@/views/demos/education/components/TrendingCourses.vue';
import VideoDivider from '@/views/demos/education/components/VideoDivider.vue';
import Events from '@/views/demos/education/components/Events.vue';
import Newsletter from '@/views/demos/education/components/Newsletter.vue';
import CookieAlertBox from '@/views/demos/education/components/CookieAlertBox.vue';
import Footer2 from '@/views/demos/education/components/Footer2.vue';
</script>