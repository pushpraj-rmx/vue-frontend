<template>
  <InstructorLayout>
    <b-col xl="9">
      <b-card no-body class="border bg-transparent rounded-3">
        <b-card-header class="bg-transparent border-bottom">
          <h3 class="mb-0">Order List</h3>
        </b-card-header>
        <b-card-body>
          <b-row class="g-3 align-items-center justify-content-between mb-4">
            <b-col md="8">
              <b-form class="rounded position-relative">
                <b-form-input class="pe-5 bg-transparent" type="search" placeholder="Search" />
                <button
                  class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                  type="submit">
                  <font-awesome-icon :icon="faSearch" class="fs-6" />
                </button>
              </b-form>
            </b-col>

            <b-col md="3">
              <b-form>
                <ChoicesSelect id="sort-by" class="border-0 z-index-9 bg-transparent">
                  <option value="">Sort by</option>
                  <option>Free</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </ChoicesSelect>
              </b-form>
            </b-col>
          </b-row>

          <div class="table-responsive border-0">
            <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th scope="col" class="border-0 rounded-start">Course name</th>
                  <th scope="col" class="border-0">Order ID</th>
                  <th scope="col" class="border-0">Date</th>
                  <th scope="col" class="border-0">Amount</th>
                  <th scope="col" class="border-0 rounded-end">Payment</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, idx) in orderList" :key="idx">
                  <td>
                    <h6 class="table-responsive-title mt-2 mt-lg-0 mb-0"><a href="#">{{ item.title }}</a></h6>
                  </td>

                  <td class="text-center text-sm-start text-primary-hover">
                    <a href="#" class="text-body"><u>#{{ item.order_id }}</u></a>
                  </td>

                  <td>{{ item.date }}</td>

                  <td>{{ currency }}{{ item.amount }}</td>

                  <td>{{ item.payment_method }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
            <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1">
                    <font-awesome-icon :icon="faAngleLeft" />
                  </a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">
                    <font-awesome-icon :icon="faAngleRight" />
                  </a></li>
              </ul>
            </nav>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </InstructorLayout>
</template>
<script setup lang="ts">
import InstructorLayout from '@/layouts/InstructorLayout.vue';
import { orderList } from '@/views/accounts/instructor/orders/components/data';
import { currency } from '@/helpers/constants';

import { faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
</script>