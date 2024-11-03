<template>
  <b-col xl="4">
    <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="768">
      <b-row class="g-4">
        <b-col md="6" xl="12">
          <b-card no-body class="card-body border p-4">
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="fw-bold mb-0 me-2">{{ currency }}295.55</h3>
              <b-dropdown end variant="link" toggle-class="btn btn-sm btn-light rounded mb-0 small"
                menu-class="dropdown-w-sm dropdown-menu-end shadow rounded" no-caret>
                <template #button-content>
                  <font-awesome-icon :icon="faShareAlt" class="fa-fw" />
                </template>
                <b-dropdown-item href="#">
                  <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                  Twitter
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                  Facebook
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <font-awesome-icon :icon="faLinkedinIn" class="me-2" />
                  LinkedIn
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <font-awesome-icon :icon="faCopy" class="me-2" />
                  Copy link
                </b-dropdown-item>
              </b-dropdown>
            </div>

            <div class="mt-3 d-grid">
              <a href="#" class="btn btn-outline-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy now</a>
            </div>
            <hr>

            <h5 class="mb-3">This course includes</h5>
            <ul class="list-group list-group-borderless border-0">
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">
                  <font-awesome-icon :icon="faBookOpen" class="fa-fw text-primary" />
                  Lectures
                </span>
                <span>30</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">
                  <font-awesome-icon :icon="faClock" class="fa-fw text-primary" />
                  Duration
                </span>
                <span>4h 50m</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">
                  <font-awesome-icon :icon="faSignal" class="fa-fw text-primary" />
                  Skills
                </span>
                <span>Beginner</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">
                  <font-awesome-icon :icon="faGlobe" class="fa-fw text-primary" />
                  Language
                </span>
                <span>English</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">
                  <font-awesome-icon :icon="faUserClock" class="fa-fw text-primary" />
                  Deadline
                </span>
                <span>Nov 30 2021</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">
                  <font-awesome-icon :icon="faMedal" class="fa-fw text-primary" />
                  Certificate
                </span>
                <span>Yes</span>
              </li>
            </ul>
            <hr>

            <div class="d-sm-flex align-items-center">
              <div class="avatar avatar-xl">
                <img class="avatar-img rounded-circle" :src="avatar05" alt="avatar">
              </div>
              <div class="ms-sm-3 mt-2 mt-sm-0">
                <h5 class="mb-0"><a href="#">By Jacqueline Miller</a></h5>
                <p class="mb-0 small">Founder Eduport company</p>
              </div>
            </div>

            <div class="d-sm-flex justify-content-sm-between align-items-center mt-0 mt-sm-2">
              <ul class="list-inline mb-0 hstack gap-1">
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                </li>
                <li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
              </ul>

              <b-button variant="primary" size="sm" class="mb-0 mt-2 mt-sm-0">Follow</b-button>
            </div>
          </b-card>
        </b-col>

        <b-col md="6" xl="12">
          <b-card no-body class="card-body border p-4">
            <h4 class="mb-3">Popular Tags</h4>
            <ul class="list-inline mb-0">
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">blog</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">business</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">theme</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">data science</a></li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">web development</a></li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">tips</a> </li>
              <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm" href="#">machinelearning</a> </li>
            </ul>
          </b-card>
        </b-col>
      </b-row>
    </CustomStickyElement>
  </b-col>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';
import CustomStickyElement from '@/components/CustomStickyElement.vue';
import { faShareAlt, faCopy, faBookOpen, faClock, faSignal, faGlobe, faUserClock, faMedal, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import avatar05 from '@/assets/images/avatar/05.jpg';
</script>