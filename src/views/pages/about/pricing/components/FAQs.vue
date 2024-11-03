<template>
  <section class="pt-0">
    <b-container class="mt-4">
      <b-row class="mb-5">
        <b-col md="8" class="text-center mx-auto">
          <h2>Frequently asked questions</h2>
          <p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
        </b-col>
      </b-row>

      <b-row class="g-4 g-md-5">
        <b-col md="6" v-for="(item, idx) in faqs" :key="idx">
          <h5>{{ item.question }}</h5>
          <p>{{ item.answer }}</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faqs } from '@/views/pages/about/pricing/components/data';
</script>