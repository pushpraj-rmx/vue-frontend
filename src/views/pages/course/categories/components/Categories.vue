<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="mx-auto text-center">
          <h2>Choose a Categories</h2>
          <p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col sm="6" md="4" xl="3" v-for="(item, idx) in courseCategories" :key="idx">
          <CategoryCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { courseCategories } from '@/views/pages/course/categories/components/data';
import CategoryCard from '@/views/pages/course/categories/components/CategoryCard.vue';
</script>