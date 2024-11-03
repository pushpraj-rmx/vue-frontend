<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-3">
        <h1 class="h3 mb-2 mb-sm-0">Dashboard</h1>
      </b-col>
    </b-row>

    <Counter />

    <b-row class="g-4 mb-4">
      <EarningsChart />
      <SupportRequests />
    </b-row>

    <b-row class="g-4">
      <TopInstructors />
      <NoticeBoard />
      <TrafficSourcesChart />
    </b-row>
  </AdminLayout>
</template>
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';

import Counter from '@/views/admin/dashboard/components/Counter.vue';
import EarningsChart from '@/views/admin/dashboard/components/EarningsChart.vue';
import SupportRequests from '@/views/admin/dashboard/components/SupportRequests.vue';
import TopInstructors from '@/views/admin/dashboard/components/TopInstructors.vue';
import NoticeBoard from '@/views/admin/dashboard/components/NoticeBoard.vue';
import TrafficSourcesChart from '@/views/admin/dashboard/components/TrafficSourcesChart.vue';
</script>