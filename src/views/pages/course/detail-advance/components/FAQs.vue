<template>
  <b-col cols="12">
    <b-card no-body class="border rounded-3">
      <b-card-header class="border-bottom">
        <h3 class="mb-0">Frequently Asked Questions</h3>
      </b-card-header>
      <b-card-body>
        <template v-for="(item, idx) in faqsData" :key="idx">
          <div :class="idx && 'mt-4'">
            <h6>{{ item.question }}</h6>
            <p class="mb-0">{{ item.answer }}</p>
          </div>
        </template>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { faqsData } from '@/views/pages/course/detail-advance/components/data';
</script>