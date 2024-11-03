<template>
  <section id="contact-form" class="position-relative overflow-hidden pt-0 pt-md-5">
    <b-container>
      <b-row class="g-4 g-lg-5 align-items-center">
        <b-col lg="6">
          <h2 class="h1 mb-3">Get in touch with us</h2>
          <p>Claim your free 10-minute phone call to see if we are right for your kid.</p>

          <b-row class="mt-5">
            <b-col sm="6" lg="12" xl="6" class="mb-5">
              <b-card no-body class="card-body shadow">
                <div
                  class="icon-lg bg-success text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6 flex-centered">
                  <BIconWhatsapp />
                </div>
                <h6>WhatsApp number</h6>
                <p class="h6 mb-0">
                  <a href="#" class="text-primary-hover mb-0 fw-light stretched-link">
                    +256 359 556
                  </a>
                </p>
              </b-card>
            </b-col>
            <b-col sm="6" lg="12" xl="6" class="mb-5 mb-xl-0">
              <b-card no-body class="card-body shadow">
                <div
                  class="icon-lg bg-purple text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6">
                  <font-awesome-icon :icon="faTty" />
                </div>
                <h6>Telephone</h6>
                <p class="h6 mb-0">
                  <a href="#" class="text-primary-hover mb-0 fw-light stretched-link">
                    +123 456 789
                  </a>
                </p>
              </b-card>
            </b-col>
            <b-col cols="12" class="mb-5 mb-xl-0">
              <b-card no-body class="card-body shadow">
                <div
                  class="icon-lg bg-orange text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6">
                  <font-awesome-icon :icon="faGlobe" />
                </div>
                <h6>Address</h6>
                <p class="h6 mb-0">
                  <a href="#" class="text-primary-hover mb-0 fw-light stretched-link">
                    2492 Centennial NW, Acworth, GA, 30102
                  </a>
                </p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="6">
          <b-card no-body class="card-body shadow p-4 p-sm-5 position-relative">
            <b-form class="row g-3 position-relative">
              <b-col md="6" lg="12" xl="6">
                <b-form-group label="Name *">
                  <b-form-input type="text" />
                </b-form-group>
              </b-col>
              <b-col md="6" lg="12" xl="6">
                <b-form-group label="Phone number *">
                  <b-form-input type="text" />
                </b-form-group>
              </b-col>
              <b-col md="6" lg="12" xl="6">
                <b-form-group label="Whatsapp number *">
                  <b-form-input type="text" />
                </b-form-group>
              </b-col>
              <b-col md="6" lg="12" xl="6">
                <b-form-group label="Email *">
                  <b-form-input type="email" />
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group label="Contact Purpose">
                  <b-form-select v-model="contactSelected" :options="contactOptions" />
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group label="Message *">
                  <b-form-textarea placeholder="Enter something..." rows="3" max-rows="6" />
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-button type="submit" variant="primary" class="mb-0">Send Inquiry</b-button>
              </b-col>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { faTty, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { BIconWhatsapp } from 'bootstrap-icons-vue';

const contactSelected = ref(null);

const contactOptions = [
  { value: null, text: 'Contact Purpose' },
  { value: 1, text: 'IELTS' },
  { value: 2, text: 'PTE' },
  { value: 3, text: 'GRE' },
  { value: 4, text: 'Study In CANADA' },
  { value: 5, text: 'Study In U.K' },
  { value: 6, text: 'Get In Touch With Our Executive' }
];
</script>