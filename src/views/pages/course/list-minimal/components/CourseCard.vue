<template>
  <b-card no-body class="rounded overflow-hidden shadow">
    <b-row class="g-0">
      <b-col md="4">
        <img :src="item.image" alt="card img">
      </b-col>

      <b-col md="8">
        <b-card-body>
          <div class="d-flex justify-content-between mb-2">
            <b-card-title tag="h5" class="mb-0"><a href="#">{{ item.title }}</a>
            </b-card-title>
            <a href="#" v-if="item.isLike">
              <font-awesome-icon :icon="faHeart" class="text-danger" />
            </a>
            <a href="#" class="h6 fw-light" v-else>
              <font-awesome-icon :icon="faHeartR" />
            </a>
          </div>
          <ul class="list-inline mb-1">
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
          <ul class="list-inline mb-0">
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
            <li class="list-inline-item ms-2 h6 fw-light">{{ item.rating }}/5.0</li>
          </ul>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { ProductType } from '@/types';
import { faHeart, faTable, faSignal, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar as faStarR, faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';

defineProps({
  item: {
    type: Object as PropType<ProductType>,
    required: true
  }
});
</script>