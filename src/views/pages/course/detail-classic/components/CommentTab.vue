<template>
  <b-row>
    <b-col cols="12">
      <h5 class="mb-4">Ask Your Question</h5>
      <div class="d-flex mb-4">
        <div class="avatar avatar-sm flex-shrink-0 me-2">
          <a href="#"> <img class="avatar-img rounded-circle" :src="avatar09" alt=""> </a>
        </div>

        <b-form class="w-100 d-flex">
          <b-form-textarea class="one pe-4 bg-light" id="autoheighttextarea" rows="1" placeholder="Add a comment..." />
          <b-button variant="primary" class="ms-2 mb-0" type="button">Post</b-button>
        </b-form>
      </div>

      <div class="border p-2 p-sm-4 rounded-3 mb-4">
        <ul class="list-unstyled mb-0">
          <li class="comment-item">
            <div class="d-flex mb-3">
              <div class="avatar avatar-sm flex-shrink-0">
                <a href="#"><img class="avatar-img rounded-circle" :src="avatar05" alt=""></a>
              </div>
              <div class="ms-2">
                <div class="bg-light p-3 rounded">
                  <div class="d-flex justify-content-center">
                    <div class="me-2">
                      <h6 class="mb-1 lead fw-bold"> <a href="#!"> Frances Guerrero </a></h6>
                      <p class="h6 mb-0">Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected projection?</p>
                    </div>
                    <small>5hr</small>
                  </div>
                </div>
                <ul class="nav nav-divider py-2 small">
                  <li class="nav-item"> <a class="text-primary-hover" href="#"> Like (3)</a> </li>
                  <li class="nav-item"> <a class="text-primary-hover" href="#"> Reply</a> </li>
                  <li class="nav-item"> <a class="text-primary-hover" href="#"> View 5 replies</a> </li>
                </ul>
              </div>
            </div>

            <ul class="list-unstyled ms-4">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs flex-shrink-0">
                    <a href="#"><img class="avatar-img rounded-circle" :src="avatar06" alt=""></a>
                  </div>
                  <div class="ms-2">
                    <div class="bg-light p-3 rounded">
                      <div class="d-flex justify-content-center">
                        <div class="me-2">
                          <h6 class="mb-1  lead fw-bold"> <a href="#"> Lori Stevens </a> </h6>
                          <p class=" mb-0">See resolved goodness felicity shy civility domestic had but
                            Drawings offended yet answered Jennings perceive. Domestic had but Drawings
                            offended yet answered Jennings perceive.</p>
                        </div>
                        <small>2hr</small>
                      </div>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item"><a class="text-primary-hover" href="#!"> Like (5)</a></li>
                      <li class="nav-item"><a class="text-primary-hover" href="#!"> Reply</a> </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="border p-2 p-sm-4 rounded-3">
        <ul class="list-unstyled mb-0">
          <li class="comment-item">
            <div class="d-flex">
              <div class="avatar avatar-sm flex-shrink-0">
                <a href="#"><img class="avatar-img rounded-circle" :src="avatar02" alt=""></a>
              </div>
              <div class="ms-2">
                <div class="bg-light p-3 rounded">
                  <div class="d-flex justify-content-center">
                    <div class="me-2">
                      <h6 class="mb-1 lead fw-bold"> <a href="#!"> Louis Ferguson </a></h6>
                      <p class="h6 mb-0">Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected projection?</p>
                    </div>
                    <small>5hr</small>
                  </div>
                </div>
                <ul class="nav nav-divider py-2 small">
                  <li class="nav-item"> <a class="text-primary-hover" href="#"> Like</a> </li>
                  <li class="nav-item"> <a class="text-primary-hover" href="#"> Reply</a> </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
</script>