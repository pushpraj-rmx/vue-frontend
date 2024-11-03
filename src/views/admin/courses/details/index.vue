<template>
  <AdminLayout>
    <b-row class="mb-3">
      <b-col cols="12" class="d-sm-flex justify-content-between align-items-center">
        <h1 class="h3 mb-2 mb-sm-0">Course Details</h1>
        <router-link :to="{ name: 'admin.course.detail' }" class="btn btn-sm btn-primary mb-0">Edit Course</router-link>
      </b-col>
    </b-row>

    <b-row class="g-4">
      <CourseInfo />
      <b-col xxl="6">
        <b-row class="g-4">
          <EarningChart />
          <EnrollmentChart />
        </b-row>
      </b-col>
      <Reviews />
    </b-row>
  </AdminLayout>
</template>
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';

import CourseInfo from '@/views/admin/courses/details/components/CourseInfo.vue';
import EarningChart from '@/views/admin/courses/details/components/EarningChart.vue';
import EnrollmentChart from '@/views/admin/courses/details/components/EnrollmentChart.vue';
import Reviews from '@/views/admin/courses/details/components/Reviews.vue';
</script>