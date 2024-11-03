<template>
  <b-row class="g-4">
    <b-col md="6" xxl="4" v-for="(item, idx) in studentList" :key="idx">
      <StudentCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { studentList } from '@/views/admin/studentList/components/data';
import StudentCard from '@/views/admin/studentList/components/StudentCard.vue';
</script>