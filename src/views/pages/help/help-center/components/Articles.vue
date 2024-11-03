<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <h2 class="text-center mb-4">Popular Articles</h2>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col xl="6" v-for="(item, idx) in articleList" :key="idx">
          <ArticlesCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { articleList } from '@/views/pages/help/help-center/components/data';
import ArticlesCard from '@/views/pages/help/help-center/components/ArticlesCard.vue';
</script>