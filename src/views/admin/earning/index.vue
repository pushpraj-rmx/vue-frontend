<template>
  <AdminLayout>
    <b-row class="mb-3">
      <b-col cols="12">
        <h1 class="h3 mb-0">Earnings</h1>
      </b-col>
    </b-row>

    <Widgets />

    <InvoiceHistory />
  </AdminLayout>
</template>
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';

import Widgets from '@/views/admin/earning/components/Widgets.vue';
import InvoiceHistory from '@/views/admin/earning/components/InvoiceHistory.vue';
</script>