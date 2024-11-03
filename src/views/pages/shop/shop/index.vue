<template>
  <PagesLayout showShopCart>

    <PageBanner />

    <PageContent />

    <ActionBox />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/shop/shop/components/PageBanner.vue';
import PageContent from '@/views/pages/shop/shop/components/PageContent.vue';
import ActionBox from '@/views/pages/shop/shop/components/ActionBox.vue';
</script>