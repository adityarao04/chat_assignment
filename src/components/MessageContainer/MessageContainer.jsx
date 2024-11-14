import React from "react";
import ChatScreen from "../ChatScreen/ChatScreen";

const CHAT_CONFIG = {
    1: 'sender',
    2: 'receiver'
}


const MessageContainer = (props) => {


    const res = {
        messages: [
            {
                type: 'sender',
                text: 'hey!',
                timeStamp: '',
                message_id: 1234,
            }
        ]
    }

    return <div className="messages_container">
        <ChatScreen/>
    </div>

}

export default MessageContainer;