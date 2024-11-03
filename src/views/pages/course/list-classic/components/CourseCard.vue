<template>
  <b-card no-body class="shadow overflow-hidden p-2">
    <b-row class="g-0">
      <b-col md="5" class="overflow-hidden">
        <img :src="item.image" class="rounded-2" alt="Card img">
        <div class="card-img-overlay" v-if="item.ribbon">
          <div class="ribbon"><span>Free</span></div>
        </div>
      </b-col>
      <b-col md="7">
        <b-card-body>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <a href="#" class="badge text-bg-primary mb-2 mb-sm-0">{{ item.badge?.text }}</a>
            <div>
              <span class="h6 fw-light me-3">
                <font-awesome-icon :icon="faStar" class="text-warning" />
                4.5
              </span>
              <a href="#" class="text-danger">
                <font-awesome-icon :icon="faHeart" />
              </a>
            </div>
          </div>

          <b-card-title tag="h5"><a href="#">{{ item.title }}</a></b-card-title>
          <p class="text-truncate-2 d-none d-lg-block">{{ item.description }}</p>
          <ul class="list-inline">
            <li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
              <font-awesome-icon :icon="faClock" class="text-danger me-1" />
              {{ item.duration }}
            </li>{{ ' ' }}
            <li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
              <font-awesome-icon :icon="faTable" class="text-orange me-1" />
              {{ item.lectures }} lectures
            </li>{{ ' ' }}
            <li class="list-inline-item h6 fw-light">
              <font-awesome-icon :icon="faSignal" class="text-success me-1" />
              {{ item.level }}
            </li>
          </ul>
          <div class="d-sm-flex justify-content-sm-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="avatar">
                <img class="avatar-img rounded-circle" :src="item.instructor?.avatar" alt="avatar">
              </div>
              <p class="mb-0 ms-2"><a href="#" class="h6 fw-light">{{ item.instructor?.name }}</a></p>
            </div>
            <div class="mt-3 mt-sm-0">
              <a href="#" class="btn btn-dark">View more</a>
            </div>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { ProductType } from '@/types';
import { faStar, faHeart, faTable, faSignal } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<ProductType>,
    required: true
  }
});
</script>