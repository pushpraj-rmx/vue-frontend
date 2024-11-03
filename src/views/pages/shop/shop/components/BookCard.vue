<template>
  <b-card no-body class="shadow h-100">
    <div class="position-relative">
      <img :src="item.image" class="card-img-top" alt="book image">
      <div class="card-img-overlay d-flex z-index-0 p-3">
        <div class="w-100 mb-auto d-flex justify-content-end">
          <div class="icon-md bg-dark rounded-circle fs-5">
            <a href="#" class="text-white">
              <component :is="item.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <b-card-body class="px-3">
      <b-card-title tag="h5" class="mb-0">
        <router-link :to="`/shop/${item.id}`" class="stretched-link">
          {{ item.title }}
        </router-link>
      </b-card-title>
    </b-card-body>

    <b-card-footer class="pt-0 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <span class="h6 fw-light mb-0">By {{ item.author }}</span>
        <h5 class="text-success mb-0">{{ currency }}{{ item.price }}</h5>
      </div>
    </b-card-footer>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { ShopGridType } from '@/views/pages/shop/shop/components/types';
import { currency } from '@/helpers/constants';

defineProps({
  item: {
    type: Object as PropType<ShopGridType>,
    required: true
  }
});
</script>