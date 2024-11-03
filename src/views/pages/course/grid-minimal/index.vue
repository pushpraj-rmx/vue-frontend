<template>
  <PagesLayout>

    <PageBanner />

    <PageContent />

    <Newsletter />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/course/grid-minimal/components/PageBanner.vue';
import PageContent from '@/views/pages/course/grid-minimal/components/PageContent.vue';
import Newsletter from '@/views/pages/course/grid-minimal/components/Newsletter.vue';
</script>