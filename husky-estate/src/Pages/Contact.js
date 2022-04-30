import React from "react";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import "../main.css";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="conatiner p-5">
          <section>
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:py-12 lg:col-span-2">
                  <p class="max-w-xl text-lg">
                    We not only find the perfect property for our customers but
                    we also believe in building a long term relationship with
                    our clients through trust and quality.
                  </p>

                  <div class="mt-8">
                    <a href="" class="text-2xl font-bold text-pink-600">
                      {" "}
                      0151 475 4450{" "}
                    </a>

                    <address class="mt-2 not-italic">
                      360 Huntington Avenue, Boston, MA 02120
                    </address>
                  </div>
                </div>

                <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                  <form action="#" class="space-y-4">
                    <div>
                      <label class="sr-only" for="name">
                        Name
                      </label>
                      <input
                        class="input input-bordered w-full p-3 text-sm border-gray-200 rounded-lg"
                        placeholder="Name"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label class="sr-only" for="email">
                          Email
                        </label>
                        <input
                          class="input input-bordered  w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="Email address"
                          type="email"
                          id="email"
                        />
                      </div>

                      <div>
                        <label class="sr-only" for="phone">
                          Phone
                        </label>
                        <input
                          class="input input-bordered  w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="Phone Number"
                          type="tel"
                          id="phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="sr-only" for="message">
                        Message
                      </label>
                      <textarea
                        class="textarea textarea-bordered w-full p-3 text-sm border-gray-200 rounded-lg"
                        placeholder="Message"
                        rows="8"
                        id="message"
                      ></textarea>
                    </div>

                    <div class="mt-4">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                      >
                        <span class="font-medium"> Contact </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 ml-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
