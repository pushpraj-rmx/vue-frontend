<template>
  <TopBar8 :showShopCart="showShopCart" />
  <main>
    <slot />
  </main>
  <Footer4 />
</template>
<script setup lang="ts">
import TopBar8 from '@/layouts/components/TopBar8.vue';
import Footer4 from '@/layouts/components/Footer4.vue';

type PageLayoutPropType = {
  showShopCart?: boolean;
};

defineProps<PageLayoutPropType>();
</script>