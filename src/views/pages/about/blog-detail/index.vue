<template>
  <PagesLayout>

    <MainContent />

    <RelatedBlog />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';
import MainContent from '@/views/pages/about/blog-detail/components/MainContent.vue';
import RelatedBlog from '@/views/pages/about/blog-detail/components/RelatedBlog.vue';
</script>