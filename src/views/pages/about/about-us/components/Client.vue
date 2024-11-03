<template>
  <section class="bg-light">
    <b-container>
      <b-row class="d-flex justify-content-center">
        <b-col cols="6" sm="4" lg="2" v-for="(item, idx) in clients" :key="idx">
          <div class="p-4 grayscale text-center">
            <img :src="item" alt="">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { clients } from '@/views/pages/about/about-us/components/data';
</script>