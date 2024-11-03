<template>
  <b-card no-body class="bg-transparent">
    <div class="overflow-hidden rounded-3">
      <img :src="item.image" class="card-img" alt="course img">
      <div class="bg-overlay bg-dark opacity-4"></div>
      <div class="card-img-overlay d-flex align-items-start p-3">
        <a href="#" :class="`badge text-bg-${item.badgeColor}`">{{ item.badge }}</a>
      </div>
    </div>

    <b-card-body>
      <b-card-title tag="h5"><a href="#">{{ item.title }}</a></b-card-title>
      <p class="text-truncate-2">{{ item.description }}</p>
      <div class="d-flex justify-content-between">
        <h6 class="mb-0"><a href="#">{{ item.author }}</a></h6>
        <span class="small">{{ item.time }}</span>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { GridListType } from '@/views/pages/about/blog-grid/components/types';

defineProps({
  item: {
    type: Object as PropType<GridListType>,
    required: true
  }
});
</script>