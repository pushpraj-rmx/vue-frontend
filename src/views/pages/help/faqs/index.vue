<template>
  <PagesLayout>
    <PageBanner />
    <PageContent />
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';
import PageBanner from '@/views/pages/help/faqs/components/PageBanner.vue';
import PageContent from '@/views/pages/help/faqs/components/PageContent.vue';
</script>