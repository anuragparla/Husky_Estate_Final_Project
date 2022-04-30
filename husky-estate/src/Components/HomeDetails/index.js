import React, { useEffect, useState } from "react";
import GoogleMaps from "../GoogleMaps";

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
                            <legend class="text-lg">
                                <span> Bedrooms</span> : <span className="font-bold">{home.bedroom}</span>
                            </legend>
                        </fieldset>

                        <fieldset>
                        <legend class="text-lg">
                                <span> Bathroom</span> : <span className="font-bold">{home.bathroom}</span>
                            </legend>
                        </fieldset>
                        <fieldset>
                        <legend class="text-lg">
                                <span> Size</span> : <span className="font-bold">{home.size} Sq Ft.</span>
                            </legend>
                            </fieldset>

                
                        <div>
                        <legend class="text-lg">
                                <span> Price</span> : <span className="font-bold">{home.price}</span>
                            </legend>
                        </div>


                        <button
                            type="button"
                            class="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-blue-100 border border-white-300 rounded"
                        >
                            Enquire
                        </button>
                    </form>
                </div>

                <div class="lg:col-span-3">
                    <div class="prose max-w-none">
                        {home.description}
                        <GoogleMaps center={{ lat: home.lat, lng:home.lng}} title={home.ti}>

                        </GoogleMaps>
                    </div>
                </div>
            </div>
        </div>
            </section>

    )
}

export default HomeDetailts