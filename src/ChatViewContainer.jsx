import React, { useEffect, useState } from "react";
import Headers from "./components/Header";
import './index.css';
import { connect } from 'react-redux';
import { getPosts } from './state/ducks/actions'

import useSelector from 'redux'
import store from "./state/store";
import { CHAT_RESPONSE } from "./response";
import ChatScreen from "./components/ChatScreen/ChatScreen";


const ChatViewContainer = (props) => {


    const [chats, setChats] = useState(null);

    useEffect(()=> {
        props?.getPosts({"data_new":true})
    },[])


    useEffect(()=>{
        setChats(props?.posts?.getMessagesReducer?.data)
    },[props?.posts?.getMessagesReducer?.data?.messages?.length])




    return <>
    <div className="container">
        <Headers/>
        <ChatScreen chats={chats}/>
    </div>
    
    </>
}

ChatViewContainer.displayName = 'ChatViewContainer';


const mapStateToProps = state =>({
    posts: state
})


export default connect(mapStateToProps, { getPosts })(ChatViewContainer)