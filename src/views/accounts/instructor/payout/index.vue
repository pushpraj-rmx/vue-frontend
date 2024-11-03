<template>
  <InstructorLayout>
    <b-col xl="9">
      <b-row class="g-4 mb-4">
        <b-col sm="6" md="4">
          <div class="border p-3 rounded-3 h-100">
            <div class="d-flex mb-1 justify-content-between align-items-center">
              <h6 class="mb-0">Last month payout</h6>
              <span class="badge bg-success bg-opacity-10 text-success ms-2 mb-0">Paid</span>
            </div>
            <h2 class="mb-2 mt-2">{{ currency }}12,825</h2>
            <a href="#">View transaction</a>
          </div>
        </b-col>

        <b-col sm="6" md="4">
          <div class="border p-3 rounded-3 h-100">
            <h6 class="mb-0">This month earning</h6>
            <h2 class="mb-2 mt-2">{{ currency }}15,356</h2>
            <p class="mb-0">Expected payout on 05/01/2023</p>
          </div>
        </b-col>

        <b-col sm="6" md="4">
          <div class="bg-primary bg-opacity-10 h-100 p-3 rounded-3">
            <h6 class="mb-0">Balance</h6>
            <h2 class="mb-2 mt-2">{{ currency }}8,485</h2>
            <a href="#" class="btn btn-sm btn-primary mb-0">Withdraw Earning</a>
          </div>
        </b-col>
      </b-row>

      <b-card no-body class="bg-transparent border rounded-3">
        <b-card-header class="bg-transparent border-bottom">
          <h3 class="mb-0">Payouts</h3>
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
                  <th scope="col" class="border-0 rounded-start">Payout</th>
                  <th scope="col" class="border-0">Amount</th>
                  <th scope="col" class="border-0">Status</th>
                  <th scope="col" class="border-0 rounded-end">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in payoutList" :key="idx">
                  <td>
                    <h6 class="mt-2 mt-lg-0 mb-0"><a href="#">{{ item.title }}</a></h6>
                  </td>

                  <td>{{ currency }}{{ item.amount }}
                    <DropDown is="span">
                      <a href="#" class="h6 mb-0 icons-center" role="button" id="dropdownShare"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <BIconInfoCircleFill />
                      </a>
                      <ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                        aria-labelledby="dropdownShare">
                        <li>
                          <div class="d-flex justify-content-between">
                            <span class="small">Commission</span>
                            <span class="h6 mb-0 small">{{ currency }}86</span>
                          </div>
                          <hr class="my-1">
                        </li>

                        <li>
                          <div class="d-flex justify-content-between">
                            <span class="me-4 small">Us royalty withholding</span>
                            <span class="text-danger small">-{{ currency }}0.00</span>
                          </div>
                          <hr class="my-1">
                        </li>

                        <li>
                          <div class="d-flex justify-content-between">
                            <span class="small">Earning</span>
                            <span class="h6 mb-0 small">{{ currency }}86</span>
                          </div>
                        </li>
                      </ul>
                    </DropDown>
                  </td>

                  <td class="text-center text-sm-start">
                    <span class="badge bg-opacity-10 bg-success text-success"
                      :class="item.status === 'paid' ? 'bg-success text-success' : item.status === 'cancelled' ? 'bg-danger text-danger' : 'bg-orange text-orange'">
                      {{ toSentenceCase(item.status) }}
                    </span>
                  </td>

                  <td>{{ item.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
            <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon
                      :icon="faAngleLeft" /></a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#"><font-awesome-icon :icon="faAngleRight" /></a>
                </li>
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
import DropDown from '@/components/DropDown.vue';
import { currency } from '@/helpers/constants';
import { payoutList } from '@/views/accounts/instructor/payout/components/data';
import { faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BIconInfoCircleFill } from 'bootstrap-icons-vue';
import { toSentenceCase } from '@/helpers/change-casing';
</script>