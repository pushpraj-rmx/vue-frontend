<template>
  <section class="pt-4">
    <b-container>
      <b-row class="mb-4 align-items-center">
        <b-col sm="6" xl="4">
          <b-form class="border rounded p-2">
            <b-input-group class="input-borderless">
              <b-form-input class="mb-1" type="search" placeholder="Search instructor" />
              <b-button type="button" variant="primary" class="mb-0 rounded">
                <font-awesome-icon :icon="faSearch" />
              </b-button>
            </b-input-group>
          </b-form>
        </b-col>

        <b-col sm="6" xl="3" class="mt-3 mt-lg-0">
          <b-form class="border rounded p-2 input-borderless">
            <ChoicesSelect id="category-type" class="form-select-sm">
              <option value="">Category</option>
              <option>All</option>
              <option>Development</option>
              <option>Design</option>
              <option>Accounting</option>
              <option>Translation</option>
              <option>Finance</option>
              <option>Legal</option>
              <option>Photography</option>
              <option>Writing</option>
              <option>Marketing</option>
            </ChoicesSelect>
          </b-form>
        </b-col>

        <b-col sm="6" xl="3" class="mt-3 mt-xl-0">
          <b-form class="border rounded p-2 input-borderless">
            <ChoicesSelect id="sort-by" class="form-select-sm">
              <option value="">Sort by</option>
              <option>Most popular</option>
              <option>Most viewed</option>
              <option>Top rated</option>
            </ChoicesSelect>
          </b-form>
        </b-col>

        <b-col sm="6" xl="2" class="mt-3 mt-xl-0 d-grid">
          <a href="#" class="btn btn-lg btn-primary mb-0">Filter Results</a>
        </b-col>
      </b-row>

      <b-row class="g-4 justify-content-center">
        <b-col lg="10" xl="6" v-for="(item, idx) in instructorList" :key="idx">
          <InstructorCard :item="item" />
        </b-col>

      </b-row>

      <nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
        <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
          <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1">
              <font-awesome-icon :icon="faAngleDoubleLeft" />
            </a></li>
          <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
          <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
          <li class="page-item mb-0"><a class="page-link" href="#">..</a></li>
          <li class="page-item mb-0"><a class="page-link" href="#">6</a></li>
          <li class="page-item mb-0"><a class="page-link" href="#">
              <font-awesome-icon :icon="faAngleDoubleRight" />
            </a></li>
        </ul>
      </nav>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { instructorList } from '@/views/pages/instructors/components/data';
import InstructorCard from '@/views/pages/instructors/components/InstructorCard.vue';

import { faSearch, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
</script>