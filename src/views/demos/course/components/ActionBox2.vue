<template>
  <section class="py-5">
    <b-container class="position-relative">
      <b-row>
        <b-col cols="12">
          <figure class="position-absolute top-50 start-50 translate-middle ms-2">
            <svg>
              <path class="fill-white opacity-2"
                d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z">
              </path>
              <path class="fill-white opacity-2"
                d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z">
              </path>
              <path class="fill-white opacity-2"
                d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z">
              </path>
              <path class="fill-white opacity-2"
                d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z">
              </path>
            </svg>
          </figure>
          <div class="bg-dark p-4 p-sm-5 rounded-3">
            <b-row class="justify-content-center position-relative">
              <figure class="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                <svg width="141px" height="141px">
                  <path
                    d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                </svg>
              </figure>

              <b-col cols="11" class="position-relative">
                <b-row class="align-items-center">
                  <b-col lg="7">
                    <h3 class="text-white mb-0">Create your first online assessment</h3>
                    <p class="text-white small">Boost up your knowledge, grow your skill with the most reliable online
                      courses and certifications</p>
                    <ul class="list-inline mb-0 justify-content-center justify-content-lg-start">
                      <li class="list-inline-item text-white me-2 icons-center">
                        <BIconCheckCircleFill class="text-success me-2" />
                        Free registration
                      </li>{{ ' ' }}
                      <li class="list-inline-item text-white me-2 icons-center">
                        <BIconCheckCircleFill class="text-success me-2" />
                        Powerful features
                      </li>
                    </ul>
                  </b-col>
                  <b-col lg="5" class="text-lg-end mt-3 mt-lg-0">
                    <a href="#" class="btn btn-warning mb-0">Sign Up for Free</a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { BIconCheckCircleFill } from 'bootstrap-icons-vue';
</script>