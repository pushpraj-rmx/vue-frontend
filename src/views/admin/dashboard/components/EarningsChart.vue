<template>
  <b-col xxl="8">
    <b-card no-body class="shadow h-100">
      <b-card-header class="p-4 border-bottom">
        <h5 class="card-header-title">Earnings</h5>
      </b-card-header>
      <b-card-body>
        <ApexChart :chart="payoutChart" class="apex-charts" id="ChartPayout" />
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { payoutChart } from '@/views/admin/dashboard/components/data';
</script>