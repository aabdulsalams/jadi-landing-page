import React from "react";

function FeaturesItem(props){
    return(
        <div className='features-item'>
            <div className='features-img'>
                <img src={props.image}/>
            </div>
            <div className='features-text'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>         
        </div>
    )
}

export default FeaturesItem;