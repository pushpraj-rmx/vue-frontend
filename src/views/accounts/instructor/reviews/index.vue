<template>
  <InstructorLayout>
    <b-col xl="9">
      <b-card no-body class="border bg-transparent rounded-3">
        <b-card-header class="bg-transparent border-bottom">
          <b-row class="justify-content-between align-middle">
            <b-col sm="6">
              <h3 class="card-header-title mb-2 mb-sm-0">Student review</h3>
            </b-col>

            <b-col sm="4">
              <b-form>
                <ChoicesSelect id="sort-by" class="z-index-9 bg-white">
                  <option value="">Sort by</option>
                  <option>★★★★★ (5/5)</option>
                  <option>★★★★☆ (4/5)</option>
                  <option>★★★☆☆ (3/5)</option>
                  <option>★★☆☆☆ (2/5)</option>
                  <option>★☆☆☆☆ (1/5)</option>
                </ChoicesSelect>
              </b-form>
            </b-col>
          </b-row>
        </b-card-header>

        <b-card-body class="mt-2 mt-sm-4">

          <template v-for="(item, idx) in reviewList" :key="idx">
            <hr v-if="idx">

            <div class="d-sm-flex">
              <img class="avatar avatar-lg rounded-circle float-start me-3" :src="item.image" alt="avatar">
              <div>
                <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                  <div>
                    <h5 class="m-0">{{ item.name }}</h5>
                    <span class="me-3 small">{{ item.date }}</span>
                  </div>
                  <ul class="list-inline mb-0 hstack gap-1">
                    <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                    <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                    <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                    <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                    <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
                  </ul>
                </div>
                <h6><span class="text-body fw-light">Review on: </span>{{ item.title }}</h6>
                <p>{{ item.content }}</p>
                <div class="text-end">
                  <a href="#" class="btn btn-sm btn-primary-soft mb-1 mb-sm-0">Direct message</a>{{ ' ' }}
                  <a class="btn btn-sm btn-light mb-0" href="#" role="button" v-b-toggle="`collapse-${idx}`">
                    Reply
                  </a>
                  <b-collapse :id="`collapse-${idx}`" :visible="!idx">
                    <div class="d-flex mt-3">
                      <b-form-textarea placeholder="Add a comment..." rows="2" max-rows="6" />

                      <b-button :variant="null" size="sm" class="btn-primary-soft ms-2 px-4 mb-0 flex-shrink-0">
                        <font-awesome-icon :icon="faPaperPlane" class="fs-5" />
                      </b-button>
                    </div>
                  </b-collapse>
                </div>
              </div>
            </div>
          </template>
        </b-card-body>

        <b-card-footer class="border-top">
          <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
            <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul class="pagination pagination-sm pagination-primary-soft my-0 py-0">
                <li class="page-item my-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon :icon="faAngleLeft" /></a></li>
                <li class="page-item my-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item my-0 active"><a class="page-link" href="#">2</a></li>
                <li class="page-item my-0"><a class="page-link" href="#">3</a></li>
                <li class="page-item my-0"><a class="page-link" href="#"><font-awesome-icon :icon="faAngleRight" /></a>
                </li>
              </ul>
            </nav>
          </div>
        </b-card-footer>
      </b-card>
    </b-col>
  </InstructorLayout>
</template>
<script setup lang="ts">
import InstructorLayout from '@/layouts/InstructorLayout.vue';
import { reviewList } from '@/views/accounts/instructor/reviews/components/data';

import { faPaperPlane, faStar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
</script>