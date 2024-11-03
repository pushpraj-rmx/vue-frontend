<template>
  <div class="bg-light rounded-2 p-3 d-flex align-items-center position-relative justify-content-center">
    <img :src="item.flag" class="me-3 h-40px" alt="">
    <h5 class="mb-0"><a href="#" class="stretched-link text-primary-hover"></a>{{ item.name }}</h5>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { LanguageType } from '@/views/pages/course/categories/components/types';

defineProps({
  item: {
    type: Object as PropType<LanguageType>,
    required: true
  }
});
</script>