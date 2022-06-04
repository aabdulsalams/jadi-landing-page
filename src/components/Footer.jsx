import React from "react";
import logo from '../components/images/logo.png'

function Footer(){
    return (
        <div id='footer'>
            <div className="footer-left">
                <a className='footer-logo'>
                    <img src={logo} alt=''/>
                </a>
                <p className="footer-links">
                    <a href="#" class="link-1">Home</a>
                    <a href="#">Features</a>
                    <a href="#">Interface</a>
                    <a href="#">About Us</a> 
                </p>
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
                isi text disini
                </p>
            </div>

            <div className="copyright">
                <p class="text-center">Copyright @2022 Jadi. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;