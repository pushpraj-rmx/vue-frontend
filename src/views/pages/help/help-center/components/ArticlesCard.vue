<template>
  <b-card no-body class="card-body border p-4 h-100">
    <b-card-title class="mb-4"><a href="#" class="stretched-link">{{ item.title }}</a></b-card-title>
    <div class="d-sm-flex align-items-center">
      <ul class="avatar-group mb-2 mb-sm-0">
        <li class="avatar avatar-md" v-for="(img, idx) in item.images" :key="idx">
          <img class="avatar-img rounded-circle border-white" :src="img" alt="avatar">
        </li>
      </ul>
      <div class="ms-sm-2">
        <h6 class="mb-1">{{ item.articles }} articles in this collection</h6>
        <p class="mb-0">Written by
          <template v-for="(author, idx) in item.authors" :key="idx">
            <b>{{ author }}</b>
            {{ idx === item.authors.length - 2 ? 'and ' : idx === item.authors.length - 1 ? '' : ',' }}
          </template>
        </p>
      </div>
    </div>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { ArticleType } from '@/views/pages/help/help-center/components/types';

defineProps({
  item: {
    type: Object as PropType<ArticleType>,
    required: true
  }
});
</script>