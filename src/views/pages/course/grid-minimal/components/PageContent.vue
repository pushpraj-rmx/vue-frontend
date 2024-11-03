<template>
  <section class="pt-0">
    <b-container>
      <b-form class="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
        <b-row class="g-3">
          <b-col xl="3">
            <b-form-input class="me-1" type="search" placeholder="Enter keyword" />
          </b-col>

          <b-col xl="8">
            <b-row class="g-3">
              <b-col sm="6" md="3" class="pb-2 pb-md-0">
                <ChoicesSelect id="category-select" class="form-select-sm">
                  <option value="">Categories</option>
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
              </b-col>

              <b-col sm="6" md="3" class="pb-2 pb-md-0">
                <ChoicesSelect id="select-price" class="form-select-sm">
                  <option value="">Price level</option>
                  <option>All</option>
                  <option>Free</option>
                  <option>Paid</option>
                </ChoicesSelect>
              </b-col>

              <b-col sm="6" md="3" class="pb-2 pb-md-0">
                <ChoicesSelect id="skill-level" class="form-select-sm">
                  <option value="">Skill level</option>
                  <option>All levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </ChoicesSelect>
              </b-col>

              <b-col sm="6" md="3" class="pb-2 pb-md-0">
                <ChoicesSelect id="select-language" class="form-select-sm">
                  <option value="">Language</option>
                  <option>English</option>
                  <option>Francas</option>
                  <option>Russian</option>
                  <option>Hindi</option>
                  <option>Bengali</option>
                  <option>Spanish</option>
                </ChoicesSelect>
              </b-col>
            </b-row>
          </b-col>

          <b-col xl="1">
            <b-button type="button" variant="primary" class="mb-0 rounded z-index-1 w-100">
              <font-awesome-icon :icon="faSearch" />
            </b-button>
          </b-col>
        </b-row>
      </b-form>

      <b-row class="mt-3">
        <b-col cols="12">
          <b-row class="g-4">
            <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in productList" :key="idx">
              <CourseCard :item="item" />
            </b-col>
          </b-row>

          <b-col cols="12">
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
                  </a>
                </li>
              </ul>
            </nav>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { productList } from '@/views/pages/course/grid-minimal/components/data';
import CourseCard from '@/views/pages/course/grid-minimal/components/CourseCard.vue';
import { faSearch, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
</script>