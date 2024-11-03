<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col sm="10" xl="6" class="text-center mx-auto">
          <h2>You can be your guiding star with our help</h2>
          <p class="mb-0">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing
            boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect
            wishes change way and any wanted.</p>
        </b-col>
      </b-row>

      <b-row class="g-4 g-md-5">
        <b-col class="text-center">
          <img :src="createaccount" class="h-200px" alt="">
          <h4 class="mt-3">Create Account</h4>
          <p class="text-truncate-2 mb-0">Satisfied conveying a dependent contented he gentleman agreeable do be.
            Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do</p>
        </b-col>

        <b-col class="text-center">
          <img :src="addcourse" class="h-200px" alt="">
          <h4 class="mt-3">Add your Course</h4>
          <p class="text-truncate-2 mb-0">Proceed how any engaged visitor. Explained propriety off out perpetual his
            you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few
            longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.
          </p>
        </b-col>

        <b-col class="text-center">
          <img :src="earnmoney" class="h-200px" alt="">
          <h4 class="mt-3">Start Earning Money</h4>
          <p class="text-truncate-2 mb-0">Insipidity the sufficient discretion imprudence resolution sir him decisively.
            Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import createaccount from '@/assets/images/element/create-account.svg'
import addcourse from '@/assets/images/element/add-course.svg'
import earnmoney from '@/assets/images/element/earn-money.svg'
</script>