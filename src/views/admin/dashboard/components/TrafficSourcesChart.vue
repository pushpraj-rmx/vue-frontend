<template>
  <b-col lg="6" xxl="4">
    <b-card no-body class="shadow h-100">
      <b-card-header class="border-bottom d-flex justify-content-between align-items-center p-4">
        <h5 class="card-header-title">Traffic Sources</h5>
        <a href="#" class="btn btn-link p-0 mb-0">View all</a>
      </b-card-header>
      <b-card-body class="p-4">
        <b-col sm="6" class="mx-auto">
          <ApexChart :chart="trafficViewsChart" class="apex-charts" id="ChartTrafficViews" />
        </b-col>

        <ul class="list-group list-group-borderless mt-3">
          <li class="list-group-item">
            <font-awesome-icon :icon="faCircle" class="text-primary me-1" />
            Create a Design System in Figma
          </li>
          <li class="list-group-item">
            <font-awesome-icon :icon="faCircle" class="text-success me-1" />
            The Complete Digital Marketing Course - 12 Courses in 1
          </li>
          <li class="list-group-item">
            <font-awesome-icon :icon="faCircle" class="text-warning me-1" />
            Google Ads Training: Become a PPC Expert
          </li>
          <li class="list-group-item">
            <font-awesome-icon :icon="faCircle" class="text-danger me-1" />
            Microsoft Excel - Excel from Beginner to Advanced
          </li>
        </ul>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { trafficViewsChart } from '@/views/admin/dashboard/components/data';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
</script>