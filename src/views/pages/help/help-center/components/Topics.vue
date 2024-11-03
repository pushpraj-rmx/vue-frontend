<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <h2 class="text-center mb-4">Recommended Topics</h2>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col md="6" xl="3" v-for="(item, idx) in recommendedList" :key="idx">
          <TopicsCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { recommendedList } from '@/views/pages/help/help-center/components/data';
import TopicsCard from '@/views/pages/help/help-center/components/TopicsCard.vue';
</script>