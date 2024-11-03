<template>
  <b-col xxl="7">
    <b-card no-body class="bg-transparent border h-100">
      <b-card-header class="bg-light border-bottom">
        <h5 class="mb-0">Top Rated Courses</h5>
      </b-card-header>
      <b-card-body class="pb-0">
        <div class="table-responsive border-0 mb-0">
          <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
            <thead>
              <tr>
                <th scope="col" class="border-0 rounded-start">Course Name</th>
                <th scope="col" class="border-0">Enrolled</th>
                <th scope="col" class="border-0">Rating</th>
                <th scope="col" class="border-0 rounded-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in topRatedList" :key="idx">
                <td class="text-center text-sm-start d-flex align-items-center position-relative">
                  <div class="w-60px">
                    <img :src="item.image" class="rounded" alt="">
                  </div>
                  <h6 class="mb-0 ms-2"><a href="#" class="stretched-link">{{ item.title }}</a>
                  </h6>
                </td>
                <td>{{ item.views }}</td>
                <td>
                  <ul class="list-inline mb-0" v-if="item.rating">
                <li className="list-inline-item me-0 small"
                  v-for="(_star, idx) in Array(Math.floor(item.rating)).fill(0)" :key="idx">
                  <font-awesome-icon :icon="faStar" class="text-warning" />
                </li>
                <li className="list-inline-item me-0 small" v-if="!Number.isInteger(item.rating)">
                  <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                </li>
                <li className="list-inline-item me-0 small"
                  v-for="(_star, idx) in item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0)" :key="idx">
                  <font-awesome-icon :icon="faStarR" class="text-warning" />
                </li>
              </ul>
                </td>
                <td>
                  <a href="#" class="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" v-b-tooltip.hover.top="'Edit'">
                    <BIconPencilSquare />
                  </a>
                  <button class="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" v-b-tooltip.hover.top="'Delete'">
                    <BIconTrash />
                  </button>
                  <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal"
                    data-bs-target="#viewReview">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card-body>
      <b-card-footer class="bg-transparent">
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
  </b-col>
</template>
<script setup lang="ts">
import { topRatedList } from '@/views/admin/reviews/components/data';
import { faStar, faStarHalfAlt, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
import { BIconPencilSquare, BIconTrash } from 'bootstrap-icons-vue';
</script>