<template>
  <PagesLayout>
    <PageIntro />
    <PageContent />
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageIntro from '@/views/pages/course/detail-module/components/PageIntro.vue';
import PageContent from '@/views/pages/course/detail-module/components/PageContent.vue';
</script>