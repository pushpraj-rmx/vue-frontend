<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12">
          <h2 class="mb-0">Welcome back user!</h2>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col xl="8">
          <b-card no-body class="p-2 bg-transparent border">
            <b-row class="g-0">
              <b-col md="3">
                <img :src="courses01" class="rounded-2" alt="Card img">
              </b-col>
              <b-col md="9">
                <b-card-body>
                  <div class="d-flex justify-content-between">
                    <div>
                      <a href="#" class="badge text-bg-primary">Marketing</a>{{ ' ' }}
                      <a href="#" class="badge text-bg-dark">Beginner</a>
                    </div>

                    <b-dropdown end variant="link" class="flex-shrink-0"
                      toggle-class="text-primary-hover text-secondary p-0 mb-0" menu-class="dropdown-menu-end" no-caret>
                      <template #button-content>
                        <BIconThreeDotsVertical />
                      </template>
                      <b-dropdown-item href="#">Upgrade Course</b-dropdown-item>
                      <b-dropdown-item href="#">Rate Course</b-dropdown-item>
                      <b-dropdown-item href="#">Share course</b-dropdown-item>
                      <b-dropdown-item href="#">Unroll</b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <b-card-title tag="h5" class="mt-3 mb-0">
                    <a href="#">The Complete Digital Marketing Course - 12 Courses in 1</a>
                  </b-card-title>

                  <div class="overflow-hidden mt-3">
                    <div class="d-flex justify-content-between">
                      <h6 class="uppercase">Overall Progress</h6>
                      <span class="h6 mb-0">20%</span>
                    </div>
                    <b-progress class="progress-sm bg-success bg-opacity-10">
                      <b-progress-bar class="bg-success" :value="20" />
                    </b-progress>
                  </div>

                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <ul class="nav nav-divider small mb-0">
                      <li class="nav-item h6 mb-0">Week 2</li>
                      <li class="nav-item">Lecture 12</li>
                    </ul>

                    <a href="#" class="btn btn-sm btn-primary-soft mb-0">Continue</a>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col xl="4">
          <b-card no-body class="card-body bg-transparent border">
            <h5 class="mb-3">Schedule exam</h5>
            <div class="d-flex align-items-center position-relative">
              <a href="#" class="btn btn-primary-soft btn-round mb-0">
                <font-awesome-icon :icon="faQuestionCircle" />
              </a>
              <div class="ms-3">
                <a href="#" class="d-inline-block text-truncate mb-0 h6 fw-normal stretched-link">Quiz - Digital
                  Marketing</a>
                <ul class="nav nav-divider small mb-0">
                  <li class="nav-item">12 June</li>
                  <li class="nav-item">20 pts</li>
                  <li class="nav-item">30 min</li>
                </ul>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { BIconThreeDotsVertical } from 'bootstrap-icons-vue';
import courses01 from '@/assets/images/courses/4by3/01.jpg';
</script>