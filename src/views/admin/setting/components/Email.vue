<template>
  <b-card no-body class="shadow">

    <b-card-header class="border-bottom">
      <h5 class="card-header-title mb-0">Email Settings</h5>
    </b-card-header>

    <b-card-body>
      <b-row class="g-4">
        <b-col xl="8">
          <b-form-group label="Choose Email Drive">
            <b-form-radio-group id="radio-group-2" name="radio-sub-component"
              class="d-sm-flex justify-content-sm-between align-items-center">
              <b-form-radio name="some-radios" value="enable">Send Mail</b-form-radio>
              <b-form-radio name="some-radios" value="disable" checked>SMTP</b-form-radio>
              <b-form-radio name="some-radios" value="on_request">Mail</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="SMTP HOST">
            <b-form-input />
          </b-form-group>
        </b-col>

        <b-col md="6" xl="3">
          <b-form-group label="SMTP Port">
            <b-form-input />
          </b-form-group>
        </b-col>

        <b-col md="6" xl="3">
          <b-form-group label="SMTP Secure">
            <b-form-input />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="SMTP Username">
            <b-form-input />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="SMTP Password">
            <b-form-input type="password" />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Email From Address">
            <b-form-input type="email" />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Email From Name">
            <b-form-input type="email" />
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <b-form-group label="Email Send To">
            <ChoicesSelect id="email-select" class="z-index-9 border-0 bg-light" aria-label=".form-select-sm">
              <option value="">Email Send to</option>
              <option>All Admin</option>
              <option>Instructors</option>
              <option>Students</option>
              <option>Visitors</option>
            </ChoicesSelect>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Email External Email">
            <b-form-input type="email" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="g-4 mt-4">
        <div class="d-sm-flex justify-content-between align-items-center">
          <h5 class="mb-0">Edit Email Template</h5>
          <a href="#" class="btn btn-sm btn-primary mb-0">Add Template</a>
        </div>
        <b-col md="6" xxl="4" v-for="(item, idx) in emailTemplates" :key="idx">
          <div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
            <h6 class="mb-0"><a href="#">{{ item }}</a></h6>
            <a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><font-awesome-icon :icon="faEdit"
                class="fa-fw" /></a>
          </div>
        </b-col>

        <div class="d-flex justify-content-end">
          <b-button type="button" variant="primary" class="mb-0">Update</b-button>
        </div>
      </b-row>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const emailTemplates = ['Welcome Email', 'Send Email to User', 'Password Change', 'Unusual Login Email', 'Password Reset Email by Admin', 'KYC Approve Email', 'KYC Reject Email', 'KYC Missing Email', 'KYC Submitted Email', 'Token Purchase - Cancel by User', 'Token Purchase - Order Placed', 'Token Purchase - Order Successfully'];
</script>