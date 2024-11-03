<template>
  <InstructorLayout>
    <b-col xl="9">
      <b-card no-body class="bg-transparent border rounded-3">
        <b-card-header class="bg-transparent border-bottom">
          <h3 class="card-header-title mb-0">Edit Profile</h3>
        </b-card-header>
        <b-card-body>
          <b-form class="row g-4">
            <b-col cols="12" class="justify-content-center align-items-center">
              <label class="form-label">Profile picture</label>
              <div class="d-flex align-items-center">
                <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
                  <span class="avatar avatar-xl">
                    <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow"
                      :src="avatar07" alt="">
                  </span>
                  <button type="button" class="uploadremove flex-centered">
                    <BIconX class="text-white" />
                  </button>
                </label>
                <label class="btn btn-primary-soft mb-0" for="uploadfile-1">Change</label>
                <b-form-file class="d-none" id="uploadfile-1" />
              </div>
            </b-col>

            <b-col cols="12">
              <b-form-group label="Full name">
                <b-input-group>
                  <b-form-input type="text" :model-value="`Lori`" placeholder="First name" />
                  <b-form-input type="text" :model-value="`Stevens`" placeholder="Last name" />
                </b-input-group>
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Username">
                <b-input-group prepend="Eduport.com">
                  <b-form-input type="text" :model-value="`loristev`" />
                </b-input-group>
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Email id">
                <b-form-input type="email" :model-value="`example@gmail.com`" placeholder="Email" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Phone number">
                <b-form-input type="text" :model-value="`1234567890`" placeholder="Phone number" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Location">
                <b-form-input type="text" :model-value="`California`" />
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group label="About me">
                <b-form-textarea placeholder="Add a comment..." rows="3" max-rows="6"
                  :model-value="`I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world.`" />
                <div class="form-text">Brief description for your profile.</div>
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group label="Education">
                <b-form-input type="text" class="mb-2" :model-value="`Bachelor in Computer Graphics`" />
                <b-form-input type="text" class="mb-2" :model-value="`Masters in Computer Graphics`" />
              </b-form-group>

              <b-button variant="light" size="sm" class="mb-0">
                <BIconPlus class="me-1" />
                Add more
              </b-button>
            </b-col>

            <div class="d-sm-flex justify-content-end">
              <b-button type="button" variant="primary" class="mb-0">Save changes</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>

      <b-row class="g-4 mt-3">
        <b-col lg="6">
          <b-card no-body class="bg-transparent border rounded-3">
            <b-card-header class="bg-transparent border-bottom">
              <h5 class="card-header-title mb-0">Linked account</h5>
            </b-card-header>
            <b-card-body class="pb-0">
              <div class="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
                <v-icon name="fc-google" scale="2" class="text-google-icon" />
                <h2 class="fs-1 mb-0 me-3">
                </h2>
                <div>
                  <div class="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                    <BIconCheckCircleFill class="text-success fs-5" />
                  </div>
                  <h6 class="mb-1">Google</h6>
                  <p class="mb-1 small">You are successfully connected to your Google account</p>
                  <b-button type="button" variant="danger" size="sm" class="mb-0">Invoke</b-button>{{ ' ' }}
                  <a href="#" class="btn btn-sm btn-link text-body mb-0">Learn more</a>
                </div>
              </div>

              <div class="mb-4 d-sm-flex border p-3 rounded">
                <h2 class="fs-1 mb-0 me-3">
                  <font-awesome-icon :icon="faLinkedinIn" class="text-linkedin" />
                </h2>
                <div>
                  <h6 class="mb-1">Linkedin</h6>
                  <p class="mb-1 small">Connect with Linkedin account for a personalized experience</p>
                  <b-button type="button" variant="primary" size="sm" class="mb-0">Connect Linkedin</b-button>{{ ' ' }}
                  <a href="#" class="btn btn-sm btn-link text-body mb-0">Learn more</a>
                </div>
              </div>

              <div class="mb-4 d-sm-flex border p-3 rounded">
                <h2 class="fs-1 mb-0 me-3">
                  <font-awesome-icon :icon="faFacebook" class="text-facebook" />
                </h2>
                <div>
                  <h6 class="mb-1">Facebook</h6>
                  <p class="mb-1 small">Connect with Facebook account for a personalized experience</p>
                  <b-button type="button" variant="primary" size="sm" class="mb-0">Connect Facebook</b-button>{{ ' ' }}
                  <a href="#" class="btn btn-sm btn-link text-body mb-0">Learn more</a>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6">
          <b-card no-body class="bg-transparent border rounded-3">
            <b-card-header class="bg-transparent border-bottom">
              <h5 class="card-header-title mb-0">Social media profile</h5>
            </b-card-header>
            <b-card-body>
              <div class="mb-3">

                <b-form-group>
                  <template #label>
                    <font-awesome-icon :icon="faFacebook" class="text-facebook me-1" />{{ ' ' }}
                    Enter facebook username
                  </template>
                  <b-form-input type="text" model-value="loristev" placeholder="Enter username" />
                </b-form-group>
              </div>

              <div class="mb-3">
                <b-form-group>
                  <template #label>
                    <BIconTwitter class="text-twitter me-1" />{{ ' ' }}
                    Enter twitter username
                  </template>
                  <b-form-input type="text" model-value="loristev" placeholder="Enter username" />
                </b-form-group>
              </div>

              <div class="mb-3">
                <b-form-group>
                  <template #label>
                    <font-awesome-icon :icon="faInstagram" class="text-instagram me-1" />{{ ' ' }}
                    Enter instagram username
                  </template>
                  <b-form-input type="text" model-value="loristev" placeholder="Enter username" />
                </b-form-group>
              </div>

              <div class="mb-3">
                <b-form-group>
                  <template #label>
                    <font-awesome-icon :icon="faYoutube" class="text-youtube me-1" />{{ ' ' }}
                    Add your youtube profile URL
                  </template>
                  <b-form-input type="text" model-value="https://www.youtube.com/in/Eduport-05620abc"
                    placeholder="Enter username" />
                </b-form-group>
              </div>

              <div class="d-flex justify-content-end mt-4">
                <b-button type="button" variant="primary" class="mb-0">Save changes</b-button>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card no-body class="bg-transparent border rounded-3">
            <b-card-header class="bg-transparent border-bottom">
              <h5 class="card-header-title mb-0">Update email</h5>
            </b-card-header>
            <b-card-body>
              <p>Your current email address is <span class="text-primary">example@gmail.com</span></p>
              <b-form>
                <b-form-group label="Enter your new email id" />
                <b-form-input type="email" placeholder="Enter new email" />
                <div class="d-flex justify-content-end mt-4">
                  <b-button type="button" variant="primary" class="mb-0">Update email</b-button>
                </div>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6">
          <b-card no-body class="border bg-transparent rounded-3">
            <b-card-header class="bg-transparent border-bottom">
              <h5 class="card-header-title mb-0">Update password</h5>
            </b-card-header>
            <b-card-body>
              <div class="mb-3">
                <b-form-group label="Current password">
                  <b-form-input type="password" placeholder="Enter current password" />
                </b-form-group>
              </div>
              <div class="mb-3">

                <b-form-group label="Enter new password">
                  <b-input-group>
                    <b-form-input type="password" placeholder="Enter new password" />
                    <template #append>
                      <span class="input-group-text p-0 bg-transparent">
                        <font-awesome-icon :icon="faEye" class="cursor-pointer p-2 w-40px" />
                      </span>
                    </template>
                  </b-input-group>
                </b-form-group>

                <div class="rounded mt-1" id="psw-strength"></div>
              </div>
              <div>
                <b-form-group label="Confirm new password">
                  <b-form-input type="password" placeholder="Enter new password" />
                </b-form-group>
              </div>
              <div class="d-flex justify-content-end mt-4">
                <b-button type="button" variant="primary" class="mb-0">Change password</b-button>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </InstructorLayout>
</template>
<script setup lang="ts">
import InstructorLayout from '@/layouts/InstructorLayout.vue';
import avatar07 from '@/assets/images/avatar/07.jpg';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BIconX, BIconPlus, BIconCheckCircleFill, BIconTwitter } from 'bootstrap-icons-vue';
</script>