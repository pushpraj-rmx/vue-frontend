<template>
  <b-col xxl="7">
    <b-card no-body class="bg-transparent border rounded-3 h-100">
      <b-card-header class="bg-light border-bottom">
        <h5 class="card-header-title mb-0">Personal Information</h5>
      </b-card-header>
      <b-card-body>
        <div class="avatar avatar-xl mb-3">
          <img class="avatar-img rounded-circle border border-white border-3 shadow" :src="avatar07" alt="">
        </div>
        <b-row>
          <b-col md="6">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item">
                <span>Title:</span>
                <span class="h6 mb-0">Mr.</span>
              </li>

              <li class="list-group-item">
                <span>Full Name:</span>
                <span class="h6 mb-0">Louis Ferguson</span>
              </li>

              <li class="list-group-item">
                <span>User Name:</span>
                <span class="h6 mb-0">Lousifer</span>
              </li>

              <li class="list-group-item">
                <span>Mobile Number:</span>
                <span class="h6 mb-0">+123 456 789 10</span>
              </li>
            </ul>
          </b-col>

          <b-col md="6">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item">
                <span>Email ID:</span>
                <span class="h6 mb-0">example@gmail.com</span>
              </li>

              <li class="list-group-item">
                <span>Location:</span>
                <span class="h6 mb-0">California</span>
              </li>

              <li class="list-group-item">
                <span>Joining Date:</span>
                <span class="h6 mb-0">29 Aug 2019</span>
              </li>
            </ul>
          </b-col>

          <b-col cols="12">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item">
                <span>Education:</span>
                <span class="h6 mb-0">Bachelor in Computer Graphics,</span>
                <span class="h6 mb-0">Masters in Computer Graphics</span>
              </li>
            </ul>
          </b-col>

          <b-col cols="12">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item d-flex">
                <span>Description:</span>
                <p class="h6 mb-0">As it so contrasted oh estimating instrument. Size like body someone had. Are
                  conduct viewing boy minutes warrant the expense Tolerably behavior may admit daughters offending
                  her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had.
                  Do he it part more last in</p>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import avatar07 from '@/assets/images/avatar/07.jpg';
</script>