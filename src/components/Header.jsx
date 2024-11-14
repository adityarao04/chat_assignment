import React, { useState } from "react";
import './header.css'



const Headers = (props) => {


    

    return <div className="header">
            <div className="profile">

            </div>
            <div className="name">
                Aditya
            </div>
            {props?.typing ? <>
                <div className="typing">
                 typing...
                </div>
            </> : <></>}
            
    </div>
}

export default Headers;