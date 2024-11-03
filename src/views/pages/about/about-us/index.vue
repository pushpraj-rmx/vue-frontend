<template>
  <PagesLayout>

    <PageBanner />

    <About />

    <Client />

    <Team />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/about/about-us/components/PageBanner.vue';
import About from '@/views/pages/about/about-us/components/About.vue';
import Client from '@/views/pages/about/about-us/components/Client.vue';
import Team from '@/views/pages/about/about-us/components/Team.vue'

</script>