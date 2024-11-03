<template>
  <b-col lg="8">
    <b-card no-body class="shadow rounded-2 p-0">
      <b-card-header class="border-bottom px-4 py-3">
        <ul class="nav nav-pills nav-tabs-line py-0" id="course-pills-tab">
          <li class="nav-item me-2 me-sm-4">
            <button class="nav-link mb-2 mb-md-0" :class="show === 1 && 'active'" @click="show = 1">Overview</button>
          </li>
          <li class="nav-item me-2 me-sm-4">
            <button class="nav-link mb-2 mb-md-0" :class="show === 2 && 'active'" @click="show = 2">Curriculum</button>
          </li>
          <li class="nav-item me-2 me-sm-4">
            <button class="nav-link mb-2 mb-md-0" :class="show === 3 && 'active'" @click="show = 3">Instructor</button>
          </li>
          <li class="nav-item me-2 me-sm-4">
            <button class="nav-link mb-2 mb-md-0" :class="show === 4 && 'active'" @click="show = 4">Reviews</button>
          </li>
          <li class="nav-item me-2 me-sm-4">
            <button class="nav-link mb-2 mb-md-0" :class="show === 5 && 'active'" @click="show = 5">FAQs </button>
          </li>
          <li class="nav-item me-2 me-sm-4">
            <button class="nav-link mb-2 mb-md-0" :class="show === 6 && 'active'" @click="show = 6">Comment</button>
          </li>
        </ul>
      </b-card-header>

      <b-card-body class="p-4">
        <div class="tab-content pt-2" id="course-pills-tabContent">
          <div class="tab-pane fade" :class="show === 1 && 'show active'">
            <OverviewTab />
          </div>

          <div class="tab-pane fade" :class="show === 2 && 'show active'">
            <CurriculumTab />
          </div>

          <div class="tab-pane fade" :class="show === 3 && 'show active'">
            <InstructorTab />
          </div>

          <div class="tab-pane fade" :class="show === 4 && 'show active'">
            <ReviewsTab />
          </div>

          <div class="tab-pane fade" :class="show === 5 && 'show active'">
            <FAQsTab />
          </div>

          <div class="tab-pane fade" :class="show === 6 && 'show active'">
            <CommentTab />
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(1);

import OverviewTab from '@/views/pages/course/detail-classic/components/OverviewTab.vue';
import CurriculumTab from '@/views/pages/course/detail-classic/components/CurriculumTab.vue';
import InstructorTab from '@/views/pages/course/detail-classic/components/InstructorTab.vue';
import ReviewsTab from '@/views/pages/course/detail-classic/components/ReviewsTab.vue';
import FAQsTab from '@/views/pages/course/detail-classic/components/FAQsTab.vue';
import CommentTab from '@/views/pages/course/detail-classic/components/CommentTab.vue';
</script>