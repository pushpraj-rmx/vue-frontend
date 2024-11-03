<template>
  <PagesLayout>

      <PageBanner />

      <PageContent />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/shop/checkout/components/PageBanner.vue'
import PageContent from '@/views/pages/shop/checkout/components/PageContent.vue'
</script>