<template>
  <PagesLayout>

    <PageBanner />

    <InnerPart />

    <ActionBox />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/instructors/components/PageBanner.vue';
import InnerPart from '@/views/pages/instructors/components/InnerPart.vue';
import ActionBox from '@/views/pages/instructors/components/ActionBox.vue';
</script>