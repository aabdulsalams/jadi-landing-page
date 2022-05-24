import React from "react";
import FeaturesItem from "./FeaturesItem";
import featureimg1 from '../components/images/Features-01.png';
import featureimg2 from '../components/images/Features-02.png';
import featureimg3 from '../components/images/Features-03.png';

function Feature(){
    return(
        <div id='features'>
            <div className="features-header">
                <h1>What JaDi Offers You!</h1>
                <p>Our Mobile Application was Build with some Amazing Features for Users</p> 
            </div>
            <div className="features-container">
                <FeaturesItem image={featureimg1} title='Fast Result' description='isi text disini' />
                <FeaturesItem image={featureimg2} title='Machine Learning Data' description='isi text disini' />
                <FeaturesItem image={featureimg3} title='Accuracy' description='isi text disini' />
            </div>
        </div>
    )
}   

export default Feature;