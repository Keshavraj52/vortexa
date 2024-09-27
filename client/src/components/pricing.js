import React from 'react'
import { Link } from 'react-router-dom'
import "./pricing.css"

function pricing() {
  return (
   
            <div class="pricing-pricing">
              <div class="pricing-container1">
                <div class="pricing-pricing-card">
                  <span class="pricing-text">Free</span>
                  <div class="pricing-container2">
                    <svg viewBox="0 0 513.1702857142857 1024" class="pricing-icon">
                      <path
                        d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"
                      ></path>
                    </svg>
                    <span class="pricing-text01">0</span>
                  </div>
                  <div class="pricing-container3">
                    <span class="pricing-text02">
                      ✔ You can upload max. 100 documents
                    </span>
                    <span class="pricing-text03">✔ Get 1 GB storage free</span>
                    <span class="pricing-text04">✔ Sharing-View only&nbsp;</span>
                    <span class="pricing-text05">
                      ✔ Only user can access the document
                    </span>
                  </div>
                  <button class="pricing-button button">Learn More</button>
                </div>
                <div class="pricing-pricing-card1">
                  <span class="pricing-text06">basic</span>
                  <div class="pricing-container4">
                    <svg viewBox="0 0 513.1702857142857 1024" class="pricing-icon2">
                      <path
                        d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"
                      ></path>
                    </svg>
                    <span class="pricing-text07">99</span>
                    <span class="pricing-text08"><span>/ monthly</span></span>
                  </div>
                  <span class="pricing-text10">
                    Billed annually or Rs.99 month-to-month.
                  </span>
                  <div class="pricing-container5">
                    <span class="pricing-text11">
                      ✔ You can upload max. 500 documents
                    </span>
                    <span class="pricing-text12">✔ Get 30 GB storage</span>
                    <span class="pricing-text13">
                      ✔ Sharing-only 30 shareable links per month&nbsp;
                    </span>
                    <span class="pricing-text14">
                      <span>✔ Guests without accounts cannot access</span>
                      <br />
                      <span>&nbsp; &nbsp; shared documents</span>
                    </span>
                  </div>
                  <button class="pricing-button1 button">Buy Now</button>
                </div>
                <div class="pricing-pricing-card2">
                  <span class="pricing-text18">Pro</span>
                  <div class="pricing-container6">
                    <svg viewBox="0 0 513.1702857142857 1024" class="pricing-icon4">
                      <path
                        d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"
                      ></path>
                    </svg>
                    <span class="pricing-text19">299</span>
                    <span class="pricing-text20"><span>/ monthly</span></span>
                  </div>
                  <span class="pricing-text22">
                    Billed annually or Rs.299 month-to-month.
                  </span>
                  <div class="pricing-container7">
                    <span class="pricing-text23">
                      ✔ You can upload max. 1000 documents
                    </span>
                    <span class="pricing-text24">✔ Get unlimited storage</span>
                    <span class="pricing-text25">
                      ✔ Sharing-100 shareable links per month
                    </span>
                    <span class="pricing-text26">
                      <span>✔ Guests without accounts can access the</span>
                      <br />
                      <span>&nbsp; &nbsp; &nbsp;shared documents</span>
                    </span>
                  </div>
                  <button class="pricing-button2 button">Buy Now</button>
                </div>
              </div>
            </div>
            
      )
}

export default pricing