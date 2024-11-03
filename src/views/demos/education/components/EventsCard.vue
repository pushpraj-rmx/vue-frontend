<template>
  <b-card no-body class="bg-transparent">
    <div class="position-relative">
      <img :src="item.image" class="card-img" alt="course">
      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
        <div class="w-100 mt-auto">
          <a href="#" class="badge text-bg-white fs-6 rounded-1">
            <font-awesome-icon :icon="faCalendarAlt" class="text-orange me-2" />
            {{ item.date }}
          </a>
        </div>
      </div>
    </div>

    <b-card-body class="px-2">
      <b-card-title tag="h5"><a href="#">{{ item.title }}</a></b-card-title>
      <div class="d-flex justify-content-between align-items-center">
        <Address class="mb-0">
          <font-awesome-icon :icon="faMapMarkerAlt" class="me-2" />
          {{ item.location }}
        </Address>
        <a href="#" class="btn btn-sm btn-primary-soft mb-0">Join now</a>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { EventType } from '@/views/demos/education/components/types';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<EventType>,
    required: true
  }
});
</script>
