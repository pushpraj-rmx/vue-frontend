<template>
  <b-card no-body class="bg-transparent border">
    <b-card-header class="bg-light border-bottom">
      <h5 class="mb-0">Invoice History</h5>
    </b-card-header>
    <b-card-body class="pb-0">
      <div class="table-responsive border-0 mb-0">
        <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
          <thead>
            <tr>
              <th scope="col" class="border-0 rounded-start">Invoice ID</th>
              <th scope="col" class="border-0">Course Name</th>
              <th scope="col" class="border-0">Date</th>
              <th scope="col" class="border-0">Payment Method</th>
              <th scope="col" class="border-0">Amount</th>
              <th scope="col" class="border-0">Status</th>
              <th scope="col" class="border-0 rounded-end">Action</th>
            </tr>
          </thead>

          <tbody>

            <tr v-for="(item, idx) in earningList" :key="idx">
              <td>{{ item.id }}</td>
              <td>
                <h6 class="table-responsive-title mb-0"><a href="#">{{ item.title }}</a></h6>
              </td>
              <td>{{ item.date }}</td>
              <td>
                <img :src="item.client_logo" :class="item.type === 'mastercard' ? 'h-50px' : 'w-80px'" alt="">
              </td>
              <td>{{currency}}{{ item.amount }}
                <a href="#" class="h6 mb-0 icons-center" role="button" id="dropdownShare1" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <BIconInfoCircleFill />
                </a>
                <ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                  aria-labelledby="dropdownShare1">
                  <li>
                    <div class="d-flex justify-content-between">
                      <span class="small">Commission</span>
                      <span class="h6 mb-0 small">{{currency}}86</span>
                    </div>
                    <hr class="my-1">
                  </li>
                  <li>
                    <div class="d-flex justify-content-between">
                      <span class="me-4 small">Us royalty withholding</span>
                      <span class="text-danger small">-{{currency}}0.00</span>
                    </div>
                    <hr class="my-1">
                  </li>
                  <li>
                    <div class="d-flex justify-content-between">
                      <span class="small">Earning</span>
                      <span class="h6 mb-0 small">{{currency}}86</span>
                    </div>
                  </li>
                </ul>
              </td>
              <td>
                <div class="badge bg-opacity-10"
                  :class="item.status === 'Paid' ? 'bg-success text-success' : item.status === 'Cancel' ? 'bg-danger text-danger' : 'bg-orange text-orange'">
                  {{ item.status }}
                </div>
              </td>
              <td>
                <a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" v-b-tooltip.hover.top="'Download'">
                  <BIconDownload />
                </a>
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
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';
import { earningList } from '@/views/admin/earning/components/data';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BIconInfoCircleFill, BIconDownload } from 'bootstrap-icons-vue';
</script>