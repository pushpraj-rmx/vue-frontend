<template>
  <AdminLayout>
    <b-row class="mb-3">
      <b-col cols="12" class="d-sm-flex justify-content-between align-items-center">
        <h1 class="h3 mb-2 mb-sm-0">Courses</h1>
        <router-link :to="{ name: 'instructor.create.course' }" class="btn btn-sm btn-primary mb-0">
          Create a Course
        </router-link>
      </b-col>
    </b-row>
    <Widgets />
    <TableList />
  </AdminLayout>
</template>
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import Widgets from '@/views/admin/courses/list/components/Widgets.vue';
import TableList from '@/views/admin/courses/list/components/TableList.vue';
</script>