<template>
  <b-card no-body class="card-body shadow rounded-3">
    <div class="d-flex align-items-center">
      <div class="icon-lg rounded-circle" :class="item.iconClass">
        <font-awesome-icon :icon="item.icon" />
      </div>
      <div class="ms-3">
        <h5 class="mb-0"><a href="#" class="stretched-link">{{item.category}}</a></h5>
        <span>{{item.courses}} Courses</span>
      </div>
    </div>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { CategoryType } from '@/views/demos/course/components/types';

defineProps({
  item: {
    type: Object as PropType<CategoryType>,
    required: true
  }
});
</script>