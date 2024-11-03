<template>
  <b-card no-body class="shadow h-100">
    <img :src="item.image" class="card-img-top" alt="course img">
    <b-card-body class="pb-0">
      <div class="d-flex justify-content-between mb-2">
        <a href="#" :class="`badge bg-${item.variant} bg-opacity-10 text-${item.variant}`">{{ item.badge }}</a>
        <a href="#" class="text-danger">
          <font-awesome-icon :icon="faHeart" />
        </a>
      </div>
      <b-card-title tag="h5" class="fw-normal"><a href="#">{{ item.title }}</a></b-card-title>
      <p class="mb-2 text-truncate-2">{{ item.description }}</p>
      <ul class="list-inline mb-0 hstack gap-1">
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
        <li class="list-inline-item ms-2 h6 fw-light mb-0">{{ item.rating }}/5.0</li>
      </ul>
    </b-card-body>
    <b-card-footer class="pt-0 pb-3">
      <hr>
      <div class="d-flex justify-content-between">
        <span class="h6 fw-light mb-0"><font-awesome-icon :icon="faClock" class="text-danger me-2" />{{ item.duration }}</span>
        <span class="h6 fw-light mb-0"><font-awesome-icon :icon="faTable" class="text-orange me-2" />{{ item.lectures }} lectures</span>
      </div>
    </b-card-footer>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { BookmarkType } from '@/views/accounts/student/bookmark/components/types';

import { faHeart, faStar, faStarHalfAlt, faTable } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar as faStarR } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<BookmarkType>,
    required: true
  }
});
</script>