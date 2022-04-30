import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Cookies from "universal-cookie";
import { URL } from "../../util/constants";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { PickerInline } from 'filestack-react';



const EditAdminPage = () => {


    const [images, setImages] = useState([]);
    const [frontImage, setFrontImage] = useState("https://api.lorem.space/image/furniture?w=150&h=150");
    const [account, setAccount] = useState(null);
    const [property, setProperty] = useState({});
    const [searchParams, setSearch] = useSearchParams();

    let navigate = useNavigate();

  


    const config = {
        accept: "image/*",
        maxFiles: 3
    }


    const findHome = async () => {
        let response = await fetch(`${URL}/property/get/${searchParams.get("id")}`);
        if(response.status !== 200) {
            alert("Home not found");
            return;
        }
        let json = await response.json();
        console.log(json);
        if(json.success) {
            setProperty(json.data);
            
        } else alert("Home not found");
    }

    useEffect(() => {

        if (!account) {
            return;
        }
        findHome();
    }, [account]);

    useEffect(() => {
        if(!property.title)
            return;
        setImages(property.images);
        setFrontImage(property.images[0]);


    }, [property]);

    

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
                navigate("/", { replace: true});
                return;
            } else setAccount(json.data);

        } else return;
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
        e.preventDefault();

        if (images.length == 0) {
            alert("No Files Uploaded");
            return;
        }


        const data = new URLSearchParams(property);

        data.set("images", images.join())
         

        data.set("id", property._id);
        data.set("_id", property._id);


        let slug = "/property/update";

        let res = await fetch(`${URL+slug}`, {
            method: "POST",
            body: data,
            headers: {
                'x-access-token': new Cookies().get("auth")
            }
        });

        console.log(res);

        let json = await res.json();
        if (json.success) {
            alert("Property Updated");
        } else alert(json.message);

    }

    const handleDelete = async (e) => {
        e.preventDefault();
        let res = await fetch(`${URL}/property/delete/${property._id}`, {
            method: "DELETE",
            headers: {
                'x-access-token': new Cookies().get("auth")
            }
        });

        console.log(res);
        let json = await res.json();
        if (json.success) {
            alert("Property Deleted");
            navigate("/", { replace: true})
        } else alert(json.message);

    }

    const handleChange = e => {
        const { name, value } = e.target;
        setProperty(property => ({
            ...property,
            [name]: value
        }));
    };
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
                                        id="title" type="text" required name="title" value={property.title} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="address"> Address </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="address" type="text" required name="address" value={property.address} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="bedroom"> Bedrooms </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="bedroom" type="number" min="0" step="1" required name="bedroom" value={property.bedroom} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="bathroom"> Bathroom </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="bathroom" type="number" min="0" step="1" required name="bathroom" value={property.bathroom} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="price"> Price </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="price" type="number" min="0" step="1" required name="price" value={property.price} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500" for="size"> Size </label>
                                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                                        id="size" type="number" min="0" step="1" required name="size" value={property.size} onChange={handleChange}/>
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
                                        value={property.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

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
                                            checked={!property.isForSale}
                                            onChange={handleChange}
                                            required
                                        /> Rent
                                        &nbsp;
                                        <input
                                            type="radio"
                                            value="true"
                                            name="isForSale"
                                            checked={property.isForSale}
                                            onChange={handleChange}
                                            required
                                        /> Buy
                                    </div>

                                </div>
                                <div className="flex items-center justify-center">
                                    <button type="submit" className="btn btn-primary">Update</button> &nbsp;
                                    <button type="button" className="btn btn-warning" onClick={handleDelete}>Delete</button> 
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


export default EditAdminPage;