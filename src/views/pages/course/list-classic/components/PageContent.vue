<template>
  <section class="pb-0 py-sm-5">
    <b-container>
      <b-row class="g-3 align-items-center mb-4">
        <b-col md="4">
          <h4 class="mb-0">Showing 1-7 of 32 result</h4>
        </b-col>
        <b-col md="8">
          <b-row class="g-3 align-items-center justify-content-md-end me-auto">
            <b-col sm="4" xl="6" class="text-md-end d-none d-md-block">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <router-link :to="{ name: 'course.grid.classic' }" class="btn btn-outline-light mb-0 me-2">
                    <font-awesome-icon :icon="faThLarge" class="fa-fw" />
                  </router-link>
                </li>
                <li class="list-inline-item">
                  <router-link :to="{ name: 'course.list.classic' }" class="btn btn-outline-light mb-0 me-2">
                    <font-awesome-icon :icon="faListUl" class="fa-fw" />
                  </router-link>
                </li>
              </ul>
            </b-col>

            <b-form class="col-md-4 border rounded p-1 input-borderless">
              <ChoicesSelect id="sort-by" class="z-index-9">
                <option value="">Sort by</option>
                <option>Free</option>
                <option>Newest</option>
                <option>Most popular</option>
                <option>Most Viewed</option>
              </ChoicesSelect>
            </b-form>
            <b-col cols="4" class="text-md-end">
              <b-button variant="primary" class="mb-0 d-xl-none" type="button" @click="offcanvas = !offcanvas">
                <font-awesome-icon :icon="faSlidersH" class="me-1" /> Show filter
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="9" xxl="8">
          <b-row class="g-4">
            <b-col cols="12" v-for="(item, idx) in productData" :key="idx">
              <CourseCard :item="item" />
            </b-col>
          </b-row>
          <b-col cols="12">
            <nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
              <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon :icon="faAngleDoubleLeft" /></a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">..</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">6</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#"><font-awesome-icon :icon="faAngleDoubleRight" /></a></li>
              </ul>
            </nav>
          </b-col>
        </b-col>

        <b-col lg="3" xxl="4">
          <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasSidebar">
            <div class="offcanvas-header bg-light">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-3 p-xl-0">
              <Filter />
            </div>

            <div class="d-grid p-2 p-xl-0 bg-body text-center">
              <b-button variant="primary" class="mb-0">Filter Results</b-button>
            </div>
          </div>

          <b-offcanvas v-model="offcanvas" placement="end" title="Advanced Filter" headerClass="bg-light"
            bodyClass="p-3 p-xl-0" class="offcanvas-xl" tabindex="-1" id="offcanvasSidebar"
            aria-labelledby="offcanvasSidebarLabel">
            <Filter />
          </b-offcanvas>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { productData } from '@/views/pages/course/list-classic/components/data';
import CourseCard from '@/views/pages/course/list-classic/components/CourseCard.vue';
import Filter from '@/views/pages/course/list-classic/components/Filter.vue';

import { faThLarge, faListUl, faSlidersH, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const offcanvas = ref(false);
</script>