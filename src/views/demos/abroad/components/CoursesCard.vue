<template>
  <b-card no-body class="text-center bg-transparent">
    <img :src="item.image" class="card-img" alt="Course img">
    <b-card-body class="px-2">
      <b-card-title tag="h5">{{ item.title }}</b-card-title>
      <a href="#" class="btn btn-sm btn-danger mb-0">Enquire Now</a>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { OfferType } from '@/views/demos/abroad/components/types';

defineProps({
  item: {
    type: Object as PropType<OfferType>,
    required: true
  }
});
</script>
