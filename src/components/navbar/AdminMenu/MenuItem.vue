<template>
  <li class="nav-item">
    <MenuItemLink :item="item" />
  </li>
</template>

<script setup lang="ts">
import MenuItemLink from "@/components/navbar/AdminMenu/MenuItemLink.vue";
import type { SubMenus } from "@/helpers/menu";

defineProps<SubMenus>();
</script>
