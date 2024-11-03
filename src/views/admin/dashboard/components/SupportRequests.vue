<template>
  <b-col xxl="4">
    <b-card no-body class="shadow h-100">
      <b-card-header class="border-bottom d-flex justify-content-between align-items-center p-4">
        <h5 class="card-header-title">Support Requests</h5>
        <a href="#" class="btn btn-link p-0 mb-0">View all</a>
      </b-card-header>
      <b-card-body class="p-4">
        <div class="d-flex justify-content-between position-relative">
          <div class="d-sm-flex">
            <div class="avatar avatar-md flex-shrink-0">
              <img class="avatar-img rounded-circle" :src="avatar09" alt="avatar">
            </div>
            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
              <h6 class="mb-0"><a href="#" class="stretched-link">Lori Stevens</a></h6>
              <p class="mb-0">New ticket #759 from Lori Stevens for General Enquiry</p>
              <span class="small">8 hour ago</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between position-relative">
          <div class="d-sm-flex">
            <div class="avatar avatar-md flex-shrink-0">
              <div class="avatar-img rounded-circle bg-purple bg-opacity-10">
                <span class="text-purple position-absolute top-50 start-50 translate-middle fw-bold">DB</span>
              </div>
            </div>
            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
              <h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>
              <p class="mb-0">Comment from Billy Vasquez on ticket #659</p>
              <span class="small">8 hour ago</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between position-relative">
          <div class="d-sm-flex">
            <div class="avatar avatar-md flex-shrink-0">
              <div class="avatar-img rounded-circle bg-orange bg-opacity-10">
                <span class="text-orange position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
              </div>
            </div>
            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
              <h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>
              <p class="mb-0"><b>Stackbros</b> assign you a new ticket for <b>Eduport theme</b></p>
              <span class="small">5 hour ago</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between position-relative">
          <div class="d-sm-flex">
            <div class="avatar avatar-md flex-shrink-0">
              <img class="avatar-img rounded-circle" :src="avatar04" alt="avatar">
            </div>
            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
              <h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>
              <p class="mb-0">Thanks for contact us with your issues.</p>
              <span class="small">9 hour ago</span>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import avatar09 from '@/assets/images/avatar/09.jpg'
import avatar04 from '@/assets/images/avatar/04.jpg'
</script>