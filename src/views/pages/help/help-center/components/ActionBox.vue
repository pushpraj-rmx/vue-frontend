<template>
  <section>
    <b-container>
      <b-row class="g-4">
        <b-col lg="4">
          <div class="bg-info bg-opacity-10 rounded-3 p-5">
            <h2 class="display-5 text-info"><BIconHeadset /></h2>
            <h3>Contact Support?</h3>
            <p>Delay death ask to style Me mean able conviction For every delay death ask to style</p>
            <a href="#" class="btn btn-dark mb-0">Contact Us</a>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="bg-purple bg-opacity-10 rounded-3 p-5">
            <h2 class="display-5 text-purple">
              <font-awesome-icon :icon="faTicketAlt" />
            </h2>
            <h3>Submit a Ticket</h3>
            <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
            <a href="#" class="btn btn-dark mb-0">Submit Ticket</a>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="bg-warning bg-opacity-15 rounded-3 p-5">
            <h2 class="display-5 text-warning"><BIconEnvelopeFill /></h2>
            <h3>Request a feature</h3>
            <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
            <a href="#" class="btn btn-dark mb-0">Request</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { BIconHeadset, BIconEnvelopeFill } from 'bootstrap-icons-vue';
</script>