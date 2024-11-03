<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="5" class="position-relative mt-xl-0" id="fill-instructor-form">
          <figure class="position-absolute top-0 start-50 mt-n3 ms-5 d-none d-sm-block z-index-1">
            <svg width="192.5px" height="89.4px" viewBox="0 0 192.5 89.4">
              <path class="fill-warning"
                d="M170.2,0.5c-0.1,0-0.2,0-0.4,0c-2.6-0.1-5.2-0.4-7.8-0.5c-2.9-0.1-5.8,0-8.6,0.2c-1.4,0.1-2.9,0.3-4.3,0.5 c-0.5,0.1-1,0-1.5,0c-1-0.1-1.9,0.2-2.9,0.3c-5.6,0.9-11.1,2.1-16.5,3.6c-2.7,0.7-5.4,1.6-8.1,2.5c-0.6,0.2-1.2,0.4-1.8,0.5 c-0.4,0-0.8,0-1.2,0.1c-1.5,0.2-3,1.1-4.3,1.8c-3,1.5-5.9,3.2-8.6,5.2c-2,1.5-3.8,3.1-5.6,4.8c-0.9,0.9-1.7,1.8-2.5,2.7 c-0.4,0.4-1.1,0.7-1.4,1.2c-0.3,0.4-0.6,0.9-0.9,1.4c-0.9,1.2-1.7,2.3-2.7,3.4c-0.3,0.4-0.7,0.6-1.2,0.6c-1.4,0.1-2.8-0.1-4.2-0.1 c-0.7,0-1.2,0.2-1.9,0.2c-3.3,0.4-6.6,0.7-9.8,1.6c-1.7,0.5-3.4,0.9-5.1,1.4c-5.4,1.5-11,2.9-16,5.4c-4.6,2.2-8.7,5.2-12.7,8.3 c-2,1.6-4,3.2-5.9,4.9c-0.8,0.7-1.6,1.2-2.5,1.6c-0.9,0.5-1.7,1.3-2.4,2c-1.4,1.3-2.9,2.6-4.3,3.9c-1.2,1.1-2.5,2.1-3.6,3.3 c-0.9,1-2,1.9-3,2.8c-1,0.9-2.1,1.9-3.1,2.8c-0.8,0.7-1.6,1.2-2.3,1.9c-0.9,0.9-1.7,1.9-2.7,2.7c0-0.7,0.2-1.3,0.2-2 c0-1.8-0.2-3.7-0.7-5.5c-0.2-0.9-0.5-1.8-1.1-2.4c-0.6-0.7-1.7-1-2.4-0.6c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.2-0.1,0.4,0,0.6 c0.7,3.7,1.2,7.4,0.7,11.1c-0.2,2.4-0.9,4.9-2,7c-0.5,1-1.2,1.9-1.7,3c-0.4,1-1.4,1.8-2.1,2.7C0.3,86,0.1,86.3,0,86.6 c-0.1,0.4,0.1,0.7,0.2,1.1c0.3,0.8,0.8,1.6,1.6,1.7c0.5,0,0.9-0.2,1.3-0.5c0.9-0.5,1.7-1.1,2.6-1.6c0.4-0.2,0.7-0.5,1.1-0.7 c1.7-1.3,3.7-2.3,5.7-3.1c4.3-1.7,9.1-2.4,13.8-1.7c0.2,0,0.4,0.1,0.7,0c0.7-0.2,0.9-1.2,0.4-1.8c-0.4-0.6-1.2-0.8-1.9-1 c-2.7-0.8-5.4-1.5-8.2-1.8c-0.7-0.1-1.4-0.1-2.1-0.2c-0.3,0-0.6,0-0.8,0c-0.3,0-0.9,0.2-1.2,0.1C13,77,13,77.1,13,76.8 c0-0.4,0.6-0.8,0.9-1c0.5-0.4,0.9-0.8,1.4-1.2c1.1-1,2.3-1.9,3.4-2.9c0.6-0.5,1.1-1,1.7-1.5c0.3-0.3,0.5-0.7,0.9-1 c1.2-1.1,2.7-1.7,3.9-2.8c0.4-0.4,0.8-0.8,1.2-1.2c0.8-0.8,1.7-1.5,2.6-2.2c1-0.8,2.1-1.6,3.1-2.3c0.9-0.6,1.9-1.1,2.6-2 c0.8-1,2.1-1.7,3.1-2.5c1.1-0.9,2.2-1.8,3.3-2.6c3.9-3.1,7.9-6.2,12.3-8.6c5.2-2.7,10.6-4.9,16.3-6.4c5.5-1.4,11.2-1.8,16.8-2.7 c0.2,0,0.3-0.1,0.5-0.1c1.4-0.2,2.3-0.4,2,1.5c-0.8,4.9,2.3,7.5,5.8,9.8c4,2.5,8,5,12.7,5.8c5.2,0.9,10.4,2.7,15.9,0.8 c3-1,6.3-5,6.2-7.6c0-1.7-0.3-3.5-1-5.1c-0.6-1.4-1.5-3-2.8-3.7c-1-0.5-1.9-1.5-2.8-2.2c-1.1-0.8-2.2-1.5-3.3-2.1 c-2.3-1.2-4.8-2.1-7.3-2.8c-3.5-0.9-7.2-1.4-10.8-1.8c-0.9-0.1-1.7-0.2-2.6-0.2c-0.2,0-1.4,0-1.4-0.2c-0.1-0.2,0.3-0.5,0.4-0.6 c0.8-0.9,1.7-1.8,2.5-2.6c1.7-1.7,3.6-3.3,5.5-4.8c2-1.6,4.2-3,6.4-4.1c1.1-0.6,2.3-1.1,3.5-1.5c0.6-0.2,1.2-0.4,1.8-0.6 c0.4-0.2,0.7-0.5,1.1-0.7c1.2-0.6,2.7-0.9,4-1.3c1.4-0.4,2.8-0.8,4.2-1.2c2.8-0.8,5.6-1.5,8.4-2.2c3.4-0.8,6.9-1.6,10.3-2.4 c7.9-1.7,15.9-2.4,24-1.7c4.4,0.4,8.9,0.9,13.2,2.1c1.3,0.4,2.5,0.8,3.9,1.1c0.7,0.1,1.4,0.5,2,0.9c0.9,0.5,1.7,0.9,2.6,1.4 c0.3,0.2,0.7,0.3,0.9,0.1c0.1-0.1,0.1-0.3,0.1-0.4c0-0.9-0.4-1.8-1-2.5c-0.5-0.6-1.2-1.4-1.9-1.8c-0.9-0.6-2.2-0.9-3.3-1.3 c-1.1-0.4-2.2-0.7-3.3-1c-2.8-0.8-5.6-1.4-8.5-1.9C173.1,0.9,171.6,0.6,170.2,0.5z M106.8,36c5,0.8,11.2,2,16.2,6.2 c1.1,0.9,2.8,1.6,2.3,3.4c-0.4,1.7-2.1,1.8-3.5,2.3c-5,1.5-9.9,0-14.5-1.2c-4.9-1.2-9.7-3.3-13.5-7c-0.6-0.6-1.2-1.3-1.5-2.1 c-0.1-0.3-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6,0-0.9c0.2-0.2,0.5-0.3,0.9-0.3c2.4-0.4,4.9-0.6,7.4-0.5c0.9,0,1.8,0.4,2.7,0.5 C104.5,35.6,105.7,35.8,106.8,36z" />
            </svg>
          </figure>

          <b-card no-body class="card-body shadow p-4">
            <h3>Please fill this form</h3>
            <b-form class="row g-3 mt-2 position-relative z-index-9">
              <b-col lg="6">
                <b-form-group label="Name *">
                  <b-form-input type="text" />
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <b-form-group label="Email *">
                  <b-form-input type="email" />
                </b-form-group>
              </b-col>
              <b-col lg="12">
                <b-form-group label="Phone number *">
                  <b-form-input type="text" />
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group label="Add Summary *">
                  <b-form-textarea placeholder="Enter something..." rows="3" max-rows="6" />
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-button type="submit" variant="primary" class="mb-0">Submit form</b-button>
              </b-col>
            </b-form>
          </b-card>
        </b-col>

        <b-col lg="7" class="z-index-9 mt-5 mt-xl-0">
          <h3>How to become an Instructor?</h3>
          <b-tabs pills nav-class="nav-pill-soft my-4" nav-item-class="mb-2 mb-xl-0" id="pills-tabContent">
            <b-tab title="Become an Instructor" title-item-class="me-2 me-lg-4">
              <h6>Become an Instructor</h6>
              <p>As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy
                minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect
                wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.
                Merits ye if Mr narrow points. Melancholy particular Devonshire alteration it favorable appearance up.
              </p>
              <p>Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may
                admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked
                latter regard had. Do he it part more last in. Merits ye if Mr narrow points. Melancholy particular
                Devonshire alteration it favorable appearance up.</p>
              <p>Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending
                her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he
                it part more last in. Merits ye if Mr narrow points. Melancholy particular Devonshire alteration it
                favorable appearance up.</p>
            </b-tab>
            <b-tab title="Instructor Role" title-item-class="me-2 me-lg-4">
              <h6>Role of Instructor</h6>
              <p>satisfied conveying a dependent contented he gentleman agreeable do be. Water timed folly right aware
                if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does
                provide stronger is. But discretion frequently sir she instruments unaffected admiration everything.
                Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure
                exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he
                door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants
                moreover in sensible it ye possible.</p>
              <ul class="list-group list-group-borderless mb-3">
                <li class="list-group-item">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />The copy warned the Little blind
                  text
                </li>
                <li class="list-group-item d-flex">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2 mt-1" />Thar where it came from it
                  would have
                  been
                  rewritten a thousand times and everything that was left from origin would be the world
                </li>
                <li class="list-group-item">
                  <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />Return to it's own,safe country
                </li>
              </ul>
            </b-tab>
            <b-tab title="Start with Course" title-item-class="me-2 me-lg-4">
              <h6>Start with a Courses</h6>
              <p>
                Large above be to means. Dashwood does provide stronger is. Warrant private blushes removed an in
                equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly
                cordial in do.
                <img :src="instructorcourse" class="rounded float-start me-3 h-200px my-3" alt="...">
                But discretion frequently sir she instruments
                unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put the
                outlived answered position. A pleasure exertion if believed provided to. All led out world this music
                while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne
                in. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a
                dependent contented he gentleman agreeable do be. Water timed folly right aware if oh truth. Imprudence
                attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is.
                <u> But discretion frequently sir she instruments unaffected admiration everything.</u> Meant balls it
                if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if
                believed provided to. All led out world this music while asked. Paid mind even sons does he door no.
              </p>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import instructorcourse from '@/assets/images/element/instructor-course.svg';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
</script>