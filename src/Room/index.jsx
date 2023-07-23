import React from "react";
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {

    const {roomId} = useParams();

    const myMeeting = async (elem) => {
        const appId = 796905947;
        const serverSecret = "ddad8ec4cbab8141b3f5acf1c3db61b5";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            ""
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: elem,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
                // mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: false,
            sharedLinks: [{
                name: "Copy Link",
                url: `http://localhost:3000/room/${roomId}`
            }],
        });
    }

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage;
