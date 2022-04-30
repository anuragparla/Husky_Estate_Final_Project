import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

import "./HomeCard.css"

const HomeCard = function ({ home,index, isAdmin}) {

    const { images } = home;
    const [frontImage, setFrontImage] = useState(0);

    const imagesLength = images.length;
    // const key = Math.random();

    const getLink = () => isAdmin ? `/editProp?id=${home._id}`: `/property?id=${home._id}`;
    const setImage = (inc) => {
        let img = frontImage + inc;
        if(img < 0) {
            setFrontImage(imagesLength - 1)
        } else if(img >= imagesLength) {
            setFrontImage(0);
        } else setFrontImage(img);
    }

    return (
        <div
            class="block p-4 rounded-lg shadow-sm shadow-indigo-100"
        >
            <div class="carousel w-full">
                    <div class="carousel-item relative w-full">
                        <img src={images[frontImage]} class="object-cover w-full h-56 rounded-md" /> 
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <span class="btn btn-circle disabled-link" onClick={() => setImage(-1)}>❮</span>
                            <span class="btn btn-circle disabled-link" onClick={() => setImage(+1)}>❯</span>
                        </div>
                    </div>
            </div>

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">
                            Price
                        </dt>

                        <dd class="text-sm text-gray-500">
                            ${home.price}
                        </dd>
                    </div>

                    <div>
                        <dt class="sr-only">
                            Title
                        </dt>

                        <dd class="font-medium">
                            {home.title}
                        </dd>
                    </div>

                    <div>
                        <dt class="sr-only">
                            Address
                        </dt>

                        <dd class="text-sm font-light">
                            {home.address}
                        </dd>
                    </div>

                </dl>

                <dl class="flex items-center mt-6 space-x-8 text-xs">
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg
                            class="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Bathroom
                            </dt>

                            <dd class="font-medium">
                                {home.bathroom} rooms
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg
                            class="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Bedroom
                            </dt>

                            <dd class="font-medium">
                                {home.bedroom} rooms
                            </dd>
                        </div>
                    </div>
                    <div>
                        <Link class="flex items-center justify-between px-5 py-3 text-indigo-600 transition-colors border border-current rounded-lg hover:bg-indigo-600 group active:bg-indigo-500 focus:outline-none focus:ring"
                            to={getLink()}>
                            <span class="font-medium transition-colors group-hover:text-white">
                                {isAdmin ? "Edit":"Find out More"}
                            </span>

                            <span class="flex-shrink-0 p-2 ml-4 bg-white border border-indigo-600 rounded-full group-active:border-indigo-500">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>

                    </div>

                </dl>
            </div>

        </div>
    );
};

export default HomeCard;