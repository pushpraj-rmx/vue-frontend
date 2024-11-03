<template>
  <PagesLayout>

    <PageIntro />

    <PageContent />

    <ListedCourses />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageIntro from '@/views/pages/course/detail-classic/components/PageIntro.vue';
import PageContent from '@/views/pages/course/detail-classic/components/PageContent.vue';
import ListedCourses from '@/views/pages/course/detail-classic/components/ListedCourses.vue';
</script>