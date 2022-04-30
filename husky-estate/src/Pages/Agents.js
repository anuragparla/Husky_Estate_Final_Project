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
                src="https://i.insider.com/5eebe0c54dca683f3304e058?width=700"
                alt=""
              />
              <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  Senior Consultant
                </p>

                <p class="text-2xl font-bold text-white">Dana Scott</p>

                <div class="mt-64">
                  <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm text-white">
                      Real Estate consultant with 5+ years of experience.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a class="relative block bg-black group" href="">
              <img
                class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                src="https://www.mckissock.com/wp-content/uploads/2018/03/blog_image_women-in-real-estate.jpg"
                alt=""
              />
              <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  Manager
                </p>

                <p class="text-2xl font-bold text-white">Amanda Espinoza</p>

                <div class="mt-64">
                  <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm text-white">
                      Have been into the business since 2000 and has closed
                      deals worth 10M$. Currently looking after the overall
                      operations of Husky Estate.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a class="relative block bg-black group" href="">
              <img
                class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                src="https://s.yimg.com/ny/api/res/1.2/Z953PuwbtesgcQkViqe1Ng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-03/aad12c20-6dd8-11ea-bf7f-0f551242f8a8"
                alt=""
              />
              <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  Associate
                </p>

                <p class="text-2xl font-bold text-white">Heather Young</p>

                <div class="mt-64">
                  <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm text-white">
                      Having an experience of 3 years, Heather specialises in
                      finding the best property for renting.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a class="relative block bg-black group" href="">
              <img
                class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                src="https://www.kindpng.com/picc/m/365-3658669_hottest-real-estate-agents-hd-png-download.png"
                alt=""
              />
              <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  {" "}
                  Consultant
                </p>

                <p class="text-2xl font-bold text-white">Chrishell Strausse</p>

                <div class="mt-64">
                  <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm text-white">
                      Chrishell is our celebrity agent who deals with high
                      profile clients and is also one of the best closer in the
                      city.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a class="relative block bg-black group" href="">
              <img
                class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Jason_M_Oppenheim.jpg"
                alt=""
              />
              <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  {" "}
                  Consultant
                </p>

                <p class="text-2xl font-bold text-white">Jason Oppenheim</p>

                <div class="mt-64">
                  <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm text-white">
                      Jason has been with us since a long time and he has a
                      experience of 15+ years of experience as a legal advisor
                      in the real estate domain.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a class="relative block bg-black group" href="">
              <img
                class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                src="https://deadline.com/wp-content/uploads/2019/06/tarek-el-moussa-cropped.jpg?w=1024"
                alt=""
              />
              <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  {" "}
                  Consultant
                </p>

                <p class="text-2xl font-bold text-white">Tarek El Moussa</p>

                <div class="mt-64">
                  <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm text-white">
                      Tarek has a solid experience in buying and selling of
                      properties. He makes sure the client benefits the most
                      from the transaction.
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
