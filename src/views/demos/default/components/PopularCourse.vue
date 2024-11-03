<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col lg="8" class="mx-auto text-center">
          <h2 class="fs-1">Most Popular Courses</h2>
          <p class="mb-0">Choose from hundreds of courses from specialist organizations</p>
        </b-col>
      </b-row>

      <b-tabs pills nav-class="nav-pills-bg-soft justify-content-sm-center mb-4 px-3" content-class="mt-4"
        nav-item-class="mb-2 mb-md-0">
        <b-tab title="Web Design" class="fade" title-item-class="me-2 me-sm-5">
          <b-row class="g-4">
            <template v-for="(item, idx) in courseList" :key="idx">
              <b-col sm="6" lg="4" xl="3">
                <PopularCourseCard :item="item" />
              </b-col>
            </template>
          </b-row>
        </b-tab>

        <b-tab title="Development" class="fade" title-item-class="me-2 me-sm-5">
          <b-row class="g-4">
            <template v-for="(item, idx) in courseList" :key="idx">
              <b-col sm="6" lg="4" xl="3" v-if="item.type === 'development'">
                <PopularCourseCard :item="item" />
              </b-col>
            </template>
          </b-row>
        </b-tab>
        <b-tab title="Graphic Design" class="fade" title-item-class="me-2 me-sm-5">
          <b-row class="g-4">
            <template v-for="(item, idx) in courseList" :key="idx">
              <b-col sm="6" lg="4" xl="3" v-if="item.type === 'graphic'">
                <PopularCourseCard :item="item" />
              </b-col>
            </template>
          </b-row>
        </b-tab>
        <b-tab title="Marketing" class="fade" title-item-class="me-2 me-sm-5">
          <b-row class="g-4">
            <template v-for="(item, idx) in courseList" :key="idx">
              <b-col sm="6" lg="4" xl="3" v-if="item.type === 'marketing'">
                <PopularCourseCard :item="item" />
              </b-col>
            </template>
          </b-row>
        </b-tab>
        <b-tab title="Finance" class="fade" title-item-class="me-2 me-sm-5">
          <b-row class="g-4">
            <template v-for="(item, idx) in courseList" :key="idx">
              <b-col sm="6" lg="4" xl="3" v-if="item.type === 'finance'">
                <PopularCourseCard :item="item" />
              </b-col>
            </template>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import PopularCourseCard from '@/views/demos/default/components/PopularCourseCard.vue';
import { courseList } from '@/views/demos/default/components/data';
</script>