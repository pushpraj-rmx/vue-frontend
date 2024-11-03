<template>
  <b-col xxl="5">
    <b-card no-body class="bg-transparent border h-100">
      <b-card-header class="bg-light border-bottom">
        <h5 class="mb-0">Reviews Analytics</h5>
      </b-card-header>
      <b-card-body class="pb-0">
        <b-row>
          <b-col sm="6" class="mb-4">
            <div class="bg-success bg-opacity-10 p-4 rounded">
              <p class="mb-0">Total Positive Review</p>
              <h5 class="mb-0">85%</h5>
            </div>
          </b-col>
          <b-col sm="6" class="mb-4">
            <div class="bg-danger bg-opacity-10 p-4 rounded">
              <p class="mb-0">Total Negative Review</p>
              <h5 class="mb-0">15%</h5>
            </div>
          </b-col>
        </b-row>
        <ApexChart :chart="pageViewsChart" class="mb-3 mb-xl-0 d-flex justify-content-center apex-charts"
          id="ChartPayout" />
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { pageViewsChart } from '@/views/admin/reviews/components/data';
</script>