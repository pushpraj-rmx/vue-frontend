<template>
  <li class="dropdown-submenu dropend">
    <a class="dropdown-item dropdown-toggle d-flex arrow-none flex-centered" data-bs-toggle="dropdown" href="#"
      :class="menuItemActive(menuItems, item.key, currentRouteName) && 'active'">
      <component :is="item.icon" class="fa-fw me-1" />
      {{ item.label }}
      <font-awesome-icon :icon="faEllipsis" class="ms-auto fa-sm" />
    </a>
    <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
      <template v-for="(child, idx) in item.children" :key="idx + child.key + idx">
        <MenuItemWithChildren v-if="child.children" :item="child" :menu="menuItems" />
        <MenuItem v-else :item="child" />
      </template>
    </ul>
  </li>
</template>
<script lang="ts" setup>
import router from '@/router';
import MenuItem from '@/components/navbar/AppMenu/MenuItem.vue';
import { menuItemActive } from '@/helpers/getActiveClass';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

type SubMenuType = {
  item: MenuItemType;
  itemClassName?: string;
};

defineProps<SubMenuType>();

const currentRouteName = router.currentRoute.value.name;

import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';

const menuItems: MenuItemType[] = getAppMenuItems();
</script>
