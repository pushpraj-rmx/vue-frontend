<template>
  <b-card no-body :class="`bg-${item.background} bg-opacity-50 p-4 overflow-hidden h-100`">
    <b-card-header class="bg-transparent p-0">
      <h6>{{ item.gradeRange }}</h6>
    </b-card-header>
    <b-card-body class="p-0 mt-3">
      <h3 class="mb-2"><a href="#" class="stretched-link">{{ item.title }}</a></h3>
      <h6 class="lead">{{ item.lessons }} Lessons</h6>
      <img :src="item.image" class="opacity-5 mb-n5" alt="">
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { SubjectType } from '@/views/demos/school/components/types';

defineProps({
  item: {
    type: Object as PropType<SubjectType>,
    required: true
  }
});
</script>