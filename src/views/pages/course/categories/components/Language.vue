<template>
  <section>
    <b-container>
      <b-row class="mb-4 mx-auto text-center">
        <b-col cols="12">
          <h2 class="mb-0">Choose Languages</h2>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col sm="6" md="4" lg="3" v-for="(item, idx) in languages" :key="idx">
          <LanguagesCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { languages } from '@/views/pages/course/categories/components/data';
import LanguagesCard from '@/views/pages/course/categories/components/LanguagesCard.vue';
</script>