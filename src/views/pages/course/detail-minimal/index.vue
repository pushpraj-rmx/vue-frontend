<template>
  <PagesLayout>
    <PageBanner :toggleOffcanvas="toggleOffcanvas" />
    <PageContent :offcanvas="offcanvas" :toggleOffcanvas="toggleOffcanvas" />
  </PagesLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/course/detail-minimal/components/PageBanner.vue';
import PageContent from '@/views/pages/course/detail-minimal/components/PageContent.vue';

const offcanvas = ref(false);

const toggleOffcanvas = () => {
  offcanvas.value = !offcanvas.value;
};
</script>