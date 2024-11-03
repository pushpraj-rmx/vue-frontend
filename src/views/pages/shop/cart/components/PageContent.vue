<template>
  <section class="pt-5">
    <b-container>
      <b-row class="g-4 g-sm-5">
        <b-col lg="8" class="mb-4 mb-sm-0">
          <b-card no-body class="card-body p-4 shadow">
            <div
              class="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show py-3 pe-2"
              role="alert">
              <div>
                <span class="fs-5 me-1">🔥</span>
                These courses are at a limited discount, please checkout within<strong class="text-danger ms-1">2
                  days and 18 hours</strong>
              </div>
              <button type="button" class="btn btn-link mb-0 text-primary-hover text-end" data-bs-dismiss="alert"
                aria-label="Close">
                <BIconXLg />
              </button>
            </div>

            <div class="table-responsive border-0 rounded-3 mb-0">
              <table class="table align-middle p-4 mb-0">
                <tbody class="border-top-0">
                  <tr>
                    <td>
                      <div class="d-lg-flex align-items-center">
                        <div class="w-100px w-md-80px mb-2 mb-md-0">
                          <img :src="courses08" class="rounded" alt="">
                        </div>
                        <h6 class="mb-0 ms-lg-3 mt-2 mt-lg-0">
                          <a href="#">Building Scalable APIs with GraphQL</a>
                        </h6>
                      </div>
                    </td>

                    <td class="text-center">
                      <h5 class="text-success mb-0">{{ currency }}350</h5>
                    </td>
                    <td>
                      <a href="#" class="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0">
                        <font-awesome-icon :icon="faEdit" class="fa-fw" />
                      </a>{{ ' ' }}
                      <b-button :variant="null" size="sm" class="btn-danger-soft px-2 mb-0">
                        <font-awesome-icon :icon="faTimes" class="fa-fw" />
                      </b-button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-lg-flex align-items-center">
                        <div class="w-100px w-md-80px mb-2 mb-md-0">
                          <img :src="courses10" class="rounded" alt="">
                        </div>
                        <h6 class="mb-0 ms-lg-3 mt-2 mt-lg-0">
                          <a href="#">Bootstrap 5 From Scratch</a>
                        </h6>
                      </div>
                    </td>

                    <td class="text-center">
                      <h5 class="text-success mb-0">{{ currency }}150</h5>
                    </td>
                    <td>
                      <a href="#" class="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0">
                        <font-awesome-icon :icon="faEdit" class="fa-fw" />
                      </a>{{  ' ' }}
                      <b-button :variant="null" size="sm" class="btn-danger-soft px-2 mb-0">
                        <font-awesome-icon :icon="faTimes" class="fa-fw" />
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <b-row class="g-3 mt-2">
              <b-col md="6">
                <b-input-group>
                  <b-form-input type="email" placeholder="COUPON CODE" />
                  <b-button type="button" variant="primary">Apply coupon</b-button>
                </b-input-group>
              </b-col>
              <b-col md="6" class="text-md-end">
                <b-button variant="primary" class="mb-0" disabled>Update cart</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col lg="4">
          <b-card no-body class="card-body p-4 shadow">
            <h4 class="mb-3">Cart Total</h4>

            <ul class="list-group list-group-borderless mb-2">
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">Original Price</span>
                <span class="h6 fw-light mb-0 fw-bold">{{ currency }}500</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">Coupon Discount</span>
                <span class="text-danger">-{{ currency }}20</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h5 mb-0">Total</span>
                <span class="h5 mb-0">{{ currency }}480</span>
              </li>
            </ul>

            <div class="d-grid">
              <router-link :to="{ name: 'shop.checkout' }" class="btn btn-lg btn-success">Proceed to
                Checkout</router-link>
            </div>

            <p class="small mb-0 mt-2 text-center">By completing your purchase, you agree to these <a
                href="#"><strong>Terms of Service</strong></a></p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { BIconXLg } from 'bootstrap-icons-vue';
import { currency } from '@/helpers/constants';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses10 from '@/assets/images/courses/4by3/10.jpg';
</script>