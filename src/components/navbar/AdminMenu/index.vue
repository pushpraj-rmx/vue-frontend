<template>
  <ul class="navbar-nav flex-column" id="navbar-sidebar">
    <template v-for="(item, idx) in menuItems || []" :key="idx">
      <li v-if="item.isTitle" class="nav-item ms-2 my-2">
        {{ item.label }}
      </li>

      <template v-else>
        <MenuItemWithChildren v-if="item.children" :item="item" className="nav-item" linkClassName="nav-link"
          subMenuClassName="nav flex-column" />
        <MenuItem v-else :item="item" className="nav-item" />
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
import MenuItemWithChildren from "@/components/navbar/AdminMenu/MenuItemWithChildren.vue";
import MenuItem from "@/components/navbar/AdminMenu/MenuItem.vue";
import { ADMIN_MENU_ITEMS } from '@/assets/data/menu-items';
import type { MenuItemType } from "@/helpers/menu";

const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return ADMIN_MENU_ITEMS;
};

const menuItems: MenuItemType[] = getMenuItems();
</script>
