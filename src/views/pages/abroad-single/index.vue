<template>
  <PagesLayout>
    <MainBanner />

    <Details />

    <ActionBox />
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import MainBanner from '@/views/pages/abroad-single/components/MainBanner.vue';
import Details from '@/views/pages/abroad-single/components/Details.vue';
import ActionBox from '@/views/pages/abroad-single/components/ActionBox.vue';
</script>