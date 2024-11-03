<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom d-sm-flex justify-content-between align-items-center">
      <h5 class="card-header-title mb-0">Social Media Settings</h5>
      <a href="#" class="btn btn-sm btn-primary mb-0">Add new</a>
    </b-card-header>
    <b-card-body>
      <b-form class="row g-4">
        <b-col sm="6">
          <b-form-group>
            <template #label>
              <v-icon name="fc-google" class="text-google-icon me-1" />
              Enter google client ID
            </template>
            <b-form-input />
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group>
            <template #label>
              <v-icon name="fc-google" class="text-google-icon me-1" />
              Enter google API
            </template>
            <b-form-input />
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group>
            <template #label>
              <font-awesome-icon :icon="faFacebook" class="text-facebook me-1" />
              Enter facebook client ID
            </template>
            <b-form-input />
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group>
            <template #label>
              <font-awesome-icon :icon="faFacebook" class="text-facebook me-1" />
              Enter facebook API
            </template>
            <b-form-input />
          </b-form-group>
        </b-col>

        <p class="mb-0"><b>In your app set all redirect URL like:</b> <u
            class="text-primary">https://app.eduport.abc/google/callback</u></p>

        <div class="d-flex justify-content-end">
          <b-button type="button" variant="primary" class="mb-0">Update</b-button>
        </div>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
</script>