import React, {useState} from 'react';
import logo from '../components/images/logo.png';

function Navbar(){

    const [nav, setnav]  = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 60){
            setnav(false);
        }else{
            setnav(true);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#/" className='logo'>
                <img src={logo} alt=''/>
           </a>
            <input type='checkbox' className='btn-menu' id='btn-menu'/>
            <label className='icon-menu' for='btn-menu'>
               <span className='nav-icon'></span>
            </label>
            <ul className='home-menu'>
                <li><a href='#main'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#interface'>Interface</a></li>
                <li><a href='#about'>About Us</a></li>
                <li><a href='#download'>Download</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;