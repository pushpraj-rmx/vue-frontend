<template>
  <TopBar8 />
  <main>
    <section class="py-0 bg-blue h-100px align-items-center d-flex h-200px rounded-0"
      :style="`background:url(${pattern04}) no-repeat center center; background-size:cover;`">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
            <h1 class="text-white">Submit a new Course</h1>
            <p class="text-white mb-0">Read our <a href="#" class="text-white"><u>"Before you create a course"</u></a>
              article before submitting!</p>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section>
      <b-container>
        <b-row>
          <b-col md="8" class="mx-auto text-center">
            <p class="text-center">Use this interface to add a new Course to the portal. Once you are done adding the
              item it will be reviewed for quality. If approved, your course will appear for sale and you will be
              informed by email that your course has been accepted.</p>
          </b-col>
        </b-row>
        <b-card no-body class="bg-transparent border rounded-3 mb-5">
          <div id="stepper" ref="stepperRef" class="bs-stepper stepper-outline">
            <b-card-header class="bg-light border-bottom px-lg-5">
              <div class="bs-stepper-header" role="tablist">
                <div class="step" data-target="#step-1">
                  <div class="d-grid text-center align-items-center">
                    <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1"
                      aria-controls="step-1">
                      <span class="bs-stepper-circle">1</span>
                    </button>
                    <h6 class="bs-stepper-label d-none d-md-block">Course details</h6>
                  </div>
                </div>
                <div class="line"></div>

                <div class="step" data-target="#step-2">
                  <div class="d-grid text-center align-items-center">
                    <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2"
                      aria-controls="step-2">
                      <span class="bs-stepper-circle">2</span>
                    </button>
                    <h6 class="bs-stepper-label d-none d-md-block">Course media</h6>
                  </div>
                </div>
                <div class="line"></div>

                <div class="step" data-target="#step-3">
                  <div class="d-grid text-center align-items-center">
                    <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3"
                      aria-controls="step-3">
                      <span class="bs-stepper-circle">3</span>
                    </button>
                    <h6 class="bs-stepper-label d-none d-md-block">Curriculum</h6>
                  </div>
                </div>
                <div class="line"></div>

                <div class="step" data-target="#step-4">
                  <div class="d-grid text-center align-items-center">
                    <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4"
                      aria-controls="step-4">
                      <span class="bs-stepper-circle">4</span>
                    </button>
                    <h6 class="bs-stepper-label d-none d-md-block">Additional information</h6>
                  </div>
                </div>
              </div>
            </b-card-header>

            <b-card-body>
              <div class="bs-stepper-content">
                <b-form onsubmit="return false">
                  <Step1 :nextPage="nextPage" />
                  <Step2 :nextPage="nextPage" :previousPage="previousPage" />
                  <Step3 :nextPage="nextPage" :previousPage="previousPage" />
                  <Step4 :previousPage="previousPage" />
                </b-form>
              </div>
            </b-card-body>
          </div>
        </b-card>
      </b-container>
    </section>
  </main>
  <Footer7 />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TopBar8 from '@/views/accounts/instructor/create-course/components/TopBar8.vue';
import Step1 from '@/views/accounts/instructor/create-course/components/Step1.vue';
import Step2 from '@/views/accounts/instructor/create-course/components/Step2.vue';
import Step3 from '@/views/accounts/instructor/create-course/components/Step3.vue';
import Step4 from '@/views/accounts/instructor/create-course/components/Step4.vue';
import Footer7 from '@/views/accounts/instructor/create-course/components/Footer7.vue';

import pattern04 from '@/assets/images/pattern/04.png';

import Stepper from 'bs-stepper';
import type { default as StepperType } from 'bs-stepper';

const stepperRef = ref<HTMLElement | null>(null);

let stepperInstance = ref<StepperType>();

onMounted(() => {
  if (stepperRef.value) {
    stepperInstance.value = new Stepper(stepperRef.value, {
      linear: false,
      animation: true
    });
  }
});

const nextPage = () => {
  stepperInstance.value?.next();
};

const previousPage = () => {
  stepperInstance.value?.previous();
};
</script>