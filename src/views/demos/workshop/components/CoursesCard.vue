<template>
  <b-card no-body class="border bg-transparent h-100">
    <img :src="item.image" class="card-img-top" alt="course img">
    <b-card-body>
      <b-card-title tag="h5" class="fw-normal">
        <router-link :to="{name: 'course.detail'}" class="stretched-link">
          {{ item.title }}
        </router-link>
      </b-card-title>
      <div class="d-sm-flex justify-content-between align-items-center">
        <h6 class="mb-0">{{ item.name }}</h6>
        <a href="#" class="btn btn-link p-0 mb-0">View detail
          <BIconArrowRight class="ms-2" />
        </a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { CourseType } from '@/types';
import { BIconArrowRight } from 'bootstrap-icons-vue';

defineProps({
  item: {
    type: Object as PropType<CourseType>,
    required: true
  }
});
</script>