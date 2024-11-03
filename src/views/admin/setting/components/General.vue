<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">General Settings</h5>
    </b-card-header>
    <b-card-body>
      <b-form class="row g-4">
        <b-col cols="12">
          <b-form-group label="Main Site URL" description="Set your main website url.">
            <b-form-input placeholder="Site URL" />
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="Select Currency" description="Select currency as per Country.">
            <ChoicesSelect id="select-1" class="z-index-9 border-0 bg-light">
              <option value="">Select Currency</option>
              <option>USD</option>
              <option>Indian Rupee</option>
              <option>Euro</option>
              <option>British Pound</option>
            </ChoicesSelect>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="Select Language" description="Select language as per Country.">
            <ChoicesSelect id="select-2" class="z-index-9 border-0 bg-light">
              <option value="">Select Language</option>
              <option>English</option>
              <option>Hindi</option>
              <option>German</option>
              <option>Spanish</option>
            </ChoicesSelect>
          </b-form-group>
        </b-col>
        <b-col lg="3">
          <b-form-group label="Maintainance mode">
            <div class="form-check form-switch form-check-lg mb-0">
              <input class="form-check-input mt-0 price-toggle me-2" type="checkbox" id="flexSwitchCheckDefault">
              <label class="form-check-label mt-1" for="flexSwitchCheckDefault">Make Site Offline</label>
            </div>
          </b-form-group>
        </b-col>
        <b-col lg="9">
          <b-form-group label="Maintainance Text">
            <b-form-textarea row="4" />
            <div class="form-text">Admin login on maintenance mode: <a href="#"
                class="ms-2">http://example.xyz/admin/login</a></div>
          </b-form-group>
        </b-col>
        <div class="d-sm-flex justify-content-end">
          <b-button type="button" variant="primary" class="mb-0">Update</b-button>
        </div>
      </b-form>
    </b-card-body>
  </b-card>
</template>