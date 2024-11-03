<template>
  <section class="mb-9 position-relative"
    :style="`background-image:url(${bg07}); background-position: center left; background-size: cover;`">
    <div class="bg-overlay bg-blue opacity-9"></div>
    <b-container class="z-index-9 position-relative">
      <b-row class="g-4 justify-content-between align-items-center">
        <b-col lg="6">
          <h1 class="text-white">Become a professional in either field</h1>
          <p class="text-white mb-3">Man children rejoiced yet uncommonly his ten who. Yet uncommonly his ten who
            diminution astonished. Yet uncommonly his ten who diminution astonished.</p>
          <a href="#" class="btn btn-white mb-0">Explore our courses
            <BIconArrowRight class="ms-2" />
          </a>
        </b-col>
        <b-col lg="6" xl="5" class="mb-n9">
          <b-card no-body class="card-body shadow p-4 p-sm-5">
            <h2 class="mb-0 h3">Welcome back</h2>
            <p class="mb-0">New here?<a href="#"> Create an account</a></p>
            <form class="mt-3 mt-sm-4 text-start">
              <div class="mb-3">
                <b-form-group label="Enter email id">
                  <b-form-input type="email" />
                </b-form-group>
              </div>
              <div class="mb-3">
                <b-form-group label="Enter password">
                  <b-form-input type="password" />
                </b-form-group>
              </div>
              <div class="mb-3 d-sm-flex justify-content-between">
                <div>
                  <input type="checkbox" class="form-check-input" id="rememberCheck">{{ ' ' }}
                  <label class="form-check-label" for="rememberCheck">Remember me?</label>
                </div>
                <a href="#" class="text-primary-hover text-muted">Forgot password?</a>
              </div>
              <div class="d-grid"><b-button type="submit" variant="dark" class="mb-0">Login</b-button></div>

              <div class="position-relative my-4">
                <hr>
                <p class="small position-absolute top-50 start-50 translate-middle bg-body px-2">Or sign in with</p>
              </div>

              <b-row class="g-3">
                <b-col sm="6" class="d-grid">
                  <a href="#" class="btn btn-outline-light mb-0">
                    <v-icon name="fc-google" class="fa-fw text-google-icon me-2" />
                    Google
                  </a>
                </b-col>

                <b-col sm="6" class="d-grid">
                  <a href="#" class="btn btn-outline-light mb-0">
                    <font-awesome-icon :icon="faFacebookF" class="fa-fw text-facebook me-2" />
                    Facebook
                  </a>
                </b-col>
              </b-row>
            </form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import bg07 from '@/assets/images/bg/07.jpg';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { BIconArrowRight } from 'bootstrap-icons-vue';
</script>