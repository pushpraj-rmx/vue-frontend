<template>
  <PagesLayout>
    <MainBanner />
    <PageContent />
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';
import MainBanner from '@/views/pages/event-detail/components/MainBanner.vue';
import PageContent from '@/views/pages/event-detail/components/PageContent.vue';
</script>