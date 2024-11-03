<template>
  <b-card no-body class="shadow h-100">
    <img :src="item.image" class="card-img-top" alt="course">
    <b-card-body class="pb-0">
      <div class="d-flex justify-content-between mb-2">
        <template v-for="(badge, idx) in item.badges" :key="idx">
          <a href="#" :class="`badge bg-${badge.class} bg-opacity-10 text-${badge.class}`">{{ badge.text }}</a>
        </template>
        <a href="#" class="text-danger" v-if="item.isLike"><font-awesome-icon :icon="faHeart" /></a>
        <a href="#" class="h6 mb-0" v-else><font-awesome-icon :icon="faHeartR" /></a>
      </div>
      <b-card-title tag="h5" class="fw-normal"><a href="#">{{ item.title }}</a></b-card-title>
      <p class="mb-2 text-truncate-2">{{ item.description }}</p>
      <ul class="list-inline mb-0" v-if="item.rating">
        <li className="list-inline-item me-1 small" v-for="(_star, idx) in Array(Math.floor(item.rating)).fill(0)"
          :key="idx">
          <font-awesome-icon :icon="faStar" class="text-warning" />
        </li>
        <li className="list-inline-item me-1 small" v-if="!Number.isInteger(item.rating)">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
        </li>
        <li className="list-inline-item me-1 small"
          v-for="(_star, idx) in item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0)" :key="idx">
          <font-awesome-icon :icon="faStarR" class="text-warning" />
        </li>
        <li class="list-inline-item ms-2 h6 fw-light mb-0">{{ item.rating }}/5.0</li>
      </ul>
    </b-card-body>
    <b-card-footer class="pt-0 pb-3">
      <hr>
      <div class="d-flex justify-content-between">
        <span class="h6 fw-light mb-0"><font-awesome-icon :icon="faClock" class="text-danger me-1" />
          {{ item.duration }}
        </span>
        <span class="h6 fw-light mb-0"><font-awesome-icon :icon="faTable" class="text-orange me-1" />
          {{ item.lectures }} lectures
        </span>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { CourseType } from '@/types';
import { faStar, faTable, faStarHalfAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartR, faClock, faStar as faStarR } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<CourseType>,
    required: true
  }
});
</script>
