<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-3">
        <h1 class="h3 mb-2 mb-sm-0">Instructor detail</h1>
      </b-col>
    </b-row>

    <b-row class="g-4">
      <PersonalInfo />
      <b-col xxl="5">
        <b-row class="g-4">
          <StudentsChart />
          <EnrollmentChart />
        </b-row>
      </b-col>
      <CoursesList />
      <Reviews />
    </b-row>
  </AdminLayout>
</template>
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';

import PersonalInfo from '@/views/admin/instructors/details/components/PersonalInfo.vue';
import StudentsChart from '@/views/admin/instructors/details/components/StudentsChart.vue';
import EnrollmentChart from '@/views/admin/instructors/details/components/EnrollmentChart.vue';
import CoursesList from '@/views/admin/instructors/details/components/CoursesList.vue';
import Reviews from '@/views/admin/instructors/details/components/Reviews.vue';
</script>