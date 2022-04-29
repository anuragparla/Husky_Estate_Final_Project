import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Cookies from "universal-cookie";
import { URL } from "../../util/constants";

import { PickerInline } from 'filestack-react';
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [images, setImages] = useState([]);
    const [frontImage, setFrontImage] = useState("https://api.lorem.space/image/furniture?w=150&h=150");
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const config = {
        accept: "image/*",
        maxFiles: 3
    }

    useEffect(() => {

        if (!account) {
            const token = new Cookies().get("auth");
            getAccount(token);
        }

    }, []);


    const getAccount = async (token) => {
        let res = await fetch(`${URL}/auth/me`, {
            method: "GET",
            headers: {
                "x-access-token": token
            }
        });
        if (res.status === 200) {
            let json = await res.json();
            console.log(json);
            let acc = json.data;
            
            if (!acc || !(acc.userType === "ADMIN")) {
                navigate("/", {replace: true});
            } else setAccount(account);
        }
    }



    const uploadDone = (res) => {
        let uploadedFiles = res.filesUploaded;
        let ims = [];
        for (let file of uploadedFiles) {
            ims.push(file.url);
        }
        setImages(ims);
    }

    


    const handleSubmit = async (e) => {
        let formData = new FormData(e.target);
        e.preventDefault();

        if (images.length == 0) {
            alert("No Files Uploaded");
            return;
        }

        const data = new URLSearchParams(formData);
        data.set("images", images.join())
         
        data.set("isForSale", data.get("isForSale") === "true")

        let res = await fetch(`${URL}/property/new`, {
            method: "POST",
            body: data,
            headers: {
                'x-access-token': new Cookies().get("auth")
            }
        });
        console.log(res);
        let json = await res.json();
        if (json.success) {
            alert("Property Added");
        } else alert(json.message);

    }
    return (
        <>
            <Navbar />
            <div className="container p-5">

                <div className="flex flex-col auto-cols-max gap-4">

                    <h2 className="text-lg" >Enter Property Details</h2>
                    <div className="flex gap-4 flex-col  md:flex-row lg:flex-row">
                        <div class="w-full md:w-2/5 lg:w-2/5 lg:col-span-3 ">
                            <div class="relative mt-4">
                                <img
                                    alt=""
                                    src={frontImage}
                                    class="w-full rounded-xl h-72 lg:h-[540px] object-cover"
                                />
                            </div>

                            <ul class="flex gap-1 mt-1">
                                {images.map((image) => (
                                    <li>
                                        <img class="object-cover w-16 h-16 rounded-md" src={image} alt="" onClick={() => setFrontImage(image)} />
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="w-full md:w-3/5 lg:w-3/5">

                            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>

                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="title"> Title </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="title" type="text" required name="title" />
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="address"> Address </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="address" type="text" required name="address" />
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="bedroom"> Bedrooms </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="bedroom" type="number" min="0" step="1" required name="bedroom" />
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="bathroom"> Bathroom </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="bathroom" type="number" min="0" step="1" required name="bathroom" />
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="price"> Price </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="price" type="number" min="0" step="1" required name="price" />
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="size"> Size </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="size" type="number" min="0" step="1" required name="size" />
                                </div>
                                <div>
                                    <label class="sr-only" for="message">Description</label>
                                    <textarea
                                        class="textarea textarea-bordered w-full p-3 text-sm border-gray-200 rounded-lg"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                        required
                                        name="description"
                                    ></textarea>
                                </div>

                                {/* <div>
                                    <label htmlFor="image" class="col-2 col-form-label">Upload Image</label>
                                    <div class="col-10">
                                        <input type="file" class="form-control" id="image" accept="image/*" multiple name="images" />
                                    </div>
                                </div> */}
                                <PickerInline
                                    apikey="AsodnNr1qSIW4WMC4pV5Qz"
                                    onUploadDone={uploadDone}
                                    pickerOptions={config}
                                />


                                <div className="">
                                    <label htmlFor="propertysale">Property For Sale</label>
                                    <div>
                                        <input
                                            type="radio"
                                            value="false"
                                            name="isForSale"
                                        /> Rent
                                        &nbsp;
                                        <input
                                            type="radio"
                                            value="true"
                                            name="isForSale"
                                        
                                        /> Buy
                                    </div>

                                </div>
                                <div className="flex items-center justify-center">
                                    <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default AdminPage;