<template>
  <PagesLayout>

    <PageBanner />

    <Works />

    <Counter />

    <InstructorTabs />

    <ActionBox />
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/become-instructor/components/PageBanner.vue';
import Works from '@/views/pages/become-instructor/components/Works.vue';
import Counter from '@/views/pages/become-instructor/components/Counter.vue';
import InstructorTabs from '@/views/pages/become-instructor/components/InstructorTabs.vue';
import ActionBox from '@/views/pages/become-instructor/components/ActionBox.vue';
</script>