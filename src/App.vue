<template>
  <RouterView />
  <BackToTop />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import BackToTop from '@/components/BackToTop.vue';
import AOS from 'aos';

import configureFakeBackend from '@/helpers/fake-backend';

import { useLayoutStore } from '@/stores/layout';

configureFakeBackend();
const useLayout = useLayoutStore();
useLayout.setTheme(useLayout.theme);

onMounted(() => {
  AOS.init();
});
</script>
