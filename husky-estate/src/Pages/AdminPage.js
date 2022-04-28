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
                <div className="row">

                    <h2 className="text-center">Enter Property Details</h2>
                    <div className="col-sm-6">
                        <img src={img1} alt="BigCo Inc. logo" />
                    </div>
                    <div className="col-sm-6">
                        <form action="">

                            <div class="form-group row">
                                <label htmlFor="Title" class="col-2 col-form-label">Title</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="Title" />
                                </div>
                            </div> <br></br>

                            <div class="form-group row">
                                <label htmlFor="Address" class="col-2 col-form-label">Address</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="Address" />
                                </div>
                            </div> <br></br>

                            <div class="form-group row">
                                <label htmlFor="Price" class="col-2 col-form-label">Price</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="Price" />
                                </div>
                            </div> <br></br>

                            <div class="form-group row">
                                <label htmlFor="Size" class="col-2 col-form-label">Size(Sq.feet)</label>
                                <div class="col-10">
                                    <input type="number" class="Size" id="Size" />
                                </div>
                            </div> <br></br>

                            <div class="form-group row">
                                <label htmlFor="Date" class="col-2 col-form-label">Date</label>
                                <div class="col-10">
                                    <input type="date" class="form-control" id="Date" />
                                </div>
                            </div> <br></br>

                            <div class="form-group row">
                                <label htmlFor="Bedrooms" class="col-2 col-form-label">Bedrooms</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="Bedrooms" />
                                </div>
                            </div> <br></br>

                            <div class="form-group row">
                                <label htmlFor="Description" class="col-2 col-form-label">Description</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="Description" />
                                </div>
                            </div> <br></br>

                            <div class="form-group row">
                                <label htmlFor="image" class="col-2 col-form-label">Upload Image</label>
                                <div class="col-10">
                                    <input type="file" class="form-control" id="image" />
                                </div>
                            </div> <br></br>


                            <div className="form-group row">
                                <label htmlFor="propertysale">Property For Sale</label>
                                <div>
                                    <input
                                        type="radio"
                                        value="Yes"
                                        checked={availability === 'Yes'}
                                        onChange={handleChange}
                                    /> Rent
                                                &nbsp;
                                    <input
                                        type="radio"
                                        value="No"
                                        checked={availability === 'No'}
                                        onChange={handleChange}
                                    /> Buy
                                </div>

                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                                <button type="submit" className="btn btn-warning">Delete</button>
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