<template>
  <b-card no-body class="p-2 shadow h-100">
    <div class="rounded-top overflow-hidden">
      <div class="card-overlay-hover">
        <img :src="item.image" class="card-img-top" alt="course img">
      </div>
      <div class="card-img-overlay">
        <div class="card-element-hover d-flex justify-content-end">
          <a href="#" class="icon-md bg-white rounded-circle">
            <font-awesome-icon :icon="faShoppingCart" class="text-danger" />
          </a>
        </div>
      </div>
    </div>
    <b-card-body class="px-2">
      <div class="d-flex justify-content-between">
        <ul class="list-inline hstack gap-2 mb-0">
          <li class="list-inline-item d-flex justify-content-center align-items-center">
            <div class="icon-md bg-orange bg-opacity-10 text-orange rounded-circle">
              <font-awesome-icon :icon="faUserGraduate" />
            </div>
            <span class="h6 fw-light mb-0 ms-2">{{ item.students }}</span>
          </li>
          <li class="list-inline-item d-flex justify-content-center align-items-center">
            <div class="icon-md bg-warning bg-opacity-15 text-warning rounded-circle">
              <font-awesome-icon :icon="faStar" />
            </div>
            <span class="h6 fw-light mb-0 ms-2">{{ item.rating }}</span>
          </li>
        </ul>
        <div class="avatar avatar-sm">
          <img class="avatar-img rounded-circle" :src="item.avatar" alt="avatar">
        </div>
      </div>
      <hr>
      <b-card-title tag="h6"><a href="#">{{ item.title }}</a></b-card-title>
      <div class="d-flex justify-content-between align-items-center mb-0">
        <div>
          <a href="#" class="badge bg-info bg-opacity-10 text-info me-2">
            <font-awesome-icon :icon="faCircle" class="small fw-bold" />
            {{ item.category }}
          </a>
        </div>
        <h5 class="text-success mb-0">{{currency}}{{ item.price }}</h5>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { FeatureType } from '@/views/demos/course/components/types';
import { faShoppingCart, faUserGraduate, faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { currency } from '@/helpers/constants';

defineProps({
  item: {
    type: Object as PropType<FeatureType>,
    required: true
  }
});
</script>