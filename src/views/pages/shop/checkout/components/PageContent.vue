<template>
  <section class="pt-5">
    <b-container>
      <b-row class="g-4 g-sm-5">
        <b-col xl="8" class="mb-4 mb-sm-0">
          <div
            class="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show py-2 pe-2"
            role="alert">
            <div>
              <BIconExclamationOctagonFill class="me-2" />
              Already have an account? <a href="#" class="text-reset btn-link mb-0 fw-bold">Log in</a>
            </div>
            <button type="button" class="btn btn-link mb-0 text-primary-hover text-end" data-bs-dismiss="alert"
              aria-label="Close">
              <BIconXLg />
            </button>
          </div>
          <b-card no-body class="card-body shadow p-4">
            <h5 class="mb-0">Personal Details</h5>

            <b-form class="row g-3 mt-0">
              <b-col md="6" class="bg-light-input">
                <b-form-group label="Your name *" label-for="yourName">
                  <b-form-input type="text" id="yourName" />
                </b-form-group>
              </b-col>
              <b-col md="6" class="bg-light-input">
                <b-form-group label="Email address *" label-for="emailInput">
                  <b-form-input type="email" id="emailInput" placeholder="Email" />
                </b-form-group>
              </b-col>
              <b-col md="6" class="bg-light-input">
                <b-form-group label="Mobile number *" label-for="mobileNumber">
                  <b-form-input type="text" id="mobileNumber" placeholder="Mobile number" />
                </b-form-group>
              </b-col>
              <b-col md="6" class="bg-light-input">
                <b-form-group label="Select country *">
                  <b-form-select v-model="countrySelected" :options="countryOptions" />
                </b-form-group>
              </b-col>
              <b-col md="6" class="bg-light-input">
                <b-form-group label="Select state *">
                  <b-form-select v-model="stateSelected" :options="stateOptions" />
                </b-form-group>
              </b-col>
              <b-col md="6" class="bg-light-input">
                <b-form-group label="Postal code *" label-for="postalCode">
                  <b-form-input type="text" id="postalCode" placeholder="PIN code" />
                </b-form-group>
              </b-col>
              <b-col md="6" class="bg-light-input">
                <b-form-group label="Address *" label-for="address">
                  <b-form-input type="text" id="address" placeholder="Address" />
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group label="Your saved cards *">
                  <b-row class="g-2">
                    <b-col cols="2" sm="1" class="border rounded me-2">
                      <a href="#"><img :src="mastercard" alt=""></a>
                    </b-col>
                    <b-col cols="2" sm="1" class="border rounded me-2">
                      <a href="#"><img :src="visa" alt=""></a>
                    </b-col>
                    <b-col cols="2" sm="1" class="border rounded me-2">
                      <a href="#"><img :src="aecard" alt=""></a>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-col>
              <b-col cols="12" class="text-end">
                <b-button type="submit" variant="primary" class="mb-0" disabled>Save changes</b-button>
              </b-col>
            </b-form>
            <b-row class="g-3 mt-4">
              <h5>Payment method</h5>
              <b-col cols="12">
                <b-accordion class="accordion-circle" id="accordioncircle">
                  <b-accordion-item title="Credit or Debit Card" button-class="rounded" header-tag="h6" class="mb-3"
                    visible>
                    <b-form class="row g-3">
                      <b-col cols="12">
                        <b-form-group>
                          <template #label>
                            Card Number <span class="text-danger">*</span>
                          </template>
                          <div class="position-relative">
                            <b-form-input type="text" placeholder="xxxx xxxx xxxx xxxx" />
                            <img :src="visa"
                              class="w-40px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                              alt="">
                          </div>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group>
                          <template #label>
                            Expiration date <span class="text-danger">*</span>
                          </template>
                          <div class="input-group">
                            <b-form-input type="text" maxlength="2" placeholder="Month" />
                            <b-form-input type="text" maxlength="4" placeholder="Year" />
                          </div>
                        </b-form-group>
                      </b-col>
                      <b-col md="6">
                        <b-form-group>
                          <template #label>
                            CVV / CVC <span class="text-danger">*</span>
                          </template>
                          <b-form-input type="text" maxlength="3" placeholder="xxx" />
                        </b-form-group>
                      </b-col>
                      <b-col cols="12">
                        <b-form-group>
                          <template #label>
                            Name on Card <span class="text-danger">*</span>
                          </template>
                          <b-form-input type="text" placeholder="Enter card holder name" />
                        </b-form-group>
                      </b-col>
                    </b-form>
                  </b-accordion-item>
                  <b-accordion-item title="Pay with Net Banking" button-class="rounded" header-tag="h6" class="mb-3">
                    <b-form class="row text-start g-3">
                      <p class="mb-1">In order to complete your transaction, we will transfer you over to
                        Eduport secure servers.</p>
                      <p class="my-0">Select your bank from the drop-down list and click proceed to continue
                        with your payment.</p>
                      <b-col md="6">
                        <ChoicesSelect id="bank-select" class="form-select-sm border-0">
                          <option value="">Please choose one</option>
                          <option>Bank of America</option>
                          <option>Bank of India</option>
                          <option>Bank of London</option>
                        </ChoicesSelect>
                      </b-col>
                    </b-form>
                  </b-accordion-item>
                </b-accordion>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <OrderSummary />
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import OrderSummary from '@/views/pages/shop/checkout/components/OrderSummary.vue';
import { BIconExclamationOctagonFill, BIconXLg } from 'bootstrap-icons-vue';

import mastercard from '@/assets/images/client/mastercard.svg';
import visa from '@/assets/images/client/visa.svg';
import aecard from '@/assets/images/client/ae-card.svg';

const stateSelected = ref(null);
const countrySelected = ref(null);

const stateOptions = [
  { value: null, text: 'Select state' },
  { value: 1, text: 'Maharashtra' },
  { value: 2, text: 'Delhi' },
  { value: 3, text: 'Punjab' },
  { value: 4, text: 'London' },
  { value: 5, text: 'New york' },
  { value: 6, text: 'California' }
];

const countryOptions = [
  { value: null, text: 'Select country' },
  { value: 1, text: 'India' },
  { value: 2, text: 'China' },
  { value: 3, text: 'USA' },
  { value: 4, text: 'Canada' },
  { value: 5, text: 'Paris' },
  { value: 6, text: 'Australia' },
  { value: 5, text: 'Japan' },
  { value: 6, text: 'Brazil' }
];
</script>