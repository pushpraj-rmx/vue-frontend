<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <img :src="cart" class="h-200px h-md-300px mb-3" alt="">
          <h2>Your cart is currently empty</h2>
          <p class="mb-0">Please check out all the available courses and buy some courses that fulfill your needs.</p>
          <router-link :to="{ name: 'demos.default' }" class="btn btn-primary mt-4 mb-0">Back to Shop</router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import cart from '@/assets/images/element/cart.svg'
</script>