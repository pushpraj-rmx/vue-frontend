<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="text-center mx-auto">
          <h2 class="fs-1 mb-0">Featured Courses</h2>
          <p class="mb-0">Explore top picks of the week </p>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col md="6" lg="4" xxl="3" v-for="(item, idx) in featureList" :key="idx">
          <CourseCard :item="item" />
        </b-col>
      </b-row>
      <div class="text-center mt-5">
        <a href="#" class="btn btn-primary-soft">View more
          <font-awesome-icon :icon="faSync" class="ms-1" />
        </a>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { featureList } from '@/views/demos/course/components/data';
import CourseCard from '@/views/demos/course/components/CourseCard.vue';
import { faSync } from '@fortawesome/free-solid-svg-icons';
</script>