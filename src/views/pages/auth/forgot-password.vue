<template>
  <main>
    <section class="p-0 d-flex align-items-center position-relative overflow-hidden">
      <b-container fluid>
        <b-row>
          <b-col cols="12" lg="6"
            class="d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
            <div class="p-3 p-lg-5">
              <div class="text-center">
                <h2 class="fw-bold">Welcome to our largest community</h2>
                <p class="mb-0 h6 fw-light">Let's learn something new today!</p>
              </div>
              <img :src="element02" class="mt-5" alt="">
              <div class="d-sm-flex mt-5 align-items-center justify-content-center">
                <ul class="avatar-group mb-2 mb-sm-0">
                  <li class="avatar avatar-sm">
                    <img class="avatar-img rounded-circle" :src="avatar01" alt="avatar">
                  </li>
                  <li class="avatar avatar-sm">
                    <img class="avatar-img rounded-circle" :src="avatar02" alt="avatar">
                  </li>
                  <li class="avatar avatar-sm">
                    <img class="avatar-img rounded-circle" :src="avatar03" alt="avatar">
                  </li>
                  <li class="avatar avatar-sm">
                    <img class="avatar-img rounded-circle" :src="avatar04" alt="avatar">
                  </li>
                </ul>
                <p class="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="6" class="d-flex justify-content-center">
            <b-row class="my-5">
              <b-col sm="10" xl="12" class="m-auto">
                <span class="mb-0 fs-1">🤔</span>
                <h1 class="fs-2">Forgot Password?</h1>
                <h5 class="fw-light mb-4">To receive a new password, enter your email address below.</h5>
                <b-form>
                  <div class="mb-4">
                    <b-form-group label="Email address *">
                      <b-input-group size="lg">
                        <template #prepend>
                          <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <BIconEnvelopeFill />
                          </span>
                        </template>
                        <b-form-input type="email" class="border-0 bg-light rounded-end ps-1" placeholder="E-mail" />
                      </b-input-group>
                    </b-form-group>
                  </div>
                  <div class="align-items-center">
                    <div class="d-grid">
                      <b-button variant="primary" class="mb-0" type="button">Reset password</b-button>
                    </div>
                  </div>
                </b-form>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>
<script setup lang="ts">
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';

import element02 from '@/assets/images/element/02.svg';
import { BIconEnvelopeFill } from 'bootstrap-icons-vue';
</script>