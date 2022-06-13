import React from "react";
import FeaturesItem from "./FeaturesItem";
import featureimg1 from '../components/images/features-01.png';
import featureimg2 from '../components/images/features-02.png';
import featureimg3 from '../components/images/features-03.png';
import featureimg4 from '../components/images/features-04.png';

function Feature(){
    return(
        <div id='features'>
            <div className="features-header">
                <h1>Jamin Padi Features to Help You</h1>
                <p>Our Mobile Application was Built with some Amazing Features</p> 
            </div>
            <div className="features-container">
                <FeaturesItem image={featureimg1} title='Fast Result' description='With Jamin Padi, the user can use an image through the application to detect rice diseases and immediately get the results' />
                <FeaturesItem image={featureimg2} title='Provide Solution' description='After detecting rice disease, Jamin Padi provides a solution as the first step for the problem of rice plant disease to handle' />
                <FeaturesItem image={featureimg3} title='Accuracy' description='Jamin Padi uses a Data Model that has been trained with a lot of sample data and gives a prediction accuracy rate above 98%' />
                <FeaturesItem image={featureimg4} title='Save Cost' description='With Jamin Padi, users, especially farmers, do not need to hire or look for rice plant experts that will cost more for their services' />
            </div>
        </div>
    )
}   

export default Feature;