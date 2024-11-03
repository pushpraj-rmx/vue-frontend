<template>
  <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
    <div class="nav-item w-100">
      <b-form class="position-relative">
        <b-form-input class="pe-5 bg-transparent" type="search" placeholder="Search" />
        <button
          class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
          type="submit">
          <font-awesome-icon :icon="faSearch" class="fs-6" />
        </button>
      </b-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { faSearch } from '@fortawesome/free-solid-svg-icons';
</script>