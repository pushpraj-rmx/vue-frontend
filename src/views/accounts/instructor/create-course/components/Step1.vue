<template>
  <div id="step-1" role="tabpanel" class="content fade" aria-labelledby="steppertrigger1">
    <h4>Course details</h4>
    <hr>
    <b-row class="b-row g-4">
      <b-col cols="12">
        <b-form-group label="Course title">
          <b-form-input type="text" placeholder="Enter course title" />
        </b-form-group>
      </b-col>

      <b-col cols="12">
        <b-form-group label="Short description">
          <b-form-textarea placeholder="Enter keywords" rows="2" max-rows="6" />
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Course category">
          <ChoicesSelect id="select-cate" class="border-0 z-index-9 bg-transparent" data-search-enabled="true">
            <option value="">Select category</option>
            <option>Engineer</option>
            <option>Medical</option>
            <option>Information technology</option>
            <option>Finance</option>
            <option>Marketing</option>
          </ChoicesSelect>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Course level">
          <ChoicesSelect id="select-level" class="border-0 z-index-9 bg-transparent" data-search-enabled="false"
            data-remove-item-button="true">
            <option value="">Select course level</option>
            <option>All level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advance</option>
          </ChoicesSelect>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Language">
          <ChoicesSelect id="select-language" class="border-0 z-index-9 bg-transparent" multiple data-max-item-count="3"
            data-remove-item-button="true">
            <option value="">Select language</option>
            <option>English</option>
            <option>German</option>
            <option>French</option>
            <option>Hindi</option>
          </ChoicesSelect>
        </b-form-group>
      </b-col>

      <b-col md="6" class="d-flex align-items-center justify-content-start mt-5">
        <div class="form-check form-switch form-check-md">
          <input class="form-check-input" type="checkbox" id="checkPrivacy1">
          <label class="form-check-label" for="checkPrivacy1">Check this for featured course</label>
        </div>
      </b-col>

      <b-col md="6">
        <b-form-group label="Course time">
          <b-form-input type="text" placeholder="Enter course time" />
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Total lecture">
          <b-form-input type="text" placeholder="Enter total lecture" />
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Course price">
          <b-form-input type="text" placeholder="Enter course price" />
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Discount price">
          <b-form-input type="text" placeholder="Enter discount" />
        </b-form-group>
        <b-col cols="12" class="mt-1 mb-0">
          <div class="form-check small mb-0">
            <input class="form-check-input" type="checkbox" id="checkBox1">
            <label class="form-check-label" for="checkBox1">
              Enable this Discount
            </label>
          </div>
        </b-col>
      </b-col>

      <b-col cols="12">
        <b-form-group label="Add description">
          <div class="bg-body border rounded-bottom h-400px overflow-hidden" id="quilleditor">
            <QuillEditor theme="snow" style="height: 400px" :content="taskDetail" content-type="html" />
          </div>
        </b-form-group>
      </b-col>

      <div class="d-flex justify-content-end mt-3">
        <b-button variant="primary" class="next-btn mb-0" @click="nextPage">Next</b-button>
      </div>
    </b-row>
  </div>
</template>
<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";

defineProps(['nextPage'])

const taskDetail = `<h1>Quill Rich Text Editor</h1>
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.</p>
<p>Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
<p>Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.</p>
<p>Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
<p>Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.</p>
<p>Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
<p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>`;
</script>