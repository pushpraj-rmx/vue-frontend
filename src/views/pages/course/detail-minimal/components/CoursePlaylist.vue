<template>
  <b-accordion class="accordion-icon accordion-bg-light">
    <template v-for="(item, idx) in programList" :key="idx">
      <b-accordion-item button-class="fw-bold rounded d-block" header-class="font-base" header-tag="h6"
        body-class="mt-3" class="mb-3" :visible="!idx">
        <template #title>
          <span class="mb-0">{{ item.title }}</span>
          <span class="small d-block mt-1">({{ item.lectures.length }} Lectures)</span>
        </template>

        <div class="vstack gap-3">
          <div class="overflow-hidden">
            <div class="d-flex justify-content-between">
              <p class="mb-1 h6">{{ item.complete ? item.complete : '0' }}/{{ item.lectures.length }} Completed</p>
              <h6 class="mb-1 text-end">{{ item.percentage }}%</h6>
            </div>
            <b-progress class="progress-sm bg-primary bg-opacity-10">
              <b-progress-bar class="bg-primary aos" :value="item.percentage">
              </b-progress-bar>
            </b-progress>
          </div>

          <div class="d-flex justify-content-between align-items-center" v-for="(lecture, idx) in item.lectures"
            :key="idx">
            <div class="position-relative d-flex align-items-center" v-if="lecture.isPremium">
              <a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                data-bs-toggle="modal" data-bs-target="#coursePremium" @click="showModal = !showModal">
                <BIconLockFill />
              </a>
              <span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">{{ lecture.title }}</span>
            </div>

            <div class="position-relative d-flex align-items-center" v-else>
              <a href="#" class="btn btn-round btn-sm mb-0 stretched-link position-static"
                :class="lecture.status ? 'btn-success' : 'btn-danger-soft'">
                <font-awesome-icon :icon="faPlay" class="me-0" />
              </a>
              <span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">
                {{ lecture.title }}
              </span>
            </div>
            <p class="mb-0 text-truncate">{{ lecture.status ? lecture.status : lecture.duration }}</p>
          </div>
        </div>
      </b-accordion-item>
    </template>
  </b-accordion>

  <b-modal v-model="showModal" size="lg" body-class="p-0" header-class="border-0" hide-footer centered>
    <div class="px-5 pb-5 position-relative overflow-hidden">
      <figure class="position-absolute bottom-0 end-0 mb-n4 me-n4 d-none d-sm-block">
        <img :src="element01" alt="element">
      </figure>
      <figure class="position-absolute top-0 end-0 z-index-n1 opacity-2">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="818.6px"
          height="235.1px" viewBox="0 0 818.6 235.1">
          <path class="fill-info"
            d="M735,226.3c-5.7,0.6-11.5,1.1-17.2,1.7c-66.2,6.8-134.7,13.7-192.6-16.6c-34.6-18.1-61.4-47.9-87.3-76.7 c-21.4-23.8-43.6-48.5-70.2-66.7c-53.2-36.4-121.6-44.8-175.1-48c-13.6-0.8-27.5-1.4-40.9-1.9c-46.9-1.9-95.4-3.9-141.2-16.5 C8.3,1.2,6.2,0.6,4.2,0H0c3.3,1,6.6,2,10,3c46,12.5,94.5,14.6,141.5,16.5c13.4,0.6,27.3,1.1,40.8,1.9 c53.4,3.2,121.5,11.5,174.5,47.7c26.5,18.1,48.6,42.7,70,66.5c26,28.9,52.9,58.8,87.7,76.9c58.3,30.5,127,23.5,193.3,16.7 c5.8-0.6,11.5-1.2,17.2-1.7c26.2-2.6,55-4.2,83.5-2.2v-1.2C790,222,761.2,223.7,735,226.3z">
          </path>
        </svg>
      </figure>
      <h2>Get Premium Course in <span class="text-success">{{ currency }}800</span></h2>
      <p>
        Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or
        perfectly.
      </p>
      <b-row class="mb-3 item-collapse">
        <b-col sm="6">
          <ul class="list-group list-group-borderless">
            <li class="list-group-item text-body">
              <BIconPatchCheckFill class="text-success" />High quality
              Curriculum
            </li>
            <li class="list-group-item text-body">
              <BIconPatchCheckFill class="text-success" />Tuition Assistance
            </li>
            <li class="list-group-item text-body">
              <BIconPatchCheckFill class="text-success" />Diploma course
            </li>
          </ul>
        </b-col>
        <b-col sm="6">
          <ul class="list-group list-group-borderless">
            <li class="list-group-item text-body">
              <BIconPatchCheckFill class="text-success" />Intermediate
              courses
            </li>
            <li class="list-group-item text-body">
              <BIconPatchCheckFill class="text-success" />Over 200 online
              courses
            </li>
          </ul>
        </b-col>
      </b-row>
      <a href="#" class="btn btn-lg btn-orange-soft">Purchase premium</a>
    </div>
    <div class="modal-footer d-block bg-info">
      <div class="d-sm-flex justify-content-sm-between align-items-center text-center text-sm-start">
        <ul class="list-inline mb-0 social-media-btn mb-2 mb-sm-0">
          <li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
            <a :class="`btn btn-sm mb-0 me-1 bg-white ${link.class}`" href="#">
              <font-awesome-icon :icon="link.icon" class="fa-fw" />
            </a>
          </li>
        </ul>
        <div>
          <p class="mb-1 small">
            <a href="#" class="text-white">
              <font-awesome-icon :icon="faEnvelope" class="fa-fw me-2" />
              example@gmail.com
            </a>
          </p>
          <p class="mb-0 small"><a href="#" class="text-white">
              <font-awesome-icon :icon="faHeadset" class="fa-fw me-2" />
              123-456-789
            </a>
          </p>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { programList } from '@/views/pages/course/detail-minimal/components/data';
import { faPlay, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BIconLockFill, BIconPatchCheckFill } from 'bootstrap-icons-vue';
import { currency } from '@/helpers/constants';

import element01 from '@/assets/images/element/01.svg';

const showModal = ref(false);

const socialLink = [
  { icon: faFacebookF, class: 'text-facebook' },
  { icon: faInstagram, class: 'text-instagram' },
  { icon: faTwitter, class: 'text-twitter' },
  { icon: faLinkedinIn, class: 'text-linkedin' },
];
</script>