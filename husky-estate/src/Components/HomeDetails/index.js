import React, { useEffect, useState } from "react";

const HomeDetailts = ({ home }) => {

    const [frontImage, setFrontImage]  = useState("");

    useEffect(() => {

        setFrontImage(home.images[0]);


    }, []);

    return (
        <section>
            
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div>
                <h1 class="text-2xl font-bold lg:text-3xl">
                    {home.title}
                </h1>

                <p class="mt-1 text-sm text-gray-500">
                    {home.address}
                </p>
            </div>

            <div class="grid gap-8 lg:items-start lg:grid-cols-4">
                <div class="lg:col-span-3">
                    <div class="relative mt-4">
                        <img
                            alt=""
                            src={frontImage}
                            class="w-full rounded-xl h-72 lg:h-[540px] object-cover"
                        />

                        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
                            <svg
                                class="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>

                            <span class="text-xs ml-1.5">
                                Hover to zoom
                            </span>
                        </div>
                    </div>

                    <ul class="flex gap-1 mt-1">
                        {home.images.map((image) => (
                            <li>
                                <img class="object-cover w-16 h-16 rounded-md" src={image} alt=""  onClick={() => setFrontImage(image)}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <div class="lg:top-0 lg:sticky">
                    <form class="space-y-4 lg:pt-8">
                        <fieldset>
                            <legend class="text-lg font-bold">
                                Bedrooms: {home.bedroom}
                            </legend>
                        </fieldset>

                        <fieldset>
                            <legend class="text-lg font-bold">
                                Bathrooms: {home.bathroom}
                            </legend>
                        </fieldset>

                
                        <div>
                            <p class="text-xl font-bold">
                                {home.price}
                            </p>
                        </div>


                        <button
                            type="button"
                            class="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                        >
                            Notify when on sale
                        </button>
                    </form>
                </div>

                <div class="lg:col-span-3">
                    <div class="prose max-w-none">
                        {home.description}

                    </div>
                </div>
            </div>
        </div>
            </section>

    )
}

export default HomeDetailts