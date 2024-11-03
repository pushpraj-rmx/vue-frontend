<template>
  <section>
    <b-container>
      <b-row class="g-4">
        <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in categoryList" :key="idx">
          <CategoryCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { categoryList } from '@/views/demos/course/components/data';
import CategoryCard from '@/views/demos/course/components/CategoryCard.vue';
</script>