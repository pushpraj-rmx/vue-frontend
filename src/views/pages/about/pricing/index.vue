<template>
  <PagesLayout>
    <PageBanner />

    <Client />

    <Features />

    <FAQs />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';
import PageBanner from '@/views/pages/about/pricing/components/PageBanner.vue';
import Client from '@/views/pages/about/pricing/components/Client.vue';
import Features from '@/views/pages/about/pricing/components/Features.vue';
import FAQs from '@/views/pages/about/pricing/components/FAQs.vue';
</script>