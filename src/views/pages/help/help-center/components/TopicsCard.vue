<template>
  <b-card no-body class="bg-light h-100">
    <b-card-header class="bg-light pb-0 border-0">
      <component :is="item.icon" :class="`fs-1 text-${item.variant}`" />
      <b-card-title tag="h5" class="mb-0 mt-4">{{ item.title }}</b-card-title>
    </b-card-header>
    <b-card-body>
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(topic, idx) in item.topics" :key="idx">
          <router-link class="nav-link d-flex" :to="`/help-center/${1001 + idx}`">
            <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
            {{ topic }}
          </router-link>
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { RecommendedType } from '@/views/pages/help/help-center/components/types';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

defineProps({
  item: {
    type: Object as PropType<RecommendedType>,
    required: true
  }
});
</script>