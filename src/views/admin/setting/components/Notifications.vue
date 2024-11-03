<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Notifications Settings</h5>
    </b-card-header>

    <b-card-body>
      <h6 class="mb-2">Choose type of notifications you want to receive</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy12" checked>
        <label class="form-check-label" for="checkPrivacy12">Withdrawal activity</label>
      </div>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy2">
        <label class="form-check-label" for="checkPrivacy2">Weekly report</label>
      </div>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy3" checked>
        <label class="form-check-label" for="checkPrivacy3">Password change</label>
      </div>
      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy4">
        <label class="form-check-label" for="checkPrivacy4">Play sound on a message</label>
      </div>

      <h6 class="mb-2 mt-4">Instructor Related Notification</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy11" checked>
        <label class="form-check-label" for="checkPrivacy5">Joining new instructors</label>
      </div>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy5">
        <label class="form-check-label" for="checkPrivacy5">Notify when the instructorss added new
          courses</label>
      </div>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy6" checked>
        <label class="form-check-label" for="checkPrivacy6">Notify when instructors update courses</label>
      </div>
      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy7">
        <label class="form-check-label" for="checkPrivacy7">Course weekly report</label>
      </div>

      <h6 class="mb-2 mt-4">Student Related Notification</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy8" checked>
        <label class="form-check-label" for="checkPrivacy8">Joining new student</label>
      </div>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy9">
        <label class="form-check-label" for="checkPrivacy9">Notify when students purchase new courses</label>
      </div>
      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy10">
        <label class="form-check-label" for="checkPrivacy10">Course weekly report</label>
      </div>
    </b-card-body>
  </b-card>
</template>