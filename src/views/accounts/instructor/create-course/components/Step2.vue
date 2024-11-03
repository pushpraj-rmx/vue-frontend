<template>
  <div id="step-2" role="tabpanel" class="content fade" aria-labelledby="steppertrigger2">
    <h4>Course media</h4>
    <hr>
    <b-row>
      <b-col cols="12">
        <div
          class="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
          <img :src="gallery" class="h-50px" alt="">
          <div>
            <h6 class="my-2">Upload course image here, or<a href="#!" class="text-primary"> Browse</a>
            </h6>
            <label style="cursor:pointer;">
              <span>
                <b-form-file type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
              </span>
            </label>
            <p class="small mb-0 mt-2">
              <b>Note:</b>
              Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to
              fit our thumbnails/previews.
            </p>
          </div>
        </div>

        <div class="d-sm-flex justify-content-end mt-2">
          <b-button type="button" :variant="null" size="sm" class="btn-danger-soft mb-3">Remove
            image</b-button>
        </div>
      </b-col>

      <b-col cols="12">
        <h5>Upload video</h5>
        <b-col cols="12" class="mt-4 mb-5">
          <b-form-group label="Video URL">
            <b-form-input type="text" placeholder="Enter video url" />
          </b-form-group>
        </b-col>
        <div class="position-relative my-4">
          <hr>
          <p class="small position-absolute top-50 start-50 translate-middle bg-body px-3 mb-0">Or</p>
        </div>

        <b-col cols="12">
          <b-form-group label="Upload video">
            <b-input-group class="mb-3">
              <b-form-file id="inputGroupFile01" />
              <b-input-group-text>.mp4</b-input-group-text>
            </b-input-group>
            <b-input-group class="mb-3">
              <b-form-file id="inputGroupFile01" />
              <b-input-group-text>.WebM</b-input-group-text>
            </b-input-group>
            <b-input-group class="mb-3">
              <b-form-file id="inputGroupFile01" />
              <b-input-group-text>.OGG</b-input-group-text>
            </b-input-group>
          </b-form-group>
        </b-col>

        <h5 class="mt-4">Video preview</h5>
        <div class="position-relative">
          <img :src="about04" class="rounded-4" alt="">
          <div class="position-absolute top-50 start-50 translate-middle">
            <CustomGLightbox link="https://www.youtube.com/embed/tXHviS-4ygo"
              class="btn btn-lg text-danger btn-round btn-white-shadow mb-0">
              <font-awesome-icon :icon="faPlay" />
            </CustomGLightbox>
          </div>
        </div>
      </b-col>

      <div class="d-flex justify-content-between mt-3">
        <b-button variant="secondary" class="prev-btn mb-0" @click="previousPage">Previous</b-button>
        <b-button variant="primary" class="next-btn mb-0" @click="nextPage">Next</b-button>
      </div>
    </b-row>
  </div>
</template>
<script setup lang="ts">
import CustomGLightbox from '@/components/CustomGLightbox.vue';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import gallery from '@/assets/images/element/gallery.svg';
import about04 from '@/assets/images/about/04.jpg';

defineProps(['nextPage', 'previousPage'])
</script>