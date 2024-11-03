<template>
  <section class="pt-5">
    <b-container>
      <div class="d-sm-flex justify-content-sm-between align-items-center mb-4">
        <h5 class="mb-2 mb-sm-0">You have 4 items in wishlist</h5>
        <div class="text-end">
          <b-button :variant="null" class="btn-danger-soft mb-0">
            <font-awesome-icon :icon="faTrash" class="me-1" />
            Remove all
          </b-button>
        </div>
      </div>
      <b-row class="g-4">
        <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in wishList" :key="idx">
          <ProductCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { wishList } from '@/views/pages/shop/wishlist/components/data';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/views/pages/shop/wishlist/components/ProductCard.vue';
</script>