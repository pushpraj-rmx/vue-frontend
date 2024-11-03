<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-row class="mb-4 align-items-center">
            <b-col md="4">
              <h5 class="mb-0">All Listed Books</h5>
            </b-col>

            <b-col md="4" class="mt-3 mt-xl-0">
              <b-form class="border-bottom p-2 input-borderless">
                <ChoicesSelect id="product-type">
                  <option value="">Product type</option>
                  <option>PDF</option>
                  <option>Compact Disk</option>
                  <option>Paperback</option>
                </ChoicesSelect>
              </b-form>
            </b-col>

            <b-col md="4" class="mt-3 mt-xl-0">
              <b-form class="border-bottom p-2 input-borderless">
                <ChoicesSelect id="category-type">
                  <option value="">Select category</option>
                  <option>Software</option>
                  <option>Finance</option>
                  <option>Web design</option>
                  <option>Web Development</option>
                  <option>Information technology</option>
                  <option>Science</option>
                </ChoicesSelect>
              </b-form>
            </b-col>
          </b-row>

          <b-row class="g-4">
            <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in shopGrid" :key="idx">
              <BookCard :item="item" />
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
import ChoicesSelect from '@/components/ChoicesSelect.vue';

import { shopGrid } from '@/views/pages/shop/shop/components/data';
import BookCard from '@/views/pages/shop/shop/components/BookCard.vue';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
</script>