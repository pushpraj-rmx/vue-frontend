<template>
  <PagesLayout>

    <PageBanner />

    <Categories />

    <Language />

    <ActionBox />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/course/categories/components/PageBanner.vue';
import Categories from '@/views/pages/course/categories/components/Categories.vue';
import Language from '@/views/pages/course/categories/components/Language.vue';
import ActionBox from '@/views/pages/course/categories/components/ActionBox.vue'
</script>