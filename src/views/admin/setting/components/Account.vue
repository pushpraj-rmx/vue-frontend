<template>
  <div class="bg-light rounded-3 p-4 mb-3">
    <div class="d-md-flex justify-content-between align-items-center">
      <div>
        <h6 class="h5">Activity Logs</h6>
        <p class="mb-1 mb-md-0">You can save your all activity logs including unusual activity detected.</p>
      </div>
      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy1" checked>
      </div>
    </div>
  </div>

  <div class="bg-light rounded-3 p-4 mb-3">
    <div class="d-md-flex justify-content-between align-items-center">
      <div>
        <h6 class="h5">Change Password</h6>
        <p class="mb-1 mb-md-0">Set a unique password to protect your account.</p>
      </div>
      <div>
        <a href="#" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#changePassword"
          @click="showModal = !showModal">Change Password</a>
        <p class="mb-0 small h6">Last change 10 Aug 2020</p>
      </div>
    </div>
  </div>

  <div class="bg-light rounded-3 p-4">
    <div class="d-md-flex justify-content-between align-items-center">
      <div>
        <h6 class="h5">2 Step Verification</h6>
        <p class="mb-1 mb-md-0">Secure your account with 2 Step security. When it is activated you will need
          to enter not only your password, but also a special code using app. You can receive this code by in
          mobile app.</p>
      </div>
      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy13" checked>
      </div>
    </div>
  </div>

  <b-card no-body class="border mt-4">

    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Active Logs</h5>
    </b-card-header>

    <b-card-body>
      <div class="table-responsive border-0 mb-0">
        <b-table-simple class="table-dark-gray align-middle p-4 mb-0 table-hover">
          <b-thead>
            <b-tr>
              <b-th scope="col" class="border-0 rounded-start">Browser</b-th>
              <b-th scope="col" class="border-0">IP</b-th>
              <b-th scope="col" class="border-0">Time</b-th>
              <b-th scope="col" class="border-0 rounded-end">Action</b-th>
            </b-tr>
          </b-thead>

          <b-tbody>
            <b-tr>
              <b-td>Chrome On Window</b-td>
              <b-td>173.238.198.108</b-td>
              <b-td>12 Nov 2021</b-td>
              <b-td>
                <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
              </b-td>
            </b-tr>

            <b-tr>
              <b-td>Mozilla On Window</b-td>
              <b-td>107.222.146.90</b-td>
              <b-td>08 Nov 2021</b-td>
              <b-td>
                <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
              </b-td>
            </b-tr>

            <b-tr>
              <b-td>Chrome On iMac</b-td>
              <b-td>231.213.125.55</b-td>
              <b-td>06 Nov 2021</b-td>
              <b-td>
                <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
              </b-td>
            </b-tr>

            <b-tr>
              <b-td>Mozilla On Window</b-td>
              <b-td>37.242.105.138</b-td>
              <b-td>02 Nov 2021</b-td>
              <b-td>
                <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-card-body>
  </b-card>


  <b-modal v-model="showModal" title="Change Password" header-class="bg-dark" title-class="text-white"
    ok-title="Change Password" cancel-title="Close" ok-variant="success" cancel-variant="danger-soft">
    <b-form class="row">

      <p class="mb-2">Your password has expired, Please choose a new passowrd</p>
      <b-col cols="12">
        <b-form-group>
          <template #title>
            Old Passowrd <span class="text-danger">*</span>
          </template>
					<b-form-input type="password" placeholder="Enter old passowrd" />
				</b-form-group>
      </b-col>

      <p class="mb-2 mt-4">Your password must be at least eight characters and cannot contain space.</p>
      <b-col cols="12" class=" mb-3">
        <b-form-group>
          <template #title>
            New Passowrd <span class="text-danger">*</span>
          </template>
					<b-form-input type="password" placeholder="Enter confirm passowrd" />
				</b-form-group>
      </b-col>

      <b-col cols="12">
        <b-form-group>
          <template #title>
            Confirm Passowrd <span class="text-danger">*</span>
          </template>
					<b-form-input type="password" placeholder="Enter confirm passowrd" />
				</b-form-group>
      </b-col>
    </b-form>
  </b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const showModal = ref(false);
</script>