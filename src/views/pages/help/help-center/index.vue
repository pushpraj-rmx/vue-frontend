<template>
  <TopBar6 />
  <main>
    <PageBanner />
    <Topics />
    <Articles />
    <ActionBox />
  </main>
  <Footer1 />
</template>
<script setup lang="ts">
import TopBar6 from '@/views/pages/help/help-center/components/TopBar6.vue';
import PageBanner from '@/views/pages/help/help-center/components/PageBanner.vue';
import Topics from '@/views/pages/help/help-center/components/Topics.vue';
import Articles from '@/views/pages/help/help-center/components/Articles.vue';
import ActionBox from '@/views/pages/help/help-center/components/ActionBox.vue';
import Footer1 from '@/views/pages/help/help-center/components/Footer1.vue';
</script>