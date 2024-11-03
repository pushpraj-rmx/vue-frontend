<template>
  <b-col cols="12">
    <b-card no-body class="border rounded-3">
      <b-card-header class="b-card-header border-bottom">
        <h3 class="mb-0">Curriculum</h3>
      </b-card-header>
      <b-card-body>
        <b-row class="g-5">
          <template v-for="(item, idx) in curriculumData" :key="idx">
            <b-col cols="12">
              <h5 class="mb-4">{{ item.title }} ({{ item.lectures.length }} lectures)</h5>
              <template v-for="(lecture, idx) in item.lectures" :key="idx">
                <hr v-if="idx">
                <div class="d-sm-flex justify-content-sm-between align-items-center">
                  <div class="d-flex">
                    <a href="#" class="btn btn-round mb-0" :class="lecture.isPremium ? 'btn-light' : 'btn-danger-soft'">
                      <BIconLockFill v-if="lecture.isPremium" />
                      <font-awesome-icon :icon="faPlay" v-else />
                    </a>
                    <div class="ms-2 ms-sm-3 mt-1 mt-sm-0">
                      <h6 class="mb-0">{{ lecture.title }}</h6>
                      <p class="mb-2 mb-sm-0 small">{{ lecture.time }}</p>
                    </div>
                  </div>
                  <a href="#" class="btn btn-sm mb-0" :class="lecture.isPremium ? 'btn-orange' : 'btn-success'">
                    {{ lecture.isPremium ? 'Premium' : 'Play' }}
                  </a>
                </div>
              </template>
            </b-col>
          </template>
          <b-collapse class="mt-0" id="collapseCourse">
            <b-col cols="12" class="mt-5">
              <h5 class="mb-4">YouTube Marketing (5 lectures)</h5>
              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <div class="d-flex">
                  <a href="#" class="btn btn-danger-soft btn-round mb-0 flex-shrink-0">
                    <font-awesome-icon :icon="faPlay" />
                  </a>
                  <div class="ms-2 ms-sm-3 mt-1 mt-sm-0">
                    <h6 class="mb-0">Video Flow</h6>
                    <p class="mb-2 mb-sm-0 small">25m 20s</p>
                  </div>
                </div>
                <a href="#" class="btn btn-sm btn-success mb-0">Play</a>
              </div>
              <hr>

              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <div class="d-flex">
                  <a href="#" class="btn btn-danger-soft btn-round mb-0 flex-shrink-0">
                    <font-awesome-icon :icon="faPlay" />
                  </a>
                  <div class="ms-2 ms-sm-3 mt-1 mt-sm-0">
                    <h6 class="mb-0">Webmaster Tool</h6>
                    <p class="mb-2 mb-sm-0 small">15m 20s</p>
                  </div>
                </div>
                <a href="#" class="btn btn-sm btn-success mb-0">Play</a>
              </div>
              <hr>

              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <div class="d-flex">
                  <a href="#" class="btn btn-light btn-round mb-0 flex-shrink-0">
                    <BIconLockFill />
                  </a>
                  <div class="ms-2 ms-sm-3 mt-1 mt-sm-0">
                    <h6 class="mb-0">Featured Contents on Channel</h6>
                    <p class="mb-2 mb-sm-0 small">32m 26s</p>
                  </div>
                </div>
                <a href="#" class="btn btn-sm btn-orange mb-0">Premium</a>
              </div>
              <hr>

              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <div class="d-flex">
                  <a href="#" class="btn btn-light btn-round mb-0 flex-shrink-0">
                    <BIconLockFill />
                  </a>
                  <div class="ms-2 ms-sm-3 mt-1 mt-sm-0">
                    <h6 class="mb-0">Channel Analytics</h6>
                    <p class="mb-2 mb-sm-0 small">18m 20s</p>
                  </div>
                </div>
                <a href="#" class="btn btn-sm btn-orange mb-0">Premium</a>
              </div>
              <hr>

              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <div class="d-flex">
                  <a href="#" class="btn btn-light btn-round mb-0 flex-shrink-0">
                    <BIconLockFill />
                  </a>
                  <div class="ms-2 ms-sm-3 mt-1 mt-sm-0">
                    <h6 class="mb-0">Managing Comments</h6>
                    <p class="mb-2 mb-sm-0 small">20m 20s</p>
                  </div>
                </div>
                <a href="#" class="btn btn-sm btn-orange mb-0">Premium</a>
              </div>
            </b-col>
          </b-collapse>

          <a class="mb-0 mt-4 btn-more d-flex align-items-center justify-content-center" href="#collapseCourse"
            role="button" aria-expanded="false" aria-controls="collapseCourse" v-b-toggle.collapseCourse>
            See <span class="see-more mx-1">more</span><span class="see-less mx-1">less</span> video
            <font-awesome-icon :icon="faAngleDown" class="ms-2" />
          </a>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { curriculumData } from '@/views/pages/course/detail-advance/components/data';
import { faPlay, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BIconLockFill } from 'bootstrap-icons-vue';
</script>