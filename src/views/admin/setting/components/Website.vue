<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Website Settings</h5>
    </b-card-header>

    <b-card-body>
      <b-form class="row g-4 align-items-center">
        <b-col lg="4">
          <b-form-group label="Site Name" description="Enter Website Name. It Display in Website and Email.">
            <b-form-input placeholder="Site Name" />
          </b-form-group>
        </b-col>

        <b-col lg="4">
          <b-form-group label="Site Copyrights" description="Using for Contact and Send Email.">
            <b-form-input placeholder="Site Copyrights" />
          </b-form-group>
        </b-col>

        <b-col lg="4">
          <b-form-group label="Site Email" description="For Copyrights Text.">
            <b-form-input placeholder="Site Email" />
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Site Description"
            description="For write brief description of your organization, or a Website.">
            <b-form-textarea rows="3" max-rows="6" />
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <b-form-group label="Contact Phone" description="Using for Contact and Support.">
            <b-form-input placeholder="Contact Phone" />
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <b-form-group label="Support Email" description="For Support Email.">
            <b-form-input placeholder="Support Email" />
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <b-form-group label="Allow Registration">
            <b-form-radio-group id="radio-group-2" name="radio-sub-component">
              <b-form-radio name="some-radios" value="enable" checked>Enable</b-form-radio>
              <b-form-radio name="some-radios" value="disable">Disable</b-form-radio>
              <b-form-radio name="some-radios" value="on_request">On Request</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Contact Address" description="Enter support Address.">
            <b-form-textarea rows="3" max-rows="6" />
          </b-form-group>
        </b-col>

        <div class="d-sm-flex justify-content-end">
          <b-button type="button" variant="primary" class="mb-0">Update</b-button>
        </div>
      </b-form>
    </b-card-body>
  </b-card>
</template>