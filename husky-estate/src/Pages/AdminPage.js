import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Service from "../Components/Service";
import Navbar from "../Components/Navbar";
import img1 from "../assets/home1.jpeg"
import "../main.css";

const AdminPage = () => {
    const [availability, setAvailability] = React.useState('Yes');
    const handleChange = (event) => {
        setAvailability(event.target.value)
    }
    return (
        <>
            <Navbar />
            <br></br>
            <div className="container">
                {/* <div class="grid grid-cols-2 gap-3"> */}
                <div className="columns-2">
                    <div><br></br><img src={img1} alt="BigCo Inc. logo" /></div>
                    <div>
                        <form action="">
                            <div className="flex flex-col justify-center items-center">
                                <h2>Enter Property Details</h2>
                                <label htmlFor="propertyname">Property Name</label>
                                <input type="text" name="propertyname" id="propertyname"
                                    className="border"
                                    placeholder="Location"
                                    style={{ height: "34px", width: "500px" }} />
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="propertyaddress">Property Address</label>
                                <input type="text" name="propertyaddress" id="propertyname"
                                    className="border"

                                    placeholder="Address"
                                    style={{ height: "34px", width: "500px" }} />
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="propertyaddress">Price</label>
                                <input type="text" name="price" id="price"
                                    className="border"

                                    placeholder="Price"
                                    style={{ height: "34px", width: "500px" }}
                                />
                            </div>


                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="propertysize">Property Size</label>
                                <input type="number" name="propertysize" id="propertysize" className="border"
                                    placeholder="Property Size"
                                    style={{ height: "34px", width: "500px" }} />
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="propertydescription">Description</label>
                                <input type="text" name="propertydescription" id="propertydescription" className="border"
                                    placeholder="Description"
                                    style={{ height: "34px", width: "500px" }} />
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="listingdate">Date Of Listing</label>
                                <input type="date" name="listingdate" id="listingdate" className="border"
                                    placeholder="Date Of Listing"
                                    style={{ height: "34px", width: "500px" }} />
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="images">Upload Images</label>
                                <input type="images" name="images" id="images" className="border"
                                    placeholder="Upload Images"
                                    style={{ height: "34px", width: "500px" }} />
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="propertysale">Property For Sale</label>
                                <div>
                                    <input
                                        type="radio"
                                        value="Yes"
                                        checked={availability === 'Yes'}
                                        onChange={handleChange}
                                    /> Yes
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="No"
                                        checked={availability === 'No'}
                                        onChange={handleChange}
                                    /> No
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="bg-blue-500 rounded-medium w-16">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default AdminPage;