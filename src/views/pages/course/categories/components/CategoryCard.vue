<template>
  <b-card no-body class="card-body bg-opacity-10 text-center position-relative btn-transition p-4" :class="item.variant">
    <div class="icon-xl bg-body mx-auto rounded-circle mb-3">
      <img :src="item.image" alt="">
    </div>
    <h5 class="mb-2"><a href="#" class="stretched-link">{{ item.title }}</a></h5>
    <h6 class="mb-0">{{ item.courses }} Courses</h6>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { CategoryType } from '@/views/pages/course/categories/components/types';

defineProps({
  item: {
    type: Object as PropType<CategoryType>,
    required: true
  }
});
</script>