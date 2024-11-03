<template>
  <AdminLayout>
    <b-row class="mb-3">
      <b-col cols="12">
        <h1 class="h3 mb-0">Reviews</h1>
      </b-col>
    </b-row>

    <ReviewTable />

    <b-row class="g-4">
      <TopRatedCourses />
      <ReviewsAnalyticsChart />
    </b-row>
  </AdminLayout>
</template>
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';

import ReviewTable from '@/views/admin/reviews/components/ReviewTable.vue';
import TopRatedCourses from '@/views/admin/reviews/components/TopRatedCourses.vue';
import ReviewsAnalyticsChart from '@/views/admin/reviews/components/ReviewsAnalyticsChart.vue';
</script>