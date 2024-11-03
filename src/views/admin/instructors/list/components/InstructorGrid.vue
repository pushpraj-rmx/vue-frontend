<template>
  <b-row class="g-4">
    <b-col md="6" xxl="4" v-for="(item, idx) in instructorList" :key="idx">
      <InstructorCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { instructorList } from '@/views/admin/instructors/list/components/data';
import InstructorCard from '@/views/admin/instructors/list/components/InstructorCard.vue';
</script>