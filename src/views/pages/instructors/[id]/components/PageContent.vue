<template>
  <section class="pt-5 pb-0">
    <b-container>
      <b-row class="g-0 g-lg-5">
        <b-col lg="4">
          <b-row>
            <b-col md="6" lg="12">
              <b-card no-body class="shadow p-2 mb-4 text-center">
                <div class="rounded-3">
                  <img :src="instructor07" class="card-img" alt="course img">
                </div>

                <b-card-body class="px-3">
                  <ul class="list-inline flex-centered hstack gap-1">
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                    </li>
                    <li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                  <ul class="list-inline mb-0 d-flex justify-content-center gap-1">
                    <li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
                      <a :class="`btn px-2 btn-sm ${link.class}`" href="#">
                        <font-awesome-icon :icon="link.icon" class="fa-fw" />
                      </a>
                    </li>
                  </ul>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col md="6" lg="12">
              <b-card no-body class="card-body shadow p-4 mb-4">
                <h4 class="mb-3">Education</h4>
                <div class="d-flex align-items-center mb-4">
                  <span class="icon-md mb-0 bg-light rounded-3">
                    <font-awesome-icon :icon="faGraduationCap" />
                  </span>
                  <div class="ms-3">
                    <h6 class="mb-0">Harvard University</h6>
                    <p class="mb-0 small">Bachelor in Computer Graphics</p>
                  </div>
                </div>

                <div class="d-flex align-items-center mb-4">
                  <span class="icon-md mb-0 bg-light rounded-3">
                    <font-awesome-icon :icon="faGraduationCap" />
                  </span>
                  <div class="ms-3">
                    <h6 class="mb-0">University of Toronto</h6>
                    <p class="mb-0 small">Master in Computer Graphics</p>
                  </div>
                </div>

                <div class="d-flex align-items-center mb-4">
                  <span class="icon-md mb-0 bg-light rounded-3">
                    <font-awesome-icon :icon="faGraduationCap" />
                  </span>
                  <div class="ms-3">
                    <h6 class="mb-0">East Ray University</h6>
                    <p class="mb-0 small">Bachelor in Computer Graphics</p>
                  </div>
                </div>

                <hr>

                <h4 class="mb-3">Skills</h4>

                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">Graphic design</h6>
                  <b-progress class="progress-sm bg-primary bg-opacity-10">
                    <b-progress-bar class="bg-primary aos" :value="90" />
                    <span class="progress-percent-simple h6 mb-0">90%</span>
                  </b-progress>
                </div>

                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">Web design</h6>
                  <b-progress class="progress-sm bg-success bg-opacity-10">
                    <b-progress-bar class="bg-success aos" :value="80" />
                    <span class="progress-percent-simple h6 mb-0">80%</span>
                  </b-progress>
                </div>

                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">HTML/CSS</h6>
                  <b-progress class="progress-sm bg-warning bg-opacity-10">
                    <b-progress-bar class="bg-warning aos" :value="60" />
                    <span class="progress-percent-simple h6 mb-0">60%</span>
                  </b-progress>
                </div>

                <div class="overflow-hidden mb-4">
                  <h6 class="uppercase">UI/UX</h6>
                  <b-progress class="progress-sm bg-danger bg-opacity-10">
                    <b-progress-bar class="bg-danger aos" :value="50" />
                    <span class="progress-percent-simple h6 mb-0">50%</span>
                  </b-progress>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="8">

          <h5 class="mb-0">Hi, I am</h5>
          <h1 class="mb-0">Lori Stevens</h1>
          <p>Graphic Designer</p>
          <p class="mt-4">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private
            blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr
            feeling does chiefly cordial in do.</p>
          <p>We focus a great deal on the understanding of behavioral psychology and influence triggers which are
            crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a
            solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course
            is packed with practical hands-on examples that you can follow step by step.</p>
          <ul class="list-group list-group-borderless">
            <li class="list-group-item px-0">
              <span class="h6 fw-light">
                <font-awesome-icon :icon="faMapMarkerAlt" class="fa-fw text-primary me-1 me-sm-3" />
                Address:</span>
              <span>2002 Horton Ford Rd, Eidson, TN, 37731</span>
            </li>
            <li class="list-group-item px-0">
              <span class="h6 fw-light">
                <font-awesome-icon :icon="faEnvelope" class="fa-fw text-primary me-1 me-sm-3" />
                Email:</span>
              <span>example@gmail.com</span>
            </li>
            <li class="list-group-item px-0">
              <span class="h6 fw-light">
                <font-awesome-icon :icon="faHeadphones" class="fa-fw text-primary me-1 me-sm-3" />
                Phone number:</span>
              <span>+896-789-546</span>
            </li>
            <li class="list-group-item px-0">
              <span class="h6 fw-light">
                <font-awesome-icon :icon="faGlobe" class="fa-fw text-primary me-1 me-sm-3" />
                Website:</span>
              <span>{{ developedByLink }}</span>
            </li>
          </ul>

          <b-row class="mt-4 g-3">
            <b-col sm="6" lg="4">
              <div class="d-flex align-items-center">
                <span class="icon-lg text-success mb-0 bg-success bg-opacity-10 rounded-3">
                  <font-awesome-icon :icon="faPlay" />
                </span>
                <div class="ms-3">
                  <div class="d-flex">
                    <NumberAnimation :from="0" :to="10" :duration="3" :format="format" :delay="0.5"
                  class="purecounter mb-0 fw-bold h5" />
                    <span class="mb-0 h5">+</span>
                  </div>
                  <p class="mb-0 h6 fw-light">Total Courses</p>
                </div>
              </div>
            </b-col>
            <b-col sm="6" lg="4">
              <div class="d-flex align-items-center">
                <span class="icon-lg text-purple bg-purple bg-opacity-10 rounded-3 mb-0">
                  <font-awesome-icon :icon="faUsers" />
                </span>
                <div class="ms-3">
                  <div class="d-flex">
                    <NumberAnimation :from="0" :to="36" :duration="3" :format="format" :delay="0.5"
                  class="purecounter mb-0 fw-bold h5" />
                    <span class="mb-0 h5">K+</span>
                  </div>
                  <p class="mb-0 h6 fw-light">Total Students</p>
                </div>
              </div>
            </b-col>
            <b-col sm="6" lg="4">
              <div class="d-flex align-items-center">
                <span class="icon-lg text-orange bg-orange bg-opacity-10 rounded-3 mb-0">
                  <font-awesome-icon :icon="faTrophy" />
                </span>
                <div class="ms-3">
                  <div class="d-flex">
                    <NumberAnimation :from="0" :to="11" :duration="3" :format="format" :delay="0.5"
                  class="purecounter mb-0 fw-bold h5" />
                    <span class="mb-0 h5">+</span>
                  </div>
                  <p class="mb-0 h6 fw-light">Years in Experience</p>
                </div>
              </div>
            </b-col>
          </b-row>

          <b-row class="g-4 mt-4">
            <h2>Courses List</h2>
            <b-col sm="6" v-for="(item, idx) in instructorCourses" :key="idx">
              <b-card no-body class="shadow h-100">
                <img :src="item.image" class="card-img-top" alt="course img">
                <b-card-body class="pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <a href="#" :class="`badge bg-${item.badge?.class} bg-opacity-10 text-${item.badge?.class}`">
                      {{ item.badge?.text }}
                    </a>
                    <a href="#" class="text-danger" v-if="item.favorite">
                      <font-awesome-icon :icon="faHeart" />
                    </a>
                    <a href="#" class="h6 fw-light mb-0" v-else>
                      <font-awesome-icon :icon="faHeartR" />
                    </a>
                  </div>
                  <b-card-title tag="h5" class="fw-normal"><a href="#">{{ item.title }}</a></b-card-title>
                  <p class="mb-2 text-truncate-2">{{ item.description }}</p>
                  <ul class="list-inline mb-0 hstack gap-1" v-if="item.rating">
                    <li className="list-inline-item me-0 small"
                      v-for="(_star, idx) in Array(Math.floor(item.rating)).fill(0)" :key="idx">
                      <font-awesome-icon :icon="faStar" class="text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small" v-if="!Number.isInteger(item.rating)">
                      <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small"
                      v-for="(_star, idx) in item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0)" :key="idx">
                      <font-awesome-icon :icon="faStarR" class="text-warning" />
                    </li>
                    <li class="list-inline-item ms-2 h6 fw-light mb-0">{{ item.rating }}/5.0</li>
                  </ul>
                </b-card-body>
                <b-card-footer class="pt-0 pb-3">
                  <hr>
                  <div class="d-flex justify-content-between">
                    <span class="h6 fw-light mb-0">
                      <font-awesome-icon :icon="faClock" class="text-danger me-1" />
                      {{ item.duration }}
                    </span>
                    <span class="h6 fw-light mb-0">
                      <font-awesome-icon :icon="faTable" class="text-orange me-1" />
                      {{ item.lecture }} lectures
                    </span>
                  </div>
                </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import NumberAnimation from "vue-number-animation";
import { developedByLink } from '@/helpers/constants';

import { instructorCourses } from '@/views/pages/instructors/[id]/components/data';
import { faStar, faStarHalfAlt, faPlay, faGraduationCap, faEnvelope, faHeadphones, faGlobe, faHeart, faTable, faMapMarkerAlt, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR, faClock, faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import instructor07 from '@/assets/images/instructor/07.jpg';

const socialLink = [
  { icon: faFacebookF, class: 'bg-facebook' },
  { icon: faInstagram, class: 'bg-instagram-gradient' },
  { icon: faTwitter, class: 'bg-twitter' },
  { icon: faLinkedinIn, class: 'bg-linkedin' },
];

const format = (value: string) => {
  return Number.parseInt(value);
};
</script>