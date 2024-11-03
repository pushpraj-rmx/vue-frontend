<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="8" xl="9">
          <b-row class="mb-4 align-items-center">
            <b-col xl="6">
              <b-form class="border rounded p-2">
                <div class="input-group input-borderless">
                  <b-form-input type="search" class="me-1" placeholder="Find your course" />
                  <b-button type="button" variant="primary" class="mb-0 rounded z-index-1">
                    <font-awesome-icon :icon="faSearch" />
                  </b-button>
                </div>
              </b-form>
            </b-col>

            <b-col xl="3" class="mt-3 mt-xl-0">
              <b-form class="border rounded p-2 input-borderless">
                <ChoicesSelect id="view-type" class="form-select-sm border-0">
                  <option value="">Most Viewed</option>
                  <option>Recently search</option>
                  <option>Most popular</option>
                  <option>Top rated</option>
                </ChoicesSelect>
              </b-form>
            </b-col>

            <b-col cols="12" xl="3" class="d-flex justify-content-between align-items-center mt-3 mt-xl-0">
              <b-button variant="primary" class="mb-0 d-lg-none" type="button" @click="offcanvas = !offcanvas">
                <font-awesome-icon :icon="faSlidersH" class="me-1" />
                Show filter
              </b-button>
              <p class="mb-0 text-end">Showing 1-7 of 32 result</p>
            </b-col>

          </b-row>

          <b-row class="g-4">
            <b-col sm="6" xl="4" v-for="(item, idx) in productList" :key="idx">
              <CourseCard :item="item" />
            </b-col>
          </b-row>

          <b-col cols="12">
            <nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
              <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon :icon="faAngleDoubleLeft" /></a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item mb-0 active" aria-current="page"><a class="page-link" href="#">2</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">..</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">6</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#"><font-awesome-icon :icon="faAngleDoubleRight" /></a></li>
              </ul>
            </nav>
          </b-col>
        </b-col>

        <b-col lg="4" xl="3">
          <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar">
            <div class="offcanvas-header bg-light">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-3 p-lg-0">
              <Filter />
            </div>
            <div class="d-grid p-2 p-lg-0 text-center">
              <b-button variant="primary" class="mb-0">Filter Results</b-button>
            </div>
          </div>

          <b-offcanvas v-model="offcanvas" class="offcanvas-lg" placement="end" title="Advanced Filter"
            headerClass="bg-light" bodyClass="p-3 p-xl-0" tabindex="-1" id="offcanvasSidebar"
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
import { productList } from '@/views/pages/course/grid-classic/components/data';
import CourseCard from '@/views/pages/course/grid-classic/components/CourseCard.vue';
import Filter from '@/views/pages/course/grid-classic/components/Filter.vue';
import { faSearch, faSlidersH, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const offcanvas = ref(false);
</script>