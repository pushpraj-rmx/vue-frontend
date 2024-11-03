<template>
  <section class="position-relative pb-0 pb-sm-5">
    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="mx-auto text-center">
          <h2>Top Listed Subjects</h2>
          <p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col sm="6" md="4" xl="3" v-for="(item, idx) in subjectList" :key="idx">
          <div class="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
            <div class="icon-xl bg-body mx-auto rounded-circle mb-3">
              <img :src="item.image" alt="">
            </div>
            <h5 class="mb-1"><a href="#" class="stretched-link">{{ item.title }}</a></h5>
            <span class="mb-0">{{ item.courses }} Course</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { subjectList } from '@/views/demos/landing/components/data';
</script>