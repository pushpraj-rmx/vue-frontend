<template>
  <PagesLayout>

    <PageBanner />

    <ContactForm />

    <Map />

  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';

import PageBanner from '@/views/pages/about/contact-us/components/PageBanner.vue';
import ContactForm from '@/views/pages/about/contact-us/components/ContactForm.vue';
import Map from '@/views/pages/about/contact-us/components/Map.vue';
</script>