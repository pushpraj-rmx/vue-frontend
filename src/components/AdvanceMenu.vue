<template>
  <li class="nav-item dropdown">
    <a class="nav-link" href="#" id="advanceMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <font-awesome-icon :icon="faEllipsisH" />
    </a>
    <ul class="dropdown-menu dropdown-menu-end min-w-auto" data-bs-popper="none">
      <li>
        <a class="dropdown-item" :href="supportLink" target="_blank">
          <BIconLifePreserver class="text-warning fa-fw me-2" />Support
        </a>
      </li>
      <li>
        <a class="dropdown-item" :href="buyLink" target="_blank">
          <BIconCloudDownloadFill class="text-success fa-fw me-2" />Buy Eduport!
        </a>
      </li>
    </ul>
  </li>
</template>
<script setup lang="ts">
import { supportLink, buyLink } from '@/helpers/constants';
import { BIconLifePreserver, BIconCloudDownloadFill } from 'bootstrap-icons-vue';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
</script>