import React from "react";
import logo from '../components/images/logo.png'

function Footer(){
    return (
        <div id='footer'>
            <div className="footer-left">
                <div className='footer-logo'>
                    <img src={logo} alt='jadilogo'/>
                </div>
                <div className="footer-links">
                    <a href="#main" class="link-1">Home</a>
                    <a href="#feature">Features</a>
                    <a href="#interface">Interface</a>
                    <a href="#download">Download</a> 
                </div>
            </div>

            <div className="footer-center">
                <div>
                    <p><span>Makassar</span> Sulawesi Selatan, Indonesia</p>
                </div>

                <div>
                    <p>+62 896 0123 6340</p>
                </div>

                <div>
                    <p><a href="null">C22-PS295@bangkit.academy</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-team-about">
                <span>About Jamin Padi</span>
                Jamin padi is an application developed with the aim of facilitating disease detection in rice plants, we focus on making our application useful for users, especially farmers.
                </p>
            </div>

            <div className="copyright">
                <p class="text-center">Copyright @2022 Jadi. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;