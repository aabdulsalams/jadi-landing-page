import React from "react";
import sponsor from '../components/images/sponsor-bckg.png';

function Sponsored(){
    return(
        <div id='Sponsored'>
            <div className="sponsor-header">
                <h1>Supported By</h1>
            </div>
            <div className="sponsored-bkg">
                <img src={sponsor} alt="sponsor"/>
            </div>
        </div>
    )
}   

export default Sponsored;