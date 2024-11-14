import React from "react";

import './chat.css'


function convertToIST(timestamp) {
    const date = new Date(timestamp);

    // Get the UTC time and adjust for IST by adding 5 hours and 30 minutes
    const ISTOffset = 5 * 60 + 30; // IST is UTC + 5:30 in minutes
    const ISTTime = new Date(date.getTime() + ISTOffset * 60 * 1000);

    // Format to a readable string if needed
    return ISTTime.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    });
}

const Chat = (props) => {
    const { data} = props;



    switch(props?.data?.type){
       
        case 'sender':{
            return  <div className="sender_container">
            <div className="sender">{data?.text}</div>
            <div className="timestamp">{convertToIST(data?.timeStamp)}</div>
        </div>
           
        }
        case 'receiver':{
            return (<div className="receiver_container">
                <div className="receiver_wrapper">
                <div className="receiver">{data?.text}</div>
                <div className="timestamp">{convertToIST(data?.timeStamp)}</div>
                </div>
            </div>)
        }


        default:{
           return <></>
        }

    }

}

export default Chat;