<template>
  <TopBar6 button-class="ms-2" />
  <main>

    <MainBanner />

    <Steps />

    <Course />

    <Portfolio />

  </main>
  <Footer5 />
</template>
<script setup lang="ts">
import TopBar6 from '@/views/demos/kindergarten/components/TopBar6.vue';
import MainBanner from '@/views/demos/kindergarten/components/MainBanner.vue';
import Steps from '@/views/demos/kindergarten/components/Steps.vue';
import Course from '@/views/demos/kindergarten/components/Course.vue';
import Portfolio from '@/views/demos/kindergarten/components/Portfolio.vue';
import Footer5 from '@/views/demos/kindergarten/components/Footer5.vue';
</script>