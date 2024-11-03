<template>
  <InstructorLayout>
    <b-col xl="9">
      <b-row class="g-4">
        <b-col sm="6" lg="4">
          <div class="text-center p-4 bg-light rounded-3">
            <h6 class="text-body">Sales this month</h6>
            <h2 class="mb-0 fs-1">{{ currency }}899.95</h2>
          </div>
        </b-col>

        <b-col sm="6" lg="4">
          <div class="text-center p-4 bg-light rounded-3">
            <h6 class="text-body">To be paid
              <a tabindex="0" class="h6 mb-0 icons-center" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
                data-bs-placement="top" data-bs-content="After US royalty withholding tax">
                <BIconInfoCircleFill class="small" />
              </a>
            </h6>
            <h2 class="mb-0 fs-1">{{ currency }}750.35</h2>
          </div>
        </b-col>

        <b-col sm="6" lg="4">
          <div class="text-center p-4 bg-light rounded-3">
            <h6 class="text-body">Lifetime Earnings</h6>
            <h2 class="mb-0 fs-1">{{ currency }}4882.65</h2>
          </div>
        </b-col>
      </b-row>
      <b-card no-body class="card-body bg-transparent rounded-top border overflow-hidden p-0 mt-5">
        <b-row class="g-4 p-4">
          <b-col sm="6" md="4">
            <span class="badge text-bg-dark">Current Month</span>
            <h4 class="text-primary my-2">{{ currency }}35000</h4>
            <p class="mb-0"><span class="text-success me-1 icons-center">0.20%
                <BIconArrowUp />
              </span>vs last month</p>
          </b-col>

          <b-col sm="6" md="4">
            <span class="badge text-bg-dark">Last Month</span>
            <h4 class="my-2">{{ currency }}28000</h4>
            <p class="mb-0"><span class="text-danger me-1 icons-center">0.10%
                <BIconArrowDown />
              </span>Then last month</p>
          </b-col>
        </b-row>

        <ApexChart :chart="payoutEarningChart" class="apex-charts" id="ChartPayoutEarning" />

      </b-card>
      <b-card no-body class="bg-transparent border rounded-3 mt-5">
        <b-card-header class="bg-transparent">
          <h5 class="mb-0">Top five earning sources</h5>
        </b-card-header>
        <b-card-body>
          <b-row class="g-4 g-md-5 align-items-center">
            <b-col md="6">
              <ApexChart :chart="pageViewsChart" class="apex-charts" id="ChartPageViews" />
            </b-col>

            <b-col md="6">
              <ul class="list-group list-group-borderless mb-3">
                <li class="list-group-item">
                  <h6 class="mb-0">Course Name</h6>
                </li>
                <li class="list-group-item">
                  <font-awesome-icon :icon="faCircle" class="text-success me-1" />
                  The Complete Digital Marketing Course - 12 Courses in 1
                </li>
                <li class="list-group-item">
                  <font-awesome-icon :icon="faCircle" class="text-warning me-1" />
                  Google Ads Training: Become a PPC Expert
                </li>
                <li class="list-group-item">
                  <font-awesome-icon :icon="faCircle" class="text-danger me-1" />
                  Microsoft Excel - Excel from Beginner to Advanced
                </li>
                <li class="list-group-item">
                  <font-awesome-icon :icon="faCircle" class="text-primary me-1" />
                  Create a Design System in Figma
                </li>
                <li class="list-group-item">
                  <font-awesome-icon :icon="faCircle" class="text-secondary me-1" />
                  Deep Learning with React-Native
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </InstructorLayout>
</template>
<script setup lang="ts">
import InstructorLayout from '@/layouts/InstructorLayout.vue';
import { currency } from '@/helpers/constants';
import { payoutEarningChart, pageViewsChart } from '@/views/accounts/instructor/earning/data';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { BIconInfoCircleFill, BIconArrowUp, BIconArrowDown } from 'bootstrap-icons-vue';
</script>