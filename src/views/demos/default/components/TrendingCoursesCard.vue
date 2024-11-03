<template>
  <b-card no-body class="action-trigger-hover border bg-transparent">
    <img :src="item.image" class="card-img-top" alt="course">
    <div class="ribbon mt-3" v-if="item.ribbon"><span>{{ item.ribbon }}</span></div>
    <b-card-body class="pb-0">
      <div class="d-flex justify-content-between mb-3">
        <span class="hstack gap-2">
          <template v-for="(badge, idx) in item.badges" :key="idx">
            <a href="#"
              :class="badge.class === 'primary' ? 'badge bg-primary bg-opacity-10 text-primary' : 'badge text-bg-dark'">
              {{ badge.text }}
            </a>
          </template>
        </span>
        <a href="#" class="h6 fw-light mb-0">
          <font-awesome-icon :icon="faBookmark" />
        </a>
      </div>
      <b-card-title tag="h5"><a href="#">{{ item.title }}</a></b-card-title>
      <div class="d-flex justify-content-between mb-2">
        <div class="hstack gap-2">
          <p class="text-warning m-0">{{ item.rating }}
            <font-awesome-icon :icon="faStar" class="text-warning ms-1" />
          </p>
          <span class="small">({{ item.reviews }})</span>
        </div>
        <div class="hstack gap-2">
          <p class="h6 fw-light mb-0 m-0">{{ item.students }}</p>
          <span class="small">(Student)</span>
        </div>
      </div>
      <div class="hstack gap-3">
        <span class="h6 fw-light mb-0">
          <font-awesome-icon :icon="faClock" class="text-danger me-2" />
          {{ item.time }}
        </span>
        <span class="h6 fw-light mb-0">
          <font-awesome-icon :icon="faTable" class="text-orange me-2" />
          {{ item.lectures }} lectures
        </span>
      </div>
    </b-card-body>
    <b-card-footer class="pt-0 bg-transparent">
      <hr>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-sm">
            <img class="avatar-img rounded-1" :src="item.instructor.avatar" alt="avatar">
          </div>
          <p class="mb-0 ms-2"><a href="#" class="h6 fw-light mb-0">{{ item.instructor.name }}</a></p>
        </div>
        <div>
          <h4 class="text-success mb-0 item-show">{{ item.price }}</h4>
          <a href="#" class="btn btn-sm btn-success-soft item-show-hover">
            <font-awesome-icon :icon="faShoppingCart" class="me-2" />
            Add to cart
          </a>
        </div>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TrendingType } from '@/views/demos/default/components/types';
import { faShoppingCart, faStar, faTable } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<TrendingType>,
    required: true
  }
});
</script>
