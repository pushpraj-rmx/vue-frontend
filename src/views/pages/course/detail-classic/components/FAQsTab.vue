<template>
  <h5 class="mb-3">Frequently Asked Questions</h5>
  <b-accordion flush>
    <template v-for="(item, idx) in faqs" :key="idx">
      <b-accordion-item body-class="pt-0" :visible="!idx">
        <template #title>
          <span class="text-secondary fw-bold me-3">0{{ idx + 1 }}</span>
          <span class="h6 mb-0">{{ item.question }}</span>
        </template>
        {{ item.answer }}
      </b-accordion-item>
    </template>
  </b-accordion>
</template>
<script setup lang="ts">
import { faqs } from '@/views/pages/course/detail-classic/components/data';
</script>