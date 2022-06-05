import React from "react";

function InterfaceItem(props){
    return(
        <div className='interface-item'>
            <div className='interface-img'>
                <img src={props.image} alt="interface-pic"/>
            </div>
            <div className='interface-text'>
                <h2>{props.title}</h2>
            </div>         
        </div>
    )
}

export default InterfaceItem;