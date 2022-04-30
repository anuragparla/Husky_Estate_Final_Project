import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Cookies from "universal-cookie";
import { URL } from "../../util/constants";

import { useNavigate } from "react-router-dom";

const EnquiriesPage = () => {

    const [account, setAccount] = useState(null);
    const [enquiry, setEnquiry] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {

        if (!account) {
            const token = new Cookies().get("auth");
            getAccount(token);
        }
    }, []);


    const getEnquiry = async () => {
        let res = await fetch(`${URL}/enquiry/all`, {
            method:"GET",
            headers: {
                'x-access-token': new Cookies().get("auth")
            }
        });
        console.log(res);
        let json  = await res.json();
        console.log(json);
        if(json && json.success) {
            setEnquiry(json.data);
        } else alert("Enquiry could not be found");
    }

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
                navigate("/", { replace: true });
            } else {setAccount(account);  getEnquiry();}
        } else navigate("/", { replace: true });
    }






    return (
        <>
            <Navbar />
            <div className="container p-5">
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Name</th>
                                <th>Propery ID</th>
                                <th>Enquiry Type</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquiry.map((enq, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{enq.userID}</td>
                                    <td>{enq.propertyID}</td>
                                    <td>{enq.enquiryType}</td>
                                    <td>{enq.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </>
    )
}


export default EnquiriesPage;