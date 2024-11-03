<template>
  <li class="nav-item">
    <a class="nav-link" :class="{ active: menuItemActive(menuItems, item.key, currentRouteName) }"
      @click="visible = !visible" data-bs-toggle="collapse" role="button" :aria-expanded="toggle() ? 'true' : 'false'"
      :aria-controls="item.key">
      <template v-if="item.icon">
        <font-awesome-icon :icon="item.icon" class="fa-fw me-1" />
      </template>
      {{ item.label }}
    </a>
    <b-collapse :id="item.key" :visible="toggle()">
      <ul :class="subMenuClassName">
        <template v-for="(link, idx) in item.children || []" :key="idx">
          <MenuItemWithChildren v-if="link.children" :item="link" subMenuClassName="nav flex-column" />
          <MenuItem v-else :item="link" />
        </template>
      </ul>
    </b-collapse>
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import router from "@/router";
import MenuItem from "@/components/navbar/AdminMenu/MenuItem.vue";
import { menuItemActive } from "@/helpers/getActiveClass";
import type { MenuItemType, SubMenus } from "@/helpers/menu";
import { ADMIN_MENU_ITEMS } from '@/assets/data/menu-items';

const props = defineProps<SubMenus>();

const visible = ref(true);

const currentRouteName = router.currentRoute.value.name;

const toggle = () => {
  return visible.value || menuItemActive(menuItems, props.item.key, currentRouteName);
};

watch(
  () => currentRouteName,
  () => {
    visible.value = false;

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
  { immediate: true, deep: true },
);


const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return ADMIN_MENU_ITEMS;
};

const menuItems: MenuItemType[] = getMenuItems();
</script>
