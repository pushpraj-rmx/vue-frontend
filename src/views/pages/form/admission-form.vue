<template>
  <TopBar6 />
  <main>
    <section>
      <b-container>
        <b-row class="g-5 justify-content-between">
          <b-col md="8" class="mx-auto">
            <h2 class="mb-3">Apply for Admission</h2>
            <p>You can apply online by filling up below form or <a href="#">Download a pdf</a> and submit. Any
              question related admission process, please contact our admission office at <a href="#">+123 456 789</a>
              or <a href="#">example@email.com</a>.</p>
            <p class="mb-1">Before you proceed with the form please read below topics:</p>
            <ul class="ps-3">
              <li>Application fee is {{ currency }}49</li>
              <li>Fees are non-refundable</li>
              <li>Field required with <span class="text-danger">*</span> are required to complete the admission form
              </li>
            </ul>
            <b-form class="row g-3">
              <h5 class="mb-0">Personal information</h5>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Student first name <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="firstName" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Student middle name <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="middleName" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Student last name <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="lastName" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Gender <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <div class="d-flex">
                      <div class="form-check radio-bg-light me-4">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                          checked>
                        <label class="form-check-label" for="flexRadioDefault1">
                          Male
                        </label>
                      </div>
                      <div class="form-check radio-bg-light">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                          Female
                        </label>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Date of birth</h6>
                  </b-col>

                  <b-col lg="8">
                    <b-row class="g-2 g-sm-4">
                      <b-col cols="4">
                        <ChoicesSelect id="select-date" class="z-index-9 border-0 bg-light">
                          <option value="">Date</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </ChoicesSelect>
                      </b-col>
                      <b-col cols="4">
                        <ChoicesSelect id="select-month" class="z-index-9 border-0 bg-light">
                          <option value="">Month</option>
                          <option>Jan</option>
                          <option>Feb</option>
                          <option>Mar</option>
                          <option>Apr</option>
                          <option>Jun</option>
                          <option>Jul</option>
                          <option>Aug</option>
                          <option>Sep</option>
                          <option>Oct</option>
                          <option>Nov</option>
                          <option>Dec</option>
                        </ChoicesSelect>
                      </b-col>
                      <b-col cols="4">
                        <ChoicesSelect id="select-year" class="z-index-9 border-0 bg-light">
                          <option value="">Year</option>
                          <option>1990</option>
                          <option>1991</option>
                          <option>1992</option>
                          <option>1993</option>
                          <option>1994</option>
                          <option>1995</option>
                          <option>1996</option>
                          <option>1997</option>
                          <option>1998</option>
                          <option>1999</option>
                          <option>2000</option>
                          <option>2001</option>
                          <option>2002</option>
                          <option>2003</option>
                          <option>2004</option>
                          <option>2005</option>
                        </ChoicesSelect>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Email <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="email" id="email" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Phone number <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="phoneNumber" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Your address <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-textarea placeholder="Enter something..." rows="3" max-rows="6" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Select city <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <ChoicesSelect id="select-city" class="z-index-9 rounded-3 border-0 bg-light">
                      <option value="">Select city</option>
                      <option>New york</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>London</option>
                      <option>Los angeles</option>
                    </ChoicesSelect>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Select state <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <ChoicesSelect id="select-state" class="z-index-9 rounded-3 border-0 bg-light">
                      <option value="">Select state</option>
                      <option>Maharashtra</option>
                      <option>California</option>
                      <option>Florida</option>
                      <option>Alaska</option>
                      <option>Ohio</option>
                    </ChoicesSelect>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Select country <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <ChoicesSelect id="sort-country" class="z-index-9 rounded-3 border-0 bg-light">
                      <option value="">Select country</option>
                      <option>India</option>
                      <option>Canada</option>
                      <option>Japan</option>
                      <option>America</option>
                      <option>Dubai</option>
                    </ChoicesSelect>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Zip code <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="zipCode" />
                  </b-col>
                </b-row>
              </b-col>

              <hr class="my-5">

              <h5 class="mt-0">Parent detail</h5>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Salutation <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <div class="d-flex">
                      <div class="form-check radio-bg-light me-4">
                        <input class="form-check-input" type="radio" name="flexRadioSalutation"
                          id="flexRadioSalutation1" checked>
                        <label class="form-check-label" for="flexRadioSalutation1">
                          Mr.
                        </label>
                      </div>
                      <div class="form-check radio-bg-light me-4">
                        <input class="form-check-input" type="radio" name="flexRadioSalutation"
                          id="flexRadioSalutation2">
                        <label class="form-check-label" for="flexRadioSalutation2">
                          Mrs.
                        </label>
                      </div>
                      <div class="form-check radio-bg-light me-4">
                        <input class="form-check-input" type="radio" name="flexRadioSalutation"
                          id="flexRadioSalutation3">
                        <label class="form-check-label" for="flexRadioSalutation3">
                          Ms.
                        </label>
                      </div>
                      <div class="form-check radio-bg-light">
                        <input class="form-check-input" type="radio" name="flexRadioSalutation"
                          id="flexRadioSalutation4">
                        <label class="form-check-label" for="flexRadioSalutation4">
                          Dr.
                        </label>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Full name <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="fullName" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Relation with applicant <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="relation" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Email <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="email" id="email2" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Phone number <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="phoneNumber2" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Home address <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-textarea placeholder="Enter something..." rows="3" max-rows="6" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Job title <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="jobTitle" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Office phone number</h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" />
                  </b-col>
                </b-row>
              </b-col>

              <hr class="my-5">

              <h5 class="mt-0">Education</h5>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">School or college name <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="collegeName" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Year of passing <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <ChoicesSelect id="select-year1" class="z-index-9 border-0 bg-light">
                      <option value="">Year</option>
                      <option>1990</option>
                      <option>1991</option>
                      <option>1992</option>
                      <option>1993</option>
                      <option>1994</option>
                      <option>1995</option>
                      <option>1996</option>
                      <option>1997</option>
                      <option>1998</option>
                      <option>1999</option>
                      <option>2000</option>
                      <option>2001</option>
                      <option>2002</option>
                      <option>2003</option>
                      <option>2004</option>
                      <option>2005</option>
                    </ChoicesSelect>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Board of university <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-input type="text" id="board" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0 align-items-center">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">Class grad <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <ChoicesSelect id="select-grade" class="z-index-9">
                      <option value="">Select grade</option>
                      <option>Distinction</option>
                      <option>First class</option>
                      <option>Second class</option>
                      <option>Third class</option>
                    </ChoicesSelect>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12">
                <b-row class="g-xl-0">
                  <b-col lg="4">
                    <h6 class="mb-lg-0">School or college address <span class="text-danger">*</span></h6>
                  </b-col>
                  <b-col lg="8">
                    <b-form-textarea placeholder="Enter something..." rows="3" max-rows="6" />
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12" class="text-sm-end">
                <b-button variant="primary" class="mb-0">Submit</b-button>
              </b-col>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
  <Footer9 />
</template>
<script setup lang="ts">
import TopBar6 from '@/views/pages/form/components/TopBar6.vue';
import Footer9 from '@/views/pages/form/components/Footer9.vue';
import { currency } from '@/helpers/constants';
</script>