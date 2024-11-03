<template>
  <TopBar3 />
  <main>

    <MainBanner />

    <CourseSlider />

    <UserLoginContent />

    <TrendingCourse />

    <PopularCourse />

    <Instructor />

    <ActionBox />

    <Client />

  </main>
  <Footer3 />
</template>
<script setup lang="ts">
import TopBar3 from '@/views/demos/academy/components/TopBar3.vue';
import MainBanner from '@/views/demos/academy/components/MainBanner.vue';
import CourseSlider from '@/views/demos/academy/components/CourseSlider.vue';
import UserLoginContent from '@/views/demos/academy/components/UserLoginContent.vue';
import TrendingCourse from '@/views/demos/academy/components/TrendingCourse.vue';
import PopularCourse from '@/views/demos/academy/components/PopularCourse.vue';
import Instructor from '@/views/demos/academy/components/Instructor.vue';
import ActionBox from '@/views/demos/academy/components/ActionBox.vue';
import Client from '@/views/demos/academy/components/Client.vue';
import Footer3 from '@/views/demos/academy/components/Footer3.vue';
</script>