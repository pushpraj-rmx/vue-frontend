<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col md="8" class="text-center mx-auto">
          <h2 class="fs-1">Featured Courses With Their Instructors</h2>
          <p class="mb-0">Space is limited. Reserve your spot today!</p>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in instructorsList" :key="idx">
          <InstructorCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { instructorsList } from '@/views/demos/workshop/components/data';
import InstructorCard from '@/views/demos/workshop/components/InstructorCard.vue';
</script>