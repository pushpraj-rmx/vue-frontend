<template>
  <b-card no-body class="bg-transparent">
    <div class="position-relative">
      <img :src="item.image" class="card-img" alt="course img">
      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
        <div class="w-100 mb-auto d-flex justify-content-end">
          <a href="#" class="icon-sm bg-white rounded-2">
            <font-awesome-icon :icon="faHeart" class="text-danger" v-if="item.isWishlist" />
            <font-awesome-icon :icon="faHeartR" class="text-danger" v-else />
          </a>
        </div>
        <div class="w-100 mt-auto">
          <a href="#" class="badge text-bg-white fs-6 rounded-1">
            <font-awesome-icon :icon="faCalendarAlt" class="text-orange me-1" />
            {{ item.date }}
          </a>
        </div>
      </div>
    </div>
    <b-card-body class="px-2">
      <b-card-title tag="h5"><a href="#">{{ item.title }}</a></b-card-title>
      <p class="mb-0 text-truncate-2">{{ item.description }}</p>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { EventType } from '@/views/demos/university/components/types';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<EventType>,
    required: true
  }
});
</script>