<template>
  <PagesLayout>

    <PageBanner />

    <PageContent />

    <ActionBox />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/course/list-minimal/components/PageBanner.vue';
import PageContent from '@/views/pages/course/list-minimal/components/PageContent.vue';
import ActionBox from '@/views/pages/course/list-minimal/components/ActionBox.vue';

</script>