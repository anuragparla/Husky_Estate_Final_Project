import { data } from "autoprefixer";
import React, { useState } from "react";
import { URL } from "../../util/constants";


const EnquireModal = ({ token, home }) => {
    const [type, setType] = useState(1);
    const [message, setMessage] = useState("");


    const handleCLick = async () => {
        if(message.length === 0) {
            alert("Please provide a message");
            return;
        }
        const data = new URLSearchParams();
        data.set("enquiryType", type);
        data.set("propertyID", home._id);
        data.set("message", message);
        let res = await fetch(`${URL}/enquiry/new`, {
            method:"POST",
            body: data,
            headers: {
                'x-access-token': token
            }
        })
        console.log(res);
        let json = await res.json();
        console.log(json);
        if(json && json.success) {
            alert("Registered Enquiry");
        } else if(json) alert(json.message)
        else alert("Could not register enquiry")


    }
    return (
        <>
            <input type="checkbox" id="enquire-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <p>Enquire for <span class="font-bold text-lg">{home.address}</span></p>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Request Tour</span>
                            <input type="radio" name="radio-6" class="radio checked:bg-red-500" checked={type == 1} value={1} 
                            onChange={(e) => setType(e.target.value)}/>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Check Available</span>
                            <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked={type == 1} value={0} 
                            onChange={(e) => setType(e.target.value)}/>
                        </label>
                    </div>
                    <textarea class="textarea textarea-bordered w-full" placeholder="Message..."value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                    <div class="modal-action">
                        <label htmlFor="enquire-modal" class="btn btn-success" onClick={handleCLick}>Yay!</label>
                        <label htmlFor="enquire-modal" class="btn btn-error">Nay!</label>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EnquireModal;