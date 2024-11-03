<template>
  <PagesLayout>
    <PageBanner />
    <PageContent />
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';
import PageBanner from '@/views/pages/about/blog-grid/components/PageBanner.vue';
import PageContent from '@/views/pages/about/blog-grid/components/PageContent.vue';
</script>