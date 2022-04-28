import React from "react";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import "../main.css";

const Agents = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="container p-5">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
          <a class="relative block bg-black group" href="">
            <img
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
              src="https://www.hyperui.dev/photos/man-6.jpeg"
              alt=""
            />
            <div class="relative p-8">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>

              <p class="text-2xl font-bold text-white">Barry Scott</p>

              <div class="mt-64">
                <div
                  class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a class="relative block bg-black group" href="">
            <img
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
              src="https://www.hyperui.dev/photos/man-6.jpeg"
              alt=""
            />
            <div class="relative p-8">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>

              <p class="text-2xl font-bold text-white">Barry Scott</p>

              <div class="mt-64">
                <div
                  class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a class="relative block bg-black group" href="">
            <img
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
              src="https://www.hyperui.dev/photos/man-6.jpeg"
              alt=""
            />
            <div class="relative p-8">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>

              <p class="text-2xl font-bold text-white">Barry Scott</p>

              <div class="mt-64">
                <div
                  class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a class="relative block bg-black group" href="">
            <img
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
              src="https://www.hyperui.dev/photos/man-6.jpeg"
              alt=""
            />
            <div class="relative p-8">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>

              <p class="text-2xl font-bold text-white">Barry Scott</p>

              <div class="mt-64">
                <div
                  class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        </div>




        <Footer />
      </div>
    </>
  );
};

export default Agents;
