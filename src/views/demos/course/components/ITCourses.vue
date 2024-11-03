<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="text-center mx-auto">
          <h2 class="fs-1">Top Courses for IT</h2>
          <p class="mb-0">Information Technology Courses to expand your skills and boost your career & salary</p>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in itCourseList" :key="idx">
          <b-card no-body class="card-metro overflow-hidden rounded-3">
            <img :src="item.image" alt="">
            <div class="card-img-overlay d-flex">
              <div class="mt-auto card-text">
                <a href="#" class="text-white mt-auto h5 stretched-link">{{ item.title }}</a>
                <div class="text-white">{{ item.courses }} Courses</div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { itCourseList } from '@/views/demos/course/components/data';
</script>