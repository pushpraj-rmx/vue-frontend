<template>
  <b-form>
    <b-card no-body class="card-body shadow p-4 mb-4">
      <h4 class="mb-4">Category</h4>
      <b-row>
        <b-col xxl="6">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9">
            <label class="form-check-label" for="flexCheckDefault9">All</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10">
            <label class="form-check-label" for="flexCheckDefault10">Development</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11">
            <label class="form-check-label" for="flexCheckDefault11">Design</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12">
            <label class="form-check-label" for="flexCheckDefault12">Accounting</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17">
            <label class="form-check-label" for="flexCheckDefault17">Translation</label>
          </div>
        </b-col>

        <b-col xxl="6">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault13">
            <label class="form-check-label" for="flexCheckDefault13">Finance</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14">
            <label class="form-check-label" for="flexCheckDefault14">Legal</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault15">
            <label class="form-check-label" for="flexCheckDefault15">Photography</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault16">
            <label class="form-check-label" for="flexCheckDefault16">Writing</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18">
            <label class="form-check-label" for="flexCheckDefault18">Marketing</label>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <b-card no-body class="card-body shadow p-4 mb-4">
      <h4 class="mb-3">Price Level</h4>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <input type="radio" class="btn-check" name="options" id="option1">
          <label class="btn btn-light btn-primary-soft-check" for="option1">All</label>
        </li>
        <li class="list-inline-item">
          <input type="radio" class="btn-check" name="options" id="option2">
          <label class="btn btn-light btn-primary-soft-check" for="option2">Free</label>
        </li>
        <li class="list-inline-item">
          <input type="radio" class="btn-check" name="options" id="option3">
          <label class="btn btn-light btn-primary-soft-check" for="option3">Paid</label>
        </li>
      </ul>
    </b-card>

    <b-card no-body class="card-body shadow p-4 mb-4">
      <h4 class="mb-3">Skill level</h4>
      <ul class="list-inline mb-0">
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-12">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-12">All levels</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-9">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-9">Beginner</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-10">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-10">Intermediate</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-11">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-11">Advanced</label>
        </li>
      </ul>
    </b-card>

    <b-card no-body class="card-body shadow p-4 mb-4">
      <h4 class="mb-3">Language</h4>
      <ul class="list-inline mb-0 g-3">
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-2">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-2">English</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-3">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-3">Francas</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-4">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-4">Hindi</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-5">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-5">Russian</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-6">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-6">Spanish</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-7">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-7">Bengali</label>
        </li>
        <li class="list-inline-item mb-2">
          <input type="checkbox" class="btn-check" id="btn-check-8">
          <label class="btn btn-light btn-primary-soft-check" for="btn-check-8">Portuguese</label>
        </li>
      </ul>
    </b-card>
  </b-form>
</template>