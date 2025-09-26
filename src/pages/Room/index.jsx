//all code of zegocloud


import React from 'react'
import { useParams, useLocation } from 'react-router-dom'   //useparams is part of react router dom
import { useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useState } from 'react';




const RoomPage = () => {

    const [showForm, setShowForm] = useState(false);
    const { id } = useParams();  //destructuring

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const role = queryParams.get("role") || "patient";
    const userName = role === "doctor123" ? "Doctor123" : "Patient";
    const meetingRef = useRef(null);

    //const roomid



    const Mymeeting = async (element) => {   //zegocloud inject its ui here
        const appID = 810680750;
        const serverSecret = "09330b69652681e1c540a90167778bed";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "User1");
        const zp = ZegoUIKitPrebuilt.create(kitToken);




        zp.joinRoom({
            container: Mymeeting.current,   //in which element you want to render ui
            sharedLinks: [
                {
                    name: 'Copy link',
                    url: `http://localhost:3000/room/${id}`
                    /*window.location.protocol + '//' + 
                    window.location.host + window.location.pathname +
                     '?roomID=' +
                     roomID,*/
                },
            ],

            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },



            // 👇 Customization of UI
            onJoinRoom: () => {
                // Only host gets button
                if (role === "doctor123") {
                    console.log(role);


                    /*if (chatBar) {
                        const myBtn = document.createElement("button");
                        myBtn.innerText = "My Host Button";
                        myBtn.style.marginLeft = "8px";
                        myBtn.onclick = () => alert("Host button clicked!");
                        chatBar.appendChild(myBtn);
                    }*/
                }
            },

        });
    }

    return (
        /* <div style={{ display: "flex", height: "100vh" }}>
             <div ref={Mymeeting} style={{ flex: 3, border: "2px solid black" }}></div>
 
 
 
             {/* Your custom form, only for host }
             {role === "host" && (
                 <div
                     style={{
                         flex: 1,
                         padding: "20px",
                         background: "#f9f9f9",
                         borderLeft: "2px solid #ccc",
                         zIndex: 9999          //overlapping issue solved
                     }}
                 >
                     <h2>Host Custom Form</h2>
                     <form>
                         <input
                             type="text"
                             placeholder="Enter meeting title"
                             style={{ display: "block", marginBottom: "10px", width: "100%" }}
                         />
                         <button type="submit">Save</button>
                     </form>
                 </div>
             )}
 
 
 
         </div> */
         <div style={{ display: "flex", height: "100vh" }}>
             <div ref={Mymeeting} style={{ flex: 3, border: "2px solid black" }}></div>
 

        { role === "doctor123" && (
            <div style={{ flex: 1, padding: "20px", background: "rgba(0,0,0,0)", zIndex: 9999 }}>
                <button
                    onClick={() => setShowForm(!showForm)}
                    style={{
                        padding: "10px 15px",
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginBottom: "15px",
                        marginLeft:"247px",
                        
                        
                    }}
                >
                    {showForm ? "CLOSE" : "E-Prescription"}
                </button>

                {showForm && (
                    <form
                        style={{
                            padding: "15px",
                            background: "#fff",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h2 style={{ marginBottom: "15px", fontSize: "20px", color: "#333" }}>E-Prescription</h2>

                        <input
                            type="text"
                            placeholder="Patient ID"
                            style={{
                                display: "block",
                                marginBottom: "12px",
                                padding: "10px",
                                width: "90%",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />

                        <input
                            type="date"
                            placeholder="Enter meeting title"
                            style={{
                                display: "block",
                                marginBottom: "12px",
                                padding: "10px",
                                width: "90%",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Doctor Name"
                            style={{
                                display: "block",
                                marginBottom: "12px",
                                padding: "10px",
                                width: "90%",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Anganwadi Centre"
                            style={{
                                display: "block",
                                marginBottom: "12px",
                                padding: "10px",
                                width: "90%",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />

                        <textarea
                            type="text"
                            placeholder="Medicines Prescribed"
                            style={{
                                display: "block",
                                marginBottom: "12px",
                                padding: "10px",
                                width: "90%",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />


                        <input
                            type="text"
                            placeholder="Dosage"
                            style={{
                                display: "block",
                                marginBottom: "12px",
                                padding: "10px",
                                width: "90%",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Follow up"
                            style={{
                                display: "block",
                                marginBottom: "12px",
                                padding: "10px",
                                width: "90%",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />



                        <button
                            type="submit"
                            style={{
                                padding: "10px 15px",
                                background: "#28a745",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Save
                        </button>
                    </form>
                )}
            </div>
        )}
            </div>
    )
}


export default RoomPage
