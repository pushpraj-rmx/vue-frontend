<template>
  <section>
    <b-container>
      <b-row class="g-4">
        <b-col sm="6" lg="3" v-for="(item, idx) in subjectList" :key="idx">
          <SubjectCard :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import SubjectCard from '@/views/demos/school/components/SubjectCard.vue';
import { subjectList } from '@/views/demos/school/components/data';
</script>