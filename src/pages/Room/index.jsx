//all code of zegocloud

import React from 'react'
import { useParams } from 'react-router-dom'   //useparams is part of react router dom
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { id } = useParams();  //destructuring

    const Mymeeting = async (element) => {   //zegocloud inject its ui here
        const appID = 810680750;
        const serverSecret = "09330b69652681e1c540a90167778bed";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "User1");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,   //in which element you want to render ui
            sharedLinks: [
          {
            name: 'Copy link',
            url:`http://localhost:3000/room/${id}`
             /*window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,*/
          },
        ],
            
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    }
    return (
        <div className='App'>
            <div ref={Mymeeting} />
        </div>
    )
}

export default RoomPage
