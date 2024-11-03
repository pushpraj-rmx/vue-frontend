<template>
  <InstructorLayout>
    <b-col xl="9">
      <b-card no-body class="border bg-transparent rounded-3">
        <b-card-header class="bg-transparent border-bottom">
          <h3 class="mb-0">My Students List</h3>
        </b-card-header>
        <b-card-body>

          <b-row class="g-3 align-items-center justify-content-between mb-4">
            <b-col md="8">
              <b-form class="rounded position-relative">
                <b-form-input class="pe-5 bg-transparent" type="search" placeholder="Search" />
                <button
                  class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                  type="submit">
                  <font-awesome-icon :icon="faSearch" class="fs-6" />
                </button>
              </b-form>
            </b-col>

            <b-col md="3">
              <b-form>
                <ChoicesSelect id="sort-by" class="border-0 z-index-9 bg-transparent">
                  <option value="">Sort by</option>
                  <option>Free</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </ChoicesSelect>
              </b-form>
            </b-col>
          </b-row>

          <div class="table-responsive border-0">
            <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th scope="col" class="border-0 rounded-start">Student name</th>
                  <th scope="col" class="border-0">Progress</th>
                  <th scope="col" class="border-0">Courses</th>
                  <th scope="col" class="border-0">Enrolled date</th>
                  <th scope="col" class="border-0 rounded-end">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, idx) in studentList" :key="idx">
                  <td>
                    <div class="d-flex align-items-center position-relative">
                      <div class="avatar avatar-md mb-2 mb-md-0">
                        <img :src="item.image" class="rounded" alt="">
                      </div>
                      <div class="mb-0 ms-2">
                        <h6 class="mb-0"><a href="#" class="stretched-link">{{ item.name }}</a></h6>
                        <span class="text-body small">
                          <font-awesome-icon :icon="faMapMarkerAlt" class="fa-fw mt-1" />
                          {{ item.location }}</span>
                      </div>
                    </div>
                  </td>

                  <td class="text-center text-sm-start">
                    <div class=" overflow-hidden">
                      <h6 class="mb-0">{{ item.progress }}%</h6>
                      <b-progress class="progress-sm bg-primary bg-opacity-10">
                        <b-progress-bar class="bg-primary aos" :value="item.progress" />
                      </b-progress>
                    </div>
                  </td>

                  <td>{{ item.tasks }}</td>

                  <td>{{ item.date }}</td>

                  <td>
                    <a href="#" class="btn btn-success-soft btn-round me-1 mb-0" v-b-tooltip.hover.top="'Message'">
                      <font-awesome-icon :icon="faEnvelope" />
                    </a>{{ ' ' }}
                    <b-button :variant="null" class="btn-danger-soft btn-round mb-0" v-b-tooltip.hover.top="'Block'">
                      <font-awesome-icon :icon="faBan" />
                    </b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
            <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1">
                    <font-awesome-icon :icon="faAngleLeft" />
                  </a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">
                    <font-awesome-icon :icon="faAngleRight" />
                  </a></li>
              </ul>
            </nav>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </InstructorLayout>
</template>
<script setup lang="ts">
import InstructorLayout from '@/layouts/InstructorLayout.vue';

import { studentList } from '@/views/accounts/instructor/students/components/data';
import { faSearch, faAngleLeft, faAngleRight, faMapMarkerAlt, faBan } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
</script>