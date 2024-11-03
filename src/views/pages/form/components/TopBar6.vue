<template>
  <StickyHeader class-name="navbar-light navbar-sticky">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <AppMenu :menu-items="menuItems.slice(0, 2)" ul-class="mx-auto" logo-class="me-0">
          <li class="nav-item dropdown"><a class="nav-link" href="#">Course</a></li>
          <li class="nav-item"><a class="nav-link" :to="{ name: 'about.contact.us' }">Contact</a></li>
        </AppMenu>
        <div class="navbar-nav" :class="buttonClass">
          <b-button variant="dark" size="sm" class="mb-0">
            <BIconPower class="me-2" />Sign In
          </b-button>
        </div>
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import AppMenu from '@/components/navbar/AppMenu/index.vue';
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';
import { BIconPower } from 'bootstrap-icons-vue';

type TopbarProps = {
  buttonClass?: string;
};

defineProps<TopbarProps>();

const menuItems: MenuItemType[] = getAppMenuItems();
</script>