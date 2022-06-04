import React, {useState} from 'react';
import logo from '../components/images/logo.png'

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
           <a className='logo'>
                <img src={logo} alt=''/>
           </a>
           <input type='checkbox' className='btn-menu' id='btn-menu'/>
           <label className='icon-menu' for='btn-menu'>
               <span className='nav-icon'></span>
           </label>
           <ul className='home-menu'>
               <li><a href='#' className='active'>Home</a></li>
               <li><a href='#'>Features</a></li>
               <li><a href='#'>Interface</a></li>
               <li><a href='#'>About Us</a></li>
               <li><a href='#'>Download</a></li>
           </ul>
       </nav>
    )
}

export default Navbar;