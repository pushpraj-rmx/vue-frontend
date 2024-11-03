<template>
  <AdminLayout>
    <b-row class="mb-3">
      <b-col cols="12">
        <h1 class="h3 mb-2 mb-sm-0">Instructor Requests</h1>
      </b-col>
    </b-row>
    <b-card no-body class="bg-transparent border">
      <b-card-header class="bg-light border-bottom">
        <b-row class="g-3 align-items-center justify-content-between">
          <b-col md="8">
            <b-form class="rounded position-relative">
              <b-form-input class="bg-body" type="search" placeholder="Search" />
              <button
                class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit">
                <font-awesome-icon :icon="faSearch" class="fs-6" />
              </button>
            </b-form>
          </b-col>
          <b-col md="3">
            <b-form>
              <ChoicesSelect id="sort" class="border-0 z-index-9 bg-transparent">
                <option value="">Sort by</option>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </ChoicesSelect>
            </b-form>
          </b-col>
        </b-row>
      </b-card-header>

      <b-card-body>
        <div class="table-responsive border-0 mb-0">
          <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
            <thead>
              <tr>
                <th scope="col" class="border-0 rounded-start">Instructor name</th>
                <th scope="col" class="border-0">Subject</th>
                <th scope="col" class="border-0">Requested Date</th>
                <th scope="col" class="border-0 rounded-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in instructorRequests" :key="idx">
                <td>
                  <div class="d-flex align-items-center position-relative">
                    <div class="avatar avatar-md">
                      <img :src="item.image" class="rounded-circle" alt="">
                    </div>
                    <div class="mb-0 ms-2">
                      <h6 class="mb-0"><a href="#" class="stretched-link">{{ item.name }}</a></h6>
                    </div>
                  </div>
                </td>
                <td class="text-center text-sm-start">
                  <h6 class="mb-0">{{ item.skills }}</h6>
                </td>
                <td>{{ item.date }}</td>
                <td>
                  <template v-if="item.status === 'pending'">
                    <a href="#" class="btn btn-success-soft me-1 mb-1 mb-lg-0">Accept</a>{{  ' ' }}
                    <a href="#" class="btn btn-secondary-soft me-1 mb-1 mb-lg-0">Reject</a>
                  </template>
                  <a href="#" class="btn me-1 mb-1 mb-md-0 disabled"
                    :class="item.status === 'accepted' ? 'btn-success' : 'btn-secondary'"
                    v-if="!(item.status === 'pending')">{{ toSentenceCase(item.status) }}</a>{{ ' ' }}
                  <a href="#" class="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail"
                    @click="showModal = !showModal">View App</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card-body>

      <b-card-footer class="bg-transparent pt-0">
        <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
          <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
          <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
            <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
              <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon :icon="faAngleLeft" /></a></li>
              <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
              <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
              <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
              <li class="page-item mb-0"><a class="page-link" href="#"><font-awesome-icon :icon="faAngleRight" /></a></li>
            </ul>
          </nav>
        </div>
      </b-card-footer>
    </b-card>
  </AdminLayout>


  <b-modal v-model="showModal" title="Applicant details" header-class="bg-dark" title-class="text-white" ok-only
    ok-title="Close" ok-variant="danger-soft" body-class="p-5" size="lg" centered>
    <span class="small">Applicant Name:</span>
    <h6 class="mb-3">Jacqueline Miller</h6>

    <span class="small">Applicant Email id:</span>
    <h6 class="mb-3">example@gmail.com</h6>

    <span class="small">Applicant Phone number:</span>
    <h6 class="mb-3">+123 456 789 10</h6>

    <span class="small">Summary:</span>
    <p class="text-dark mb-2">
      We focus a great deal on the understanding of behavioral psychology and influence triggers
      which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a
      solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is
      packed with practical hands-on examples that you can follow step by step.
    </p>
    <p class="text-dark mb-0">
      As it so contrasted oh estimating instrument. Size like body someone had. Are conduct
      viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect
      wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.
    </p>
  </b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { toSentenceCase } from '@/helpers/change-casing';
import { instructorRequests } from '@/views/admin/instructors/request/components/data';
import { faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const showModal = ref(false);
</script>