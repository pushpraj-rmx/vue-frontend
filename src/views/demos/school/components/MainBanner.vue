<template>
  <section class="position-relative overflow-hidden pb-0 pb-sm-5">
    <b-container>
      <b-row class="d-lg-flex justify-content-lg-between g-4 g-md-5">
        <b-col lg="7" class="position-relative z-index-1 mb-2">
          <h1 class="mb-4 display-4">
            <span>
              <svg class="fill-warning" width="103" height="100" viewBox="0 0 103 100">
                <path
                  d="M69.0166 69.7017C56.5959 80.712 39.8019 84.7239 25.181 80.1338C24.3382 79.9118 23.8242 78.9676 24.1599 78.1317C24.3819 77.2889 25.3261 76.7749 26.162 77.1106C39.7195 81.3514 55.3555 77.6122 66.9322 67.3502C78.5088 57.0882 84.0965 42.0136 81.5127 28.0453C81.3934 27.1819 81.9032 26.2994 82.7665 26.1801C83.6299 26.0608 84.5124 26.5706 84.6317 27.4339C87.4951 42.4465 81.4374 58.6914 69.0166 69.7017Z" />
                <path
                  d="M26.0436 85.7222C25.923 85.8291 25.8627 85.8825 25.6887 85.9291C24.8651 86.3362 23.9689 86.0539 23.5015 85.2838C22.0666 82.5718 21.1317 76.2941 27.8958 72.0209C28.6659 71.5536 29.6224 71.7824 30.0898 72.5525C30.5571 73.3227 30.3283 74.2792 29.5582 74.7466C23.8589 78.3989 26.0805 83.213 26.3875 83.8023C26.7479 84.4518 26.5863 85.2412 26.0436 85.7222Z" />
                <path
                  d="M90.0771 28.9603C89.5344 29.4413 88.7314 29.5071 88.1298 29.0713C87.635 28.7562 83.0688 25.9128 78.8126 31.1931C78.2562 31.9017 77.2257 31.9538 76.5706 31.4577C75.8621 30.9014 75.81 29.8708 76.306 29.2158C81.3597 23.0131 87.48 24.6943 90.0002 26.4442C90.769 26.9471 90.9349 27.9845 90.3786 28.693C90.258 28.7999 90.1374 28.9068 90.0771 28.9603Z" />
                <path
                  d="M26.6015 44.2033C28.5257 46.3739 28.3271 49.6725 26.1565 51.5966C23.9859 53.5208 20.6873 53.3222 18.7632 51.1516C16.8391 48.981 17.0376 45.6824 19.2082 43.7583C21.3788 41.8342 24.6774 42.0327 26.6015 44.2033Z" />
                <path
                  d="M56.8095 17.4259C58.7337 19.5965 58.5351 22.895 56.3645 24.8192C54.1939 26.7433 50.8953 26.5447 48.9712 24.3741C47.0471 22.2035 47.2456 18.905 49.4162 16.9808C51.5869 15.0567 54.8854 15.2552 56.8095 17.4259Z" />
              </svg>
            </span>
            School Might be
            <span>Closed, Not Your</span>
            <span class="position-relative d-inline-block">Curiosity
              <span class="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-sm-block">
                <svg class="fill-orange" width="303" height="86" viewBox="0 0 303 86">
                  <path
                    d="M288.197 19.3999C281.599 15.6998 273.654 13.03 265.424 10.926C256.533 8.64794 247.263 6.92124 237.946 5.4267C218.461 2.249 198.384 0.406219 178.237 0.0579769C158.609 -0.275755 138.888 0.8125 119.733 3.49686C108.17 5.10748 96.8189 7.2985 85.8466 10.0264C81.4955 11.0131 77.168 12.0723 72.9115 13.2331C56.382 17.7022 40.5146 23.4192 26.3972 30.355C12.9182 36.9861 0.716203 46.0404 0.999971 57.2131C1.14185 62.2772 4.16871 67.051 9.98595 70.693C15.4721 74.1319 22.6846 76.3809 29.9679 78.0206C38.7647 80.0085 48.0345 81.3289 57.257 82.4026C67.1179 83.5489 77.0734 84.2889 87.0762 84.6807C107.413 85.4642 127.892 84.7968 148.063 83.0266C168.399 81.2418 188.429 78.3543 208.127 74.8139C227.399 71.3459 246.436 67.2976 265.141 62.8285C278.927 59.5348 294.227 55.0802 300.446 46.2435C307.091 36.812 299.949 25.973 288.197 19.3999ZM298.862 46.7804C295.48 50.9593 289.592 54.0935 283.207 56.4876C276.633 58.9543 269.468 60.7391 262.279 62.4077C252.915 64.5843 243.503 66.6737 234.044 68.6616C215.174 72.6083 196.019 76.0762 176.534 78.7171C157.191 81.3289 137.54 83.0991 117.747 83.6505C97.9304 84.2019 77.9957 83.5634 58.4866 81.3289C49.5243 80.2987 40.5146 79.0363 31.907 77.1645C24.5764 75.5829 17.3403 73.4499 11.6649 70.1126C5.49296 66.4561 2.15869 61.5226 2.22963 56.2555C2.32422 50.7417 5.72943 45.489 10.9555 41.0489C16.1106 36.6959 22.7319 33.0974 29.6842 29.8472C36.2108 26.8145 43.0213 24.0141 50.0918 21.4748C48.4601 22.1278 46.8521 22.7953 45.2678 23.4772C37.7716 26.684 30.4409 30.1664 23.9615 34.1131C17.695 37.9438 12.1615 42.3839 9.30018 47.5785C6.55709 52.5554 6.10779 58.1853 9.77313 63.0462C13.0838 67.4427 19.303 70.7655 26.279 72.8985C34.6974 75.4813 44.2036 76.2358 53.497 76.381C63.8309 76.5406 74.2357 76.1488 84.5696 75.757C95.0454 75.3652 105.497 74.7993 115.926 74.0884C136.783 72.6664 157.545 70.6204 178.071 67.9361C187.956 66.6447 197.817 65.2227 207.583 63.6411C208.269 63.525 208.718 62.3642 208.009 62.4658C188.358 65.629 168.447 68.2118 148.394 70.2142C128.435 72.202 108.312 73.624 88.1404 74.4366C78.0666 74.8429 67.9219 75.1911 57.8008 75.2056C48.3419 75.2201 38.6465 74.7558 29.8261 72.5068C22.5427 70.6785 15.8032 67.6169 11.8777 63.3509C7.33745 58.4175 7.52663 52.4393 10.6481 47.2302C13.7695 41.9776 19.7523 37.581 26.3263 33.8084C32.7583 30.1083 39.8289 26.7855 47.1359 23.7529C59.2197 18.7034 72.2257 14.4955 85.7756 11.1292C90.7889 9.99737 95.8494 8.98167 100.981 8.08205C117.96 5.07846 135.553 3.32274 153.218 2.88744C161.754 2.66979 170.315 2.78587 178.851 3.19215C179.537 3.22117 180.128 2.06037 179.277 2.01684C167.69 1.45094 156.032 1.47996 144.468 2.06037C145.745 1.97331 146.999 1.88625 148.275 1.8137C167.879 0.6674 187.696 1.04466 207.157 2.78587C226.075 4.46904 245.111 7.25497 262.894 11.608C278.714 15.4677 294.085 21.6635 299.808 32.0092C302.456 36.812 302.574 42.1662 298.862 46.7804Z" />
                </svg>
              </span>
            </span>
          </h1>

          <p class="mb-3 col-lg-8">We are so eager to be working with kids and making a difference in their careers.
            Being a mentor is what we have always wanted to be.</p>

          <a href="#" class="btn btn-lg btn-blue mb-0">Apply Now</a>
        </b-col>

        <b-col lg="5" xxl="3" class="position-relative">
          <h4 class="mb-4">Our 2023 Top-Ranked Student</h4>

          <div class="d-flex align-items-center mb-3">
            <div class="avatar avatar-xl">
              <img class="avatar-img rounded-circle" :src="avatar01" alt="avatar">
              <div class="position-absolute bottom-0 end-0">
                <img :src="medalbadge" class="position-relative" alt="">
                <span
                  class="fw-bold text-dark smaller position-absolute top-50 start-50 translate-middle">1<sup>st</sup></span>
              </div>
            </div>
            <div class="ms-3">
              <h5 class="mb-1">Jacqueline Miller</h5>
              <p class="mb-0">12th Board Exam</p>
            </div>
          </div>

          <div class="d-flex align-items-center mb-3">
            <div class="avatar avatar-xl">
              <img class="avatar-img rounded-circle" :src="avatar03" alt="avatar">
              <div class="position-absolute bottom-0 end-0">
                <img :src="medalbadge" class="position-relative" alt="">
                <span
                  class="fw-bold text-dark smaller position-absolute top-50 start-50 translate-middle">2<sup>nd</sup></span>
              </div>
            </div>
            <div class="ms-3">
              <h5 class="mb-1">Louis Ferguson</h5>
              <p class="mb-0">12th Board Exam</p>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <div class="avatar avatar-xl">
              <img class="avatar-img rounded-circle" :src="avatar06" alt="avatar">
              <div class="position-absolute bottom-0 end-0">
                <img :src="medalbadge" class="position-relative" alt="">
                <span
                  class="fw-bold text-dark smaller position-absolute top-50 start-50 translate-middle">1<sup>st</sup></span>
              </div>
            </div>
            <div class="ms-3">
              <h5 class="mb-1">Frances Guerrero</h5>
              <p class="mb-0">10th Board Exam</p>
            </div>
          </div>

        </b-col>
      </b-row>

      <b-row class="g-lg-5 align-items-center mt-5 mt-lg-0">
        <b-col lg="6" xl="5">
          <ul class="list-inline vstack gap-4 flex-wrap mb-4">
            <li class="list-inline-item border-bottom me-0">
              <div class="d-sm-flex justify-content-between align-items-center mb-3">
                <div class="d-sm-flex align-items-center">
                  <img :src="medal" class="me-3 mb-2 mb-sm-0 h-70px" alt="">
                  <h5 class="mb-2 mb-sm-0">Best school of the year</h5>
                </div>

                <h5 class="mb-0">2021</h5>
              </div>
            </li>

            <li class="list-inline-item">
              <div class="d-sm-flex justify-content-between align-items-center mb-3">
                <div class="d-sm-flex align-items-center">
                  <img :src="medal" class="me-3 mb-2 mb-sm-0 h-70px" alt="">
                  <h5 class="mb-2 mb-sm-0">Best discipline school of the year</h5>
                </div>

                <h5 class="mb-0">2023</h5>
              </div>
            </li>
          </ul>
        </b-col>

        <b-col lg="6" xl="7" class="position-relative mt-5 mt-lg-0">
          <figure class="position-absolute top-0 start-0 translate-middle ms-3">
            <svg class="fill-danger" width="79" height="99" viewBox="0 0 79 99">
              <path
                d="M39.5002 97.4376C37.0579 73.3386 34.6156 49.1923 32.2202 25.0933C30.8581 25.3773 29.4961 25.6141 28.134 25.8981C43.6804 42.4692 59.2737 58.9928 74.8201 75.5639C75.8064 74.8537 76.8397 74.1435 77.826 73.4333C53.1679 65.9053 27.8992 61.2181 2.16076 59.3716C2.53651 60.3659 2.91225 61.3128 3.28799 62.307C25.0811 52.3644 46.8742 42.3745 68.6673 32.4319C67.587 31.8637 66.5068 31.2482 65.4265 30.6801C55.2345 52.175 45.0894 73.7174 34.8974 95.2123C33.958 97.2009 38.2791 97.8637 39.1245 96.0646C49.3165 74.5696 59.4616 53.0273 69.6536 31.5323C70.4521 29.8278 67.4461 29.307 66.4128 29.7805C44.6197 39.6284 22.8266 49.571 1.03353 59.561C-1.12699 60.5552 0.42295 62.3544 2.16076 62.4964C27.0537 64.2956 51.6649 68.8408 75.5716 76.132C76.6049 76.4634 80.2214 75.7532 78.5775 74.0014C63.0312 57.4304 47.4378 40.9068 31.8914 24.3357C30.9991 23.3888 27.6174 23.1047 27.8052 25.1406C30.2476 49.2396 32.6899 73.3859 35.0853 97.4849C35.3201 99.5208 39.6881 99.4735 39.5002 97.4376Z" />
              <path
                d="M46.8741 1.18358C45.4181 5.39736 44.8075 9.70582 44.9484 14.1563C45.0424 16.3342 49.4104 16.3342 49.3165 14.1563C49.1756 9.9899 49.7392 6.01285 51.1012 2.03581C51.8527 -0.142097 47.5317 -0.804937 46.8741 1.18358Z" />
              <path
                d="M15.8286 7.00718C17.9422 9.80058 20.6663 11.9311 23.8601 13.3515C24.7995 13.7776 26.2085 13.6356 26.8661 12.7834C27.5236 11.9311 26.96 10.9369 26.0676 10.5581C23.4844 9.42182 21.3239 7.67002 19.633 5.39743C18.4119 3.69298 14.3257 4.97131 15.8286 7.00718Z" />
              <path
                d="M2.48911 34.0889C6.43441 35.5567 10.3797 37.0244 14.325 38.5394C16.1568 39.2023 19.2566 37.1664 16.5325 36.1248C12.5872 34.6571 8.6419 33.1894 4.6966 31.6743C2.91182 31.0115 -0.188063 33.0473 2.48911 34.0889Z" />
            </svg>
          </figure>
          <img :src="bg06" class="rounded-3" alt="">
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';

import bg06 from '@/assets/images/bg/06.jpg';

import medalbadge from '@/assets/images/element/medal-badge.png';
import medal from '@/assets/images/element/medal.svg';
</script>