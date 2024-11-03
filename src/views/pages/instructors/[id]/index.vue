<template>
  <PagesLayout>
    <PageContent />
    <RelatedInstructor />
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageContent from '@/views/pages/instructors/[id]/components/PageContent.vue';
import RelatedInstructor from '@/views/pages/instructors/[id]/components/RelatedInstructor.vue';

import { useRoute } from "vue-router";
const route = useRoute();
</script>