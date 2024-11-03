<template>
  <b-card no-body class="shadow h-100">
    <img :src="item.image" class="card-img-top" alt="course img">
    <b-card-body class="pb-0">
      <div class="d-flex justify-content-between mb-2">
        <a href="#" :class="`badge bg-${item.badge?.class} bg-opacity-10 text-${item.badge?.class}`">
          {{ item.badge?.text }}
        </a>
        <a href="#" class="h6 text-danger mb-0" v-if="item.isLike"><font-awesome-icon :icon="faHeart" /></a>
        <a href="#" class="h6 fw-light mb-0" v-else><font-awesome-icon :icon="faHeartR" /></a>
      </div>
      <b-card-title tag="h5"><a href="#">{{ item.title }}</a></b-card-title>
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
        <span class="h6 fw-light mb-0"><font-awesome-icon :icon="faTable" class="text-orange me-2" />{{ item.lectures }}
          lectures</span>
      </div>
    </b-card-footer>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { ProductType } from '@/types';

import { faStar, faStarHalfAlt, faTable, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faClock, faHeart as faHeartR, faStar as faStarR } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<ProductType>,
    required: true
  }
});
</script>