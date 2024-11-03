<template>
  <b-card no-body class="shadow-hover overflow-hidden bg-transparent">
    <div class="position-relative">
      <img class="card-img-top" :src="item.image" alt="Card img">
      <div class="bg-overlay bg-dark opacity-4"></div>
      <div class="card-img-overlay d-flex align-items-start flex-column">
        <div class="w-100 mt-auto d-inline-flex">
          <div class="d-flex align-items-center bg-white p-2 rounded-2">
            <div class="avatar avatar-sm me-2">
              <img class="avatar-img rounded-1" :src="item.instructor?.avatar" alt="avatar">
            </div>
            <div>
              <h6 class="mb-0"><a href="#" class="text-dark">{{ item.instructor?.name }}</a></h6>
              <span class="small">{{ item.instructor?.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-card-body>
      <div class="d-flex justify-content-between mb-3">
        <div class="hstack gap-2">
          <template v-for="(badge, idx) in item.badges" :key="idx">
            <a href="#" class="badge" :class="badge.class">{{ badge.text }}</a>
          </template>
        </div>
        <a href="#" class="text-danger" v-if="item.isLike">
          <font-awesome-icon :icon="faBookmark" class="fa-fw" />
        </a>
        <a href="#" class="h6 fw-light mb-0" v-else>
          <font-awesome-icon :icon="faBookmarkR" class="fa-fw" />
        </a>
      </div>
      <b-card-title tag="h5"><a href="#">{{ item.title }}</a></b-card-title>
      <ul class="list-inline hstack gap-1" v-if="item.rating">
        <li class="list-inline-item h6 fw-light mb-0">{{ item.rating }}</li>
        <li className="list-inline-item me-0 small" v-for="(_star, idx) in Array(Math.floor(item.rating)).fill(0)"
          :key="idx">
          <font-awesome-icon :icon="faStar" class="text-warning" />
        </li>
        <li className="list-inline-item me-0 small" v-if="!Number.isInteger(item.rating)">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
        </li>
        <li className="list-inline-item me-0 small"
          v-for="(_star, idx) in item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0)" :key="idx">
          <font-awesome-icon :icon="faStarR" class="text-warning" />
        </li>
        <li class="list-inline-item ms-2 text-reset">({{ item.reviews }})</li>
      </ul>
      <hr>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h4 class="text-success mb-0">{{ currency }}{{ item.price }}</h4>
        <span class="h6 fw-light mb-0 me-3">
          <font-awesome-icon :icon="faClock" class="text-danger me-2" />
          {{ item.duration }}
        </span>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { CourseType } from '@/types';
import { currency } from '@/helpers/constants';
import { faStar, faStarHalfAlt, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkR, faClock, faStar as faStarR } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<CourseType>,
    required: true
  }
});
</script>