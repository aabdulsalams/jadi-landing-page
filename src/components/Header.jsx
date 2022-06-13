import React from "react";
import Navbar from "./Navbar";

function Header(){
    return (
        <div id='main'>
            <div className='title'>
                <h1>JaDi Helps you Prevent the Rice Disease Earlier!</h1>
                <p className='detail'>
                    Our Machine Learning Model Can Identify the Rice Leaf Problems within a Sec and Gives You Reliable Data about Disease that Occur   
                </p>
                <a href='https://drive.google.com/file/d/140Hp7V14ljPSA2sd2ZE31bNWI9i_MeSW/view'className='hdr-btn'>Download</a> 
            </div>
            <Navbar/>
        </div>
    )
}
export default Header;