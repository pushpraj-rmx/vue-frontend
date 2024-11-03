<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row>
        <b-col lg="8" class="mb-4">
          <h2 class="mb-0">Our <span class="text-warning">Trending</span> Courses</h2>
          <p class="mb-0">Check out most 🔥 courses in the market</p>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col md="6" xl="4" v-for="(item, idx) in trendingCourses" :key="idx">
          <TrendingCoursesCard :item="item" />
        </b-col>
      </b-row>

      <div class="text-center mt-5">
        <a href="#" class="btn btn-primary-soft mb-0">View more
          <font-awesome-icon :icon="faSync" class="ms-1" />
        </a>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { trendingCourses } from '@/views/demos/education/components/data';
import TrendingCoursesCard from '@/views/demos/education/components/TrendingCoursesCard.vue';
import { faSync } from '@fortawesome/free-solid-svg-icons';
</script>