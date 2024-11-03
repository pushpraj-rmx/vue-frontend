<template>
  <section class="pt-9">
    <b-container>
      <b-row>
        <b-col cols="12">
          <P>Perceived end knowledge certainly day sweetness why cordially. On forth doubt miles of child. Exercise joy
            man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne had new manners savings
            staying had. Under folly balls, death own point now men. Match way these she avoids seeing death. She who
            drift their fat off. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material.
            As style lived he worse dried. Offered related so visitors we private removed.</P>
          <p>Yet uncommonly his ten who diminution astonished. Demesne had new manners savings staying had. Under folly
            balls, death own point now men. Match way these she avoids seeing death. She who drift their fat off. Ask a
            quick six seven offer see among. As style lived he worse dried. Offered related so visitors we private
            removed.</p>

          <b-row class="mt-4">
            <h5 class="mt-3">Why Study in Canada?</h5>

            <b-col lg="4">
              <ul class="list-group list-group-borderless">
                <li class="list-group-item h6 fw-normal d-flex">
                  <BIconPatchCheckFill class="text-success me-2" />
                  One of the best places to live and work
                </li>
                <li class="list-group-item h6 fw-normal d-flex">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Affordable education & living
                </li>
                <li class="list-group-item h6 fw-normal d-flex">
                  <BIconPatchCheckFill class="text-success me-2" />
                  20 hrs/week work while Studying
                </li>
              </ul>
            </b-col>

            <b-col lg="4">
              <ul class="list-group list-group-borderless">
                <li class="list-group-item h6 fw-normal d-flex">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Degree recognized all over the world
                </li>
                <li class="list-group-item h6 fw-normal d-flex">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Career-oriented specialized courses
                </li>
                <li class="list-group-item h6 fw-normal d-flex">
                  <BIconPatchCheckFill class="text-success me-2" />
                  2-year study + 3-year work permit + PR
                </li>
              </ul>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12">
              <h5 class="mb-3">Top Courses To Study In Canada</h5>
              <ul class="list-inline hstack gap-3 flex-wrap">
                <li class="list-inline-item" v-for="(item, idx) in courses" :key="idx">
                  <a class="btn btn-light btn-sm mb-0" href="#">{{ item }}</a>
                </li>
              </ul>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12">
              <h5 class="mb-3">Top Level Programs</h5>
              <ul class="list-inline hstack gap-3 flex-wrap">
                <li class="list-inline-item" v-for="(item, idx) in programs" :key="idx">
                  <a class="btn btn-light btn-sm mb-0" href="#">{{ item }}</a>
                </li>
              </ul>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12">
              <div class="table-responsive-md border-0">
                <table class="table table caption-top table-bordered align-middle p-4 mb-0">
                  <caption class="h5 mb-0 bg-primary text-white ps-4 rounded-top">Intake & Deadline</caption>
                  <thead class="border-0">
                    <tr class="border-top-0 table-border-color">
                      <th scope="col">Intake</th>
                      <th scope="col">Months</th>
                      <th scope="col">Deadline</th>
                    </tr>
                  </thead>

                  <tbody class="border-top-0">
                    <tr v-for="(item, idx) in intakeList" :key="idx">
                      <td> <span class="text-body">{{ item.intake }}</span> </td>
                      <td> <span class="text-body">{{ item.months }}</span> </td>
                      <td> <span class="text-body">{{ item.deadline }}</span> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>

          <b-row class="g-4 mt-4">
            <h5>Top Universities In Canada</h5>
            <b-col md="6" xl="4" v-for="(item, idx) in universityList" :key="idx">
              <b-card no-body class="card-body shadow p-4 align-items-start">
                <img class="rounded-1 h-60px" :src="item.logo" alt="university logo">
                <b-card-title tag="h5" class="mt-3 mb-0">{{ item.name }}</b-card-title>
                <span>{{ item.description }}</span>
                <router-link :to="{name: 'demos.university'}" class="btn btn-lg btn-link p-0 mt-3 stretched-link"><u>Visit University</u></router-link>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { universityList, intakeList } from '@/views/pages/abroad-single/components/data';
import { BIconPatchCheckFill } from 'bootstrap-icons-vue';

const courses = ['Engineering', 'Biomedical', 'Visual Arts', 'Business Administration', 'Liberal Arts & Science', 'Social Science', 'Health Care', 'Intensive English', 'Mathematics', 'Computer Science'];

const programs = ['Advance Diploma', 'Applied Degree', 'AEC', 'Associate Degree', 'Bachelor Degree', 'Certificate', 'Diploma', 'Doctorate', 'DEC', 'Post Graduate', 'Master', 'University Transfer'];
</script>