//all code of zegocloud


import React from 'react'
import { useParams, useLocation } from 'react-router-dom'   //useparams is part of react router dom
import { useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const RoomPage = () => {
    const { id } = useParams();  //destructuring

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const role = queryParams.get("role") || "guest";
    const userName = role === "host" ? "HostUser" : "GuestUser";
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
                if (role === "host") {
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
        <div style={{ display: "flex", height: "100vh" }}>
            <div ref={Mymeeting} style={{ flex: 3, border: "2px solid black" }}></div>



            {/* Your custom form, only for host */}
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



        </div>

    )
}


export default RoomPage
