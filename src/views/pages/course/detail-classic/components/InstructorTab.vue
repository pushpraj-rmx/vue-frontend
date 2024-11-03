<template>
  <b-card no-body class="mb-0 mb-md-4">
    <b-row class="g-0 align-items-center">
      <b-col md="5">
        <img :src="instructor01" class="img-fluid rounded-3" alt="instructor-img">
      </b-col>
      <b-col md="7">
        <b-card-body>
          <b-card-title tag="h3" class="mb-0">Louis Ferguson</b-card-title>
          <p class="mb-2">Instructor of Marketing</p>
          <ul class="list-inline mb-3 hstack gap-1">
            <li class="list-inline-item me-3">
              <a href="#" class="fs-5 text-twitter"><font-awesome-icon :icon="faTwitterSquare" /></a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="fs-5 text-instagram"><font-awesome-icon :icon="faInstagramSquare" /></a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="fs-5 text-facebook"><font-awesome-icon :icon="faFacebookSquare" /></a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="fs-5 text-linkedin"><font-awesome-icon :icon="faLinkedinIn" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="fs-5 text-youtube"><font-awesome-icon :icon="faYoutubeSquare" /></a>
            </li>
          </ul>

          <ul class="list-inline">
            <li class="list-inline-item">
              <div class="d-flex align-items-center me-3 mb-2">
                <span class="icon-md bg-orange bg-opacity-10 text-orange rounded-circle">
                  <font-awesome-icon :icon="faUserGraduate" />
                </span>
                <span class="h6 fw-light mb-0 ms-2">9.1k</span>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="d-flex align-items-center me-3 mb-2">
                <span class="icon-md bg-warning bg-opacity-15 text-warning rounded-circle">
                  <font-awesome-icon :icon="faStar" />
                </span>
                <span class="h6 fw-light mb-0 ms-2">4.5</span>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="d-flex align-items-center me-3 mb-2">
                <span class="icon-md bg-danger bg-opacity-10 text-danger rounded-circle">
                  <font-awesome-icon :icon="faPlay" />
                </span>
                <span class="h6 fw-light mb-0 ms-2">29 Courses</span>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="d-flex align-items-center me-3 mb-2">
                <span class="icon-md bg-info bg-opacity-10 text-info rounded-circle">
                  <font-awesome-icon :icon="faCommentDots" />
                </span>
                <span class="h6 fw-light mb-0 ms-2">205</span>
              </div>
            </li>
          </ul>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

  <h5 class="mb-3">About Instructor</h5>
  <p class="mb-3">Fulfilled direction use continual set him propriety continued. Saw met applauded
    favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther
    related bed and passage comfort civilly. Dashboard see frankness objection abilities. As hastened oh
    produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed
    of add screened rendered six say his striking confined. </p>
  <p class="mb-3">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct
    viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask
    own. Praise effect wishes change way and any wanted.</p>

  <b-col cols="12">
    <ul class="list-group list-group-borderless mb-0">
      <li class="list-group-item pb-0">Mail ID:<a href="#" class="ms-2">hello@email.com</a></li>
      <li class="list-group-item pb-0">Web:<a href="#" class="ms-2">https://eduport.com</a></li>
    </ul>
  </b-col>
</template>
<script setup lang="ts">
import instructor01 from '@/assets/images/instructor/01.jpg';
import { faPlay, faUserGraduate, faStar, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faLinkedinIn, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
</script>