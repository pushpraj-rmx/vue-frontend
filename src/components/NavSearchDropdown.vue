<template>
  <DropDown custom-class="nav nav-item dropdown nav-search px-1 px-lg-3">
    <a class="nav-link" role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="true"
      data-bs-auto-close="outside" data-bs-display="static">
      <BIconSearch class="fs-4" />
    </a>
    <div class="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch" data-bs-popper="none">
      <b-form class="input-group">
        <b-form-input class="border-primary" type="search" placeholder="Search..." aria-label="Search" />
        <b-button variant="primary" class="m-0" type="submit">Search</b-button>
      </b-form>

      <ul class="list-group list-group-borderless p-2 small">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="fw-bold">Recent Searches:</span>
          <b-button variant="link" size="sm" class="mb-0 px-0">Clear all</b-button>
        </li>
        <li class="list-group-item text-primary-hover text-truncate">
          <a href="#" class="text-body">
            <font-awesome-icon :icon="faClock" class="me-1" />
            Digital marketing course for Beginner
          </a>
        </li>
        <li class="list-group-item text-primary-hover text-truncate">
          <a href="#" class="text-body">
            <font-awesome-icon :icon="faClock" class="me-1" />
            Customer Life cycle
          </a>
        </li>
        <li class="list-group-item text-primary-hover text-truncate">
          <a href="#" class="text-body">
            <font-awesome-icon :icon="faClock" class="me-1" />
            What is Search
          </a>
        </li>
        <li class="list-group-item text-primary-hover text-truncate">
          <a href="#" class="text-body">
            <font-awesome-icon :icon="faClock" class="me-1" />
            Facebook ADS
          </a>
        </li>
      </ul>
    </div>
  </DropDown>
</template>
<script setup lang="ts">
import DropDown from '@/components/DropDown.vue';
import { BIconSearch } from 'bootstrap-icons-vue';
import { faClock } from '@fortawesome/free-regular-svg-icons';
</script>