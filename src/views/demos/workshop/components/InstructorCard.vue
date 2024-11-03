<template>
  <b-card no-body class="p-2 shadow h-100">
    <div class="card-image-scale rounded-3 position-relative">
      <img :src="item.image" class="card-img" alt="">
      <div class="card-img-overlay d-flex flex-column p-2 z-index-1">
        <div>
          <span class="badge text-bg-dark">
            <BIconStarFill class="text-warning me-2" />
            {{ item.rating }}
          </span>
        </div>
      </div>
    </div>

    <b-card-body class="px-2">
      <b-card-title tag="h5"><router-link :to="{name: 'workshop.detail'}" class="stretched-link">{{ item.title }}</router-link></b-card-title>
      <h6 class="mb-0 fw-normal">With {{ item.name }}</h6>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { InstructorType } from '@/types';
import { BIconStarFill } from 'bootstrap-icons-vue';

defineProps({
  item: {
    type: Object as PropType<InstructorType>,
    required: true
  }
});
</script>