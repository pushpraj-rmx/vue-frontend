<template>
  <StickyHeader class-name="navbar-light navbar-sticky">
    <nav class="navbar navbar-expand-xl z-index-9">
      <b-container>
        <LogoBox />
        <MobileNavbarToggler />
        <b-collapse class="navbar-collapse" id="navbarCollapse">
          <b-col xxl="6">
            <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div class="nav-item w-100">
                <b-form class="rounded position-relative">
                  <b-form-input class="pe-5 bg-secondary bg-opacity-10 border-0" type="search" placeholder="Search"
                    aria-label="Search" />
                  <button
                    class="btn btn-link bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                    type="submit">
                    <font-awesome-icon :icon="faSearch" class="fs-6 text-primary" />
                  </button>
                </b-form>
              </div>
            </div>
          </b-col>

          <ul class="navbar-nav navbar-nav-scroll ms-auto">
            <li class="nav-item dropdown"><a class="nav-link" href="#">For Enterprise</a></li>

            <li class="nav-item dropdown"><a class="nav-link" href="#">Eduport Business</a></li>

            <li class="nav-item"><a class="nav-link" href="#">My learning</a></li>
          </ul>
        </b-collapse>

        <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">

          <li class="nav-item ms-0 ms-sm-2 d-none d-sm-block">
            <a class="btn btn-light btn-round mb-0 flex-centered" href="#">
              <BIconHeart class="fa-fw" />
            </a>
          </li>
          <DropDown custom-class="nav-item ms-2 ms-sm-3">
            <a class="btn btn-light btn-round mb-0 flex-centered" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-auto-close="outside">
              <BIconBell class="fa-fw" />
            </a>
            <span class="notif-badge animation-blink"></span>
            <div
              class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
              <b-card no-body class="bg-transparent">
                <b-card-header
                  class="bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                  <h6 class="m-0">Notifications
                    <span class="badge bg-danger bg-opacity-10 text-danger ms-2">
                      2 new
                    </span>
                  </h6>
                  <a class="small" href="#">Clear all</a>
                </b-card-header>
                <b-card-body class="p-0">
                  <ul class="list-group list-unstyled list-group-flush">
                    <li>
                      <a href="#" class="list-group-item-action border-0 border-bottom d-flex p-3">
                        <div class="me-3">
                          <div class="avatar avatar-md">
                            <img class="avatar-img rounded-circle" :src="avatar03" alt="avatar">
                          </div>
                        </div>
                        <div>
                          <h6 class="mb-1">Update v2.3 completed successfully</h6>
                          <p class="small text-body m-0">What's new! Find out about new features</p>
                          <small class="text-body">5 min ago</small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </b-card-body>
                <b-card-footer class="bg-transparent border-0 py-3 text-center position-relative">
                  <a href="#" class="stretched-link">See all incoming activity</a>
                </b-card-footer>
              </b-card>
            </div>
          </DropDown>
          <ProfileDropdown className="nav-item ms-3" />
        </ul>
      </b-container>
    </nav>

    <hr class="my-0">

    <nav class="navbar navbar-expand-xl nav-category">
      <b-container class="px-0">
        <button class="navbar-toggler m-auto w-100" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse2" aria-controls="navbarCollapse2" aria-expanded="false"
          aria-label="Toggle navigation">
          <BIconGridFill /> Category
        </button>
        <div class="navbar-collapse w-100 collapse" id="navbarCollapse2">
          <ul class="navbar-nav navbar-nav-scroll mx-auto">
            <template v-for="(item, idx) in menuItems" :key="idx">
              <li class="nav-item dropdown" v-if="item.children">
                <a class="nav-link dropdown-toggle active arrow-none d-flex justify-content-between align-items-center w-100" href="#" id="demoMenu" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Development
                  <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
                </a>
                <ul class="dropdown-menu" aria-labelledby="demoMenu">
                  <li v-for="(label, idx) in item.children" :key="idx">
                    <a class="dropdown-item" href="#">{{ label }}</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item" v-else><a class="nav-link" href="#">{{ item.label }}</a></li>
            </template>
          </ul>
        </div>
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import LogoBox from '@/components/LogoBox.vue';
import StickyHeader from '@/components/StickyHeader.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import DropDown from '@/components/DropDown.vue';
import MobileNavbarToggler from '@/components/MobileNavbarToggler.vue';
import { BIconHeart, BIconBell, BIconGridFill } from 'bootstrap-icons-vue';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import avatar03 from '@/assets/images/avatar/03.jpg';

const menuItems = [
  { label: 'Development', children: ['Web Development', 'Data Science', 'Mobile Development', 'Programming Language', 'Software Testing', 'Software Engineering', 'Software Development Tools'] },
  { label: 'Finance & Accounting' },
  { label: 'Personal Development' },
  { label: 'IT & Software' },
  { label: 'Personal Development' },
];
</script>