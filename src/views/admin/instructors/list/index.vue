<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12">
        <h1 class="h3 mb-2 mb-sm-0">Instructors</h1>
      </b-col>
    </b-row>

    <b-card no-body class="bg-transparent">
      <b-card-header class="bg-transparent border-bottom px-0">
        <b-row class="g-3 align-items-center justify-content-between">
          <b-col md="8">
            <b-form class="rounded position-relative">
              <b-form-input class="bg-transparent" type="search" placeholder="Search" />
              <button
                class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit">
                <font-awesome-icon :icon="faSearch" class="fs-6" />
              </button>
            </b-form>
          </b-col>

          <b-col md="3">
            <ul class="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end" id="pills-tab"
              role="tablist">
              <li class="nav-item">
                <a href="#nav-preview-tab-1" class="nav-link mb-0 me-2" :class="!show && 'active'" data-bs-toggle="tab"
                  @click="show = !show">
                  <font-awesome-icon :icon="faThLarge" class="fa-fw" />
                </a>
              </li>
              <li class="nav-item">
                <a href="#nav-html-tab-1" class="nav-link mb-0" :class="show && 'active'" data-bs-toggle="tab"
                  @click="show = !show">
                  <font-awesome-icon :icon="faListUl" class="fa-fw" />
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-card-header>

      <b-card-body class="px-0">
        <div class="tab-content">
          <div class="tab-pane fade" :class="!show && 'show active'" id="nav-preview-tab-1">
            <InstructorGrid />
          </div>
          <div class="tab-pane fade" :class="show && 'show active'" id="nav-html-tab-1">
            <InstructorList />
          </div>
        </div>
      </b-card-body>

      <b-card-footer class="bg-transparent p-0">
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
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

import InstructorGrid from '@/views/admin/instructors/list/components/InstructorGrid.vue';
import InstructorList from '@/views/admin/instructors/list/components/InstructorList.vue';

import { faSearch, faThLarge, faListUl, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const show = ref(false);
</script>