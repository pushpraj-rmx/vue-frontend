<template>
  <section class="pt-5">
    <b-container>
      <b-row class="mb-4 align-items-center">
        <b-col sm="6" xl="4">
          <b-form class="border rounded p-2">
            <b-input-group class="input-borderless">
              <b-form-input class="me-1" type="search" placeholder="Search course" />
              <b-button type="button" variant="primary" class="mb-0 rounded">
                <font-awesome-icon :icon="faSearch" />
              </b-button>
            </b-input-group>
          </b-form>
        </b-col>

        <b-col sm="6" xl="3" class=" mt-3 mt-lg-0">
          <b-form class="border rounded p-2 input-borderless">
            <ChoicesSelect id="list-mini-category" class="form-select-sm">
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

        <b-col sm="6" xl="3" class=" mt-3 mt-xl-0">
          <b-form class="border rounded p-2 input-borderless">
            <ChoicesSelect id="list-mini-sort">
              <option value="">Sort by</option>
              <option>Free</option>
              <option>Most viewed</option>
              <option>Popular</option>
            </ChoicesSelect>
          </b-form>
        </b-col>

        <b-col sm="6" xl="2" class=" mt-3 mt-xl-0 d-grid">
          <a href="#" class="btn btn-lg btn-primary mb-0">Filter Results</a>
        </b-col>
      </b-row>

      <b-row class="g-4 justify-content-center">
        <b-col lg="10" xxl="6" v-for="(item, idx) in productData" :key="idx">
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
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { productData } from '@/views/pages/course/list-minimal/components/data';
import CourseCard from '@/views/pages/course/list-minimal/components/CourseCard.vue';
import { faSearch, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ChoicesSelect from '@/components/ChoicesSelect.vue';
</script>