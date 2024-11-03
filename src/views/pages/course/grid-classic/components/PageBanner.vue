<template>
  <section class="bg-blue align-items-center d-flex"
    :style="`background:url(${pattern04}) no-repeat center center; background-size:cover;`">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <h1 class="text-white">Course Grid Classic</h1>
          <div class="d-flex justify-content-center">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Courses classic</li>
              </ol>
            </nav>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import pattern04 from '@/assets/images/pattern/04.png';
</script>