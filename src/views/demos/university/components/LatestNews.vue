<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <div class="d-md-flex justify-content-md-between align-items-center">
          <h2 class="mb-2 mb-md-0">Eduport Latest News</h2>
          <div>
            <span class="me-2">Want to read more?</span>
            <a href="#" class="btn btn-sm btn-primary-soft mb-0">Go here
              <font-awesome-icon :icon="faAngleRight" class="ms-1" />
            </a>
          </div>
        </div>
      </b-row>

      <b-row class="g-4">
        <b-col md="6" lg="4">
          <b-card no-body class="bg-transparent">
            <div class="overflow-hidden rounded-3">
              <img :src="event02" class="card-img" alt="Card img">
              <div class="bg-overlay bg-dark opacity-4"></div>
              <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                <a href="#" class="badge text-bg-danger">Student life</a>
              </div>
            </div>
            <b-card-body class="px-3">
              <b-card-title tag="h5"><a href="#">Student Loan Survey: Many Owe {{ currency }}50K-plus</a></b-card-title>
              <p class="text-truncate-2">Affronting imprudence do he he everything. Offered chiefly farther of my no
                colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider.
                Needed except up piqued an. </p>
              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
                <span class="small">30M Ago</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col md="6" lg="8">
          <b-row class="g-4">
            <b-col lg="7">
              <b-card no-body class="bg-light p-3 mb-4">
                <b-card-body>
                  <a href="#" class="badge text-bg-success mb-2">Research</a>
                  <b-card-title tag="h5"><a href="#">How to make a college list</a></b-card-title>
                  <p>Prospective students should start broadly and then narrow their list down to colleges that best
                    fit their needs, experts say.Yet remarkably appearance get him his projection. </p>
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
                    <span class="small">12H Ago</span>
                  </div>
                </b-card-body>
              </b-card>

              <b-card no-body class="bg-transparent">
                <div class="overflow-hidden rounded-3">
                  <img :src="event01" class="card-imgp" alt="Card img">
                  <div class="bg-overlay bg-dark opacity-4"></div>
                  <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                    <a href="#" class="badge text-bg-info">Student story</a>
                  </div>
                </div>
                <b-card-body class="px-3">
                  <b-card-title tag="h5"><a href="#">Campus Support for First-Year Students</a></b-card-title>
                  <p class="text-truncate-2">Prospective students should start broadly and then narrow their list </p>
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-0"><a href="#">Lori Stevens</a></h6>
                    <span class="small">3M Ago</span>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="5">
              <b-card no-body class="bg-transparent">
                <div class="overflow-hidden rounded-3">
                  <img :src="event03" class="card-img-top" alt="course img">
                  <div class="bg-overlay bg-dark opacity-2 rounded-2"></div>
                  <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                    <a href="#" class="badge text-bg-purple">Covid-19</a>
                  </div>
                </div>
                <b-card-body class="px-3">
                  <b-card-title tag="h5"><a href="#">Covid-19 and the college experienced</a></b-card-title>
                  <p>Rooms oh fully taken by worse do. Points afraid but may end law.Points afraid but may end law.
                  </p>
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-0"><a href="#">Amanda Reed</a></h6>
                    <span class="small">July 21, 2021</span>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import event02 from '@/assets/images/event/02.jpg';
import event01 from '@/assets/images/event/01.jpg';
import event03 from '@/assets/images/event/03.jpg';
</script>