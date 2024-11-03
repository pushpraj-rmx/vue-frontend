<template>
  <section class="py-0">
    <b-container>
      <b-row class="g-4">
        <b-col lg="6" class="position-relative overflow-hidden">
          <div class="bg-primary bg-opacity-10 rounded-3 p-5 h-100">
            <div class="position-absolute bottom-0 end-0 me-3">
              <img :src="element08" class="h-100px h-sm-200px" alt="">
            </div>
            <b-row>
              <b-col sm="8" class="position-relative">
                <h3 class="mb-1">Earn a Certificate</h3>
                <p class="mb-3 h5 fw-light lead">Get the right professional certificate program for you.</p>
                <a href="#" class="btn btn-primary mb-0">View Programs</a>
              </b-col>
            </b-row>
          </div>
        </b-col>

        <b-col lg="6" class="position-relative overflow-hidden">
          <div class="bg-secondary rounded-3 bg-opacity-10 p-5 h-100">
            <div class="position-absolute bottom-0 end-0 me-3">
              <img :src="element15" class="h-100px h-sm-200px" alt="">
            </div>
            <b-row>
              <b-col sm="8" class="position-relative">
                <h3 class="mb-1">Best Rated Courses</h3>
                <p class="mb-3 h5 fw-light lead">Enroll now in the most popular and best rated courses.</p>
                <a href="#" class="btn btn-warning mb-0">View Courses</a>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import element08 from '@/assets/images/element/08.svg';
import element15 from '@/assets/images/element/15.svg';
</script>