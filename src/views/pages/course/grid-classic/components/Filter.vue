<template>
  <b-form>
    <b-card no-body class="card-body shadow p-4 mb-4">
      <h4 class="mb-3">Category</h4>
      <b-col cols="12">
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9">
            <label class="form-check-label" for="flexCheckDefault9">All</label>
          </div>
          <span class="small">(1256)</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10">
            <label class="form-check-label" for="flexCheckDefault10">Development</label>
          </div>
          <span class="small">(365)</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11">
            <label class="form-check-label" for="flexCheckDefault11">Design</label>
          </div>
          <span class="small">(156)</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12">
            <label class="form-check-label" for="flexCheckDefault12">Accounting</label>
          </div>
          <span class="small">(65)</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17">
            <label class="form-check-label" for="flexCheckDefault17">Translation</label>
          </div>
          <span class="small">(245)</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault13">
            <label class="form-check-label" for="flexCheckDefault13">Finance</label>
          </div>
          <span class="small">(184)</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14">
            <label class="form-check-label" for="flexCheckDefault14">Legal</label>
          </div>
          <span class="small">(65)</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault15">
            <label class="form-check-label" for="flexCheckDefault15">Photography</label>
          </div>
          <span class="small">(99)</span>
        </div>

        <b-collapse class="multi-collapse" id="multiCollapseExample1">
          <b-card no-body class="card-body p-0">
            <div class="d-flex justify-content-between align-items-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault16">
                <label class="form-check-label" for="flexCheckDefault16">Writing</label>
              </div>
              <span class="small">(178)</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18">
                <label class="form-check-label" for="flexCheckDefault18">Marketing</label>
              </div>
              <span class="small">(104)</span>
            </div>
          </b-card>
        </b-collapse>
        <a class=" p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse"
          href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"
          v-b-toggle="'multiCollapseExample1'">
          See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
          <span class="see-more ms-1"><font-awesome-icon :icon="faAngleDown" class="ms-1" /></span>
          <span class="see-less ms-1"><font-awesome-icon :icon="faAngleUp" class="ms-1" /></span>
        </a>
      </b-col>
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
<script setup lang="ts">
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
</script>