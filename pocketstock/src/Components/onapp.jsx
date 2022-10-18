import React from "react";
import '../StyleSheets/onapp.css'
import Phone from '../Assets/psphone.png'

const OnApp = () => {
    return (
        <div className="onapp">
            <div className="mobile"> 
            <p id="mobiledescription">Pocket Stock works better with the app.<br /> <span id="download"><em>Download now on the App store.</em></span> <br /> <button id="downloadbutton"><em>Download</em></button></p>
            
            <img src={Phone} id='phone'/>
            </div>

        </div>
    )
}

export default OnApp