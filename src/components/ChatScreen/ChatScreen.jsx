import React, { useEffect, useRef, useCallback, useState} from "react";
import Chat from "../Chat/Chat";
import './chatScreen.css'




const ChatScreen = (props) => {
    const { chats } = props;
    const chatContainerRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(20); // Start by displaying the first 20 messages

    // Infinite scroll handler
    const handleScroll = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 50) { // Threshold for triggering more messages
            setVisibleCount((prevCount) => prevCount + 20); // Increase count by 20 or any preferred number
        }
    }, []);

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (chatContainer) {
                chatContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, [handleScroll]);

    return (
        <div ref={chatContainerRef} className="chatscreen_container">
            {chats?.messages?.slice(0, visibleCount).map((chat) => (
                <Chat key={chat?.message_id} data={chat} />
            ))}
        </div>
    );
};

export default ChatScreen;