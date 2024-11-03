<template>
  <b-card no-body class="card-body bg-transparent pb-0 border mb-4">
    <div class="table-responsive border-0 mb-0">
      <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
        <thead>
          <tr>
            <th scope="col" class="border-0 rounded-start">#</th>
            <th scope="col" class="border-0">Student Name</th>
            <th scope="col" class="border-0">Course Name</th>
            <th scope="col" class="border-0">Rating</th>
            <th scope="col" class="border-0">Hide/Show</th>
            <th scope="col" class="border-0 rounded-end">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in reviewList" :key=idx>
            <td>0{{ item.id }}</td>
            <td>
              <div class="d-flex align-items-center position-relative">
                <div class="avatar avatar-xs mb-2 mb-md-0">
                  <img :src="item.image" class="rounded-circle" alt="">
                </div>
                <div class="mb-0 ms-2">
                  <h6 class="mb-0"><a href="#" class="stretched-link">{{ item.name }}</a></h6>
                </div>
              </div>
            </td>
            <td>
              <h6 class="table-responsive-title mb-0"><a href="#">{{ item.course }}</a></h6>
            </td>
            <td>
              <ul class="list-inline mb-0 hstack gap-1" v-if="item.rating">
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
              <div class="form-check form-switch form-check-md">
                <input class="form-check-input" type="checkbox" id="checkPrivacy1">
              </div>
            </td>
            <td>
              <a href="#" class="btn btn-success-soft btn-round me-2 mb-1 mb-md-0" v-b-tooltip.hover.top="'Edit'">
                <BIconPencilSquare />
              </a>
              <button class="btn btn-danger-soft btn-round me-2 mb-1 mb-md-0" v-b-tooltip.hover.top="'Delete'">
                <BIconTrash />
              </button>
              <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview"
                @click="showModal = !showModal">View</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-card-footer class="bg-transparent px-0">
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

  <b-modal v-model="showModal" title="Review" header-class="bg-dark" title-class="text-white" ok-only ok-title="Close"
    ok-variant="danger-soft" centered>
    <div class="d-md-flex">
      <div class="avatar avatar-md me-4 flex-shrink-0">
        <img class="avatar-img rounded-circle" :src="avatar09" alt="avatar">
      </div>
      <div>
        <div class="d-sm-flex mt-1 mt-md-0 align-items-center">
          <h5 class="me-3 mb-0">Lori Stevens</h5>
          <ul class="list-inline mb-0 hstack gap-1">
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
          </ul>
        </div>
        <p class="small mb-2">2 days ago</p>
        <p class="mb-2">
          Handsome met debating sir dwelling age material. As style lived he worse dried. Offered
          related so visitors we private removed. Moderate do subjects to distance.
        </p>
        <p class="mb-2">
          As style lived he worse dried. Offered related so visitors we private removed. Moderate do
          subjects to distance.
        </p>
      </div>
    </div>
  </b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { reviewList } from '@/views/admin/reviews/components/data';
import { faStar, faStarHalfAlt, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
import { BIconPencilSquare, BIconTrash } from 'bootstrap-icons-vue';
import avatar09 from '@/assets/images/avatar/09.jpg';

const showModal = ref(false);
</script>