import React from "react";
import InterfaceItem from "./InterfaceItem";
import Interfaceimg1 from '../components/images/Interface-01.png';
import Interfaceimg2 from '../components/images/Interface-02.png';
import Interfaceimg3 from '../components/images/Interface-03.png';
import Interfaceimg4 from '../components/images/Interface-04.png';

function Interface(){
    return(
        <div id='interface'>
        <div className="interface-header">
            <h1>UI/UX Design for Jamin Padi</h1>
            <p>Our Application Interface Suits You and it's Easy to Use</p> 
        </div>
        <div className="interface-container">
            <InterfaceItem image={Interfaceimg1} title='Splash Screen'/>
            <InterfaceItem image={Interfaceimg2} title='Login Page'/>
            <InterfaceItem image={Interfaceimg3} title='Home Screen'/>
            <InterfaceItem image={Interfaceimg4} title='Disease Result'/>
        </div>
    </div>
    )
}   

export default Interface;