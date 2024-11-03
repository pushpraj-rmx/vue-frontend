<template>
  <b-col md="6" xxl="12">
    <b-card no-body class="bg-transparent border overflow-hidden">
      <b-card-header class="bg-light border-bottom">
        <h5 class="card-header-title mb-0">New Enrollment</h5>
      </b-card-header>
      <b-card-body class="p-0">
        <div class="d-sm-flex justify-content-between p-4">
          <h4 class="text-blue mb-0">140</h4>
          <p class="mb-0"><span class="text-success me-1">0.35%<BIconArrowUp /></span>vs last Week
          </p>
        </div>
        <ApexChart :chart="newEnrollmentChart" class="apex-charts" id="activeChartstudent2" />
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { newEnrollmentChart } from '@/views/admin/instructors/details/components/data';
import { BIconArrowUp } from 'bootstrap-icons-vue';
</script>