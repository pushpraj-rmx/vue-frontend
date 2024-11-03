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

          <b-col cols="12" lg="6" class="m-auto">
            <b-row class="my-5">
              <b-col sm="10" xl="8" class="m-auto">
                <span class="mb-0 fs-1">👋</span>
                <h1 class="fs-2">Login into Eduport!</h1>
                <p class="lead mb-4">Nice to see you! Please log in with your account.</p>

                <b-form @submit.prevent="handleSignIn">
                  <div v-if="error.length > 0" class="mb-4 text-danger">{{ error }}</div>
                  <div class="mb-4">
                    <b-form-group label="Email address *">
                      <b-input-group size="lg">
                        <template #prepend>
                          <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <BIconEnvelopeFill />
                          </span>
                        </template>
                        <b-form-input type="email" class="border-0 bg-light rounded-end ps-1" placeholder="E-mail"
                          v-model="credentials.email" id="username-input" />
                      </b-input-group>
                    </b-form-group>
                  </div>
                  <div class="mb-4">
                    <b-form-group label="Password *">
                      <b-input-group size="lg">
                        <template #prepend>
                          <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <font-awesome-icon :icon="faLock" />
                          </span>
                        </template>
                        <b-form-input type="password" class="border-0 bg-light rounded-end ps-1" placeholder="*********"
                          v-model="credentials.password" />
                      </b-input-group>
                    </b-form-group>
                    <div id="passwordHelpBlock" class="form-text">
                      Your password must be 8 characters at least
                    </div>
                  </div>
                  <div class="mb-4 d-flex justify-content-between">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div class="text-primary-hover">
                      <router-link :to="{ name: 'auth.forgot-password' }" class="text-secondary">
                        <u>Forgot password?</u>
                      </router-link>
                    </div>
                  </div>
                  <div class="align-items-center mt-0">
                    <div class="d-grid">
                      <b-button variant="primary" class="mb-0" type="submit">Login</b-button>
                    </div>
                  </div>
                </b-form>

                <b-row>
                  <div class="position-relative my-4">
                    <hr>
                    <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                  </div>

                  <b-col xxl="6" class="d-grid">
                    <a href="#" class="btn bg-google mb-2 mb-xxl-0 flex-centered">
                      <font-awesome-icon :icon="faGoogle" class="fa-fw text-white me-2" />
                      Login with Google
                    </a>
                  </b-col>
                  <b-col xxl="6" class="d-grid">
                    <a href="#" class="btn bg-facebook mb-0 flex-centered">
                      <font-awesome-icon :icon="faFacebookF" class="fa-fw me-2" />
                      Login with Facebook
                    </a>
                  </b-col>
                </b-row>
                <div class="mt-4 text-center">
                  <span>Don't have an account? 
                    <router-link :to="{ name: 'auth.sign-up' }">Signup here</router-link>
                  </span>
                </div>
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

import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { BIconEnvelopeFill } from 'bootstrap-icons-vue';

import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { AxiosResponse } from 'axios';
import * as yup from 'yup';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import HttpClient from '@/helpers/http-client';
import type { UserType } from '@/types/index';

const credentials = reactive({
  id: '1',
  email: 'user@email.com',
  password: 'password'
});

const useAuth = useAuthStore();
const route = useRoute();
const query = route.query;

const error = ref('');

const loginFormSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password')
});

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`);
  }
  return router.push('/');
};

const handleSignIn = async () => {
  let user = {};
  await loginFormSchema
    .validate(credentials)
    .then((res) => (user = res))
    .catch((e) => {
      return (error.value = e.message);
    });

  try {
    const res: AxiosResponse<UserType> = await HttpClient.post('/login', user);

    if (res.data.token) {
      useAuth.saveSession({
        ...res.data,
        token: res.data.token
      });
      redirectUser();
    }
  } catch (e: any) {
    if (e.response?.data?.error) {
      if (error.value.length == 0) error.value = e.response?.data?.error;
    }
  }
};
</script>