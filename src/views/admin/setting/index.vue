<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-3">
        <h1 class="h3 mb-2 mb-sm-0">Admin Settings</h1>
      </b-col>
    </b-row>

    <b-row class="g-4">
      <b-col xl="3">
        <ul class="nav nav-pills nav-tabs-bg-dark flex-column">
          <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-1" :class="show === 1 && 'active'" @click="show = 1">
            <font-awesome-icon :icon="faGlobe" class="fa-fw me-1" />
              Website Settings
            </a>
          </li>
          <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-2" :class="show === 2 && 'active'" @click="show = 2">
            <font-awesome-icon :icon="faCog" class="fa-fw me-1" />
              General Settings
            </a>
          </li>
          <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-3" :class="show === 3 && 'active'" @click="show = 3">
            <font-awesome-icon :icon="faBell" class="fa-fw me-1" />
              Notification Settings
            </a>
          </li>
          <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-4" :class="show === 4 && 'active'" @click="show = 4">
            <font-awesome-icon :icon="faUserCircle" class="fa-fw me-1" />
              Account Settings
            </a>
          </li>
          <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-5" :class="show === 5 && 'active'" @click="show = 5">
            <font-awesome-icon :icon="faSlidersH" class="fa-fw me-1" />
              Social Settings
            </a>
          </li>
          <li class="nav-item"> <a class="nav-link mb-0" data-bs-toggle="tab" href="#tab-6" :class="show === 6 && 'active'" @click="show = 6">
            <font-awesome-icon :icon="faEnvelopeOpenText" class="fa-fw me-1" />
              Email Settings
            </a>
          </li>
        </ul>
      </b-col>

      <b-col xl="9">

        <div class="tab-content">

          <div class="tab-pane" :class="show === 1 && 'show active'" id="tab-1">
            <Website />
          </div>

          <div class="tab-pane" :class="show === 2 && 'show active'" id="tab-2">
            <General />
          </div>

          <div class="tab-pane" :class="show === 3 && 'show active'" id="tab-3">
            <Notification />
          </div>

          <div class="tab-pane" :class="show === 4 && 'show active'" id="tab-4">
            <Account />
          </div>

          <div class="tab-pane" :class="show === 5 && 'show active'" id="tab-5">
            <Social />
          </div>

          <div class="tab-pane" :class="show === 6 && 'show active'" id="tab-6">
            <Email />
          </div>

        </div>
      </b-col>
    </b-row>
  </AdminLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

import Website from '@/views/admin/setting/components/Website.vue';
import General from '@/views/admin/setting/components/General.vue';
import Notification from '@/views/admin/setting/components/Notifications.vue';
import Account from '@/views/admin/setting/components/Account.vue';
import Social from '@/views/admin/setting/components/Social.vue';
import Email from '@/views/admin/setting/components/Email.vue';

import { faGlobe, faCog, faBell, faUserCircle, faSlidersH, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
const show = ref(1);
</script>