import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import MenuButton from '../menu-button/menu-button.component';

import logo from '../../assets/LOGO.jpg';

const Header = () => {
    const [open, setOpen] = useState(false);

    return ( 
        <header className='fixed bg-white-80 w-100 ph3 pv2 pv2-ns ph4-m ph5-l flex items-center justify-between'>
            <Link to='/'>
                <img className='w3' src={logo} alt='logo' />
            </Link>
            <MediaQuery maxWidth={550}>
                <div className='w-10'>
                    <MenuButton showMenu={open} onClick={()=>setOpen(!open)} />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={551}>
                <nav class='f6 f4-l fw6 ttu tracked'>
                    <Link class='link dim black dib mr3' to='/' title='Home'>Home</Link>
                    <Link class='link dim black dib mr3' to='/about' title='About'>About</Link>
                    <Link class='link dim black dib mr3' to='/services' title='Store'>Services</Link>
                    <Link class='link dim black dib' to='/contact' title='Contact'>Contact</Link>
                </nav>
            </MediaQuery>
            <MediaQuery maxWidth={550}>
                <div className={`menu ${open ? 'open' : null}`}>

                </div>
            </MediaQuery>
        </header>
     );
}
 
export default Header;