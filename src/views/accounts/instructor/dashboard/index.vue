<template>
  <InstructorLayout>
    <b-col xl="9">
      <b-row class="g-4">
        <b-col sm="6" lg="4">
          <div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
            <span class="display-6 text-warning mb-0">
              <font-awesome-icon :icon="faTv" class="fa-fw" />
            </span>
            <div class="ms-4">
              <div class="d-flex">
                <NumberAnimation :from="0" :to="25" :duration="3" :format="format" :delay="0.5"
                  class="purecounter mb-0 fw-bold h5" />
              </div>
              <span class="mb-0 h6 fw-light">Total Courses</span>
            </div>
          </div>
        </b-col>
        <b-col sm="6" lg="4">
          <div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
            <span class="display-6 text-purple mb-0">
              <font-awesome-icon :icon="faUserGraduate" class="fa-fw" />
            </span>
            <div class="ms-4">
              <div class="d-flex">
                <NumberAnimation :from="0" :to="25" :duration="3" :format="format" :delay="0.5"
                  class="purecounter mb-0 fw-bold h5" />
                <span class="mb-0 h5">K+</span>
              </div>
              <span class="mb-0 h6 fw-light">Total Students</span>
            </div>
          </div>
        </b-col>
        <b-col sm="6" lg="4">
          <div class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
            <span class="display-6 text-info mb-0">
              <font-awesome-icon :icon="faGem" class="fa-fw" />
            </span>
            <div class="ms-4">
              <div class="d-flex">
                <NumberAnimation :from="0" :to="12" :duration="3" :format="format" :delay="0.5"
                  class="purecounter mb-0 fw-bold h5" />
                <span class="mb-0 h5">K</span>
              </div>
              <span class="mb-0 h6 fw-light">Enrolled Students</span>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col cols="12">
          <b-card no-body class="card-body bg-transparent border p-4 h-100">
            <b-row class="g-4">
              <b-col sm="6" md="4">
                <span class="badge text-bg-dark">Current Month</span>
                <h4 class="text-primary my-2">{{ currency }}35000</h4>
                <p class="mb-0">
                  <span class="text-success me-1">
                    0.20%
                    <BIconArrowUp />
                  </span>
                  vs last month
                </p>
              </b-col>
              <b-col sm="6" md="4">
                <span class="badge text-bg-dark">Last Month</span>
                <h4 class="my-2">{{ currency }}28000</h4>
                <p class="mb-0">
                  <span class="text-danger me-1">
                    0.10%
                    <BIconArrowDown />
                  </span>
                  Then last month
                </p>
              </b-col>
            </b-row>
            <ApexChart :chart="payoutChart" class="apex-charts" id="ChartPayout" />
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-card no-body class="border bg-transparent rounded-3 mt-5">
            <b-card-header class="bg-transparent border-bottom">
              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <h3 class="mb-2 mb-sm-0">Most Selling Courses</h3>
                <a href="#" class="btn btn-sm btn-primary-soft mb-0">View all</a>
              </div>
            </b-card-header>
            <b-card-body>
              <div class="table-responsive border-0 rounded-3">
                <table class="table table-dark-gray align-middle p-4 mb-0">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 rounded-start">Course Name</th>
                      <th scope="col" class="border-0">Selling</th>
                      <th scope="col" class="border-0">Amount</th>
                      <th scope="col" class="border-0">Period</th>
                      <th scope="col" class="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="(item, idx) in courseData" :key="idx">
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="w-60px">
                            <img :src="item.image" class="rounded" alt="">
                          </div>
                          <h6 class="mb-0 ms-2 table-responsive-title">
                            <a href="#">{{ item.title }}</a>
                          </h6>
                        </div>
                      </td>
                      <td>{{ item.selling }}</td>
                      <td>{{ currency }}{{ item.price }}</td>
                      <td>
                        <span class="badge bg-primary bg-opacity-10 text-primary">{{ item.duration }}</span>
                      </td>
                      <td>
                        <a href="#" class="btn btn-sm btn-success-soft btn-round me-1 mb-0">
                          <font-awesome-icon :icon="faEdit" class="fa-fw" />
                        </a>{{ ' ' }}
                        <b-button :variant="null" size="sm" class="btn-danger-soft btn-round mb-0">
                          <font-awesome-icon :icon="faTimes" class="fa-fw" />
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-3">
                <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
                  <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon
                          :icon="faAngleLeft" /></a></li>
                    <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                    <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                    <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                    <li class="page-item mb-0"><a class="page-link" href="#"><font-awesome-icon
                          :icon="faAngleRight" /></a></li>
                  </ul>
                </nav>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </InstructorLayout>
</template>
<script setup lang="ts">
import NumberAnimation from "vue-number-animation";
import InstructorLayout from '@/layouts/InstructorLayout.vue';
import { currency } from '@/helpers/constants';

import { courseData, payoutChart } from '@/views/accounts/instructor/dashboard/components/data';
import { faTv, faUserGraduate, faGem, faTimes, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { BIconArrowUp, BIconArrowDown } from 'bootstrap-icons-vue';

const format = (value: string) => {
  return Number.parseInt(value);
};
</script>