import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Link, withRouter } from 'react-router-dom';

import MenuButton from '../menu-button/menu-button.component';

import logo from '../../assets/LOGO.jpg';
import './header.styles.scss';

const NAV = ['home', 'about', 'services', 'contact'];

const Header = ({ location }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname])

    return ( 
        <header className='fixed bg-white-80 w-100 ph3 pv2 pv2-ns ph4-m ph5-l flex items-center justify-between'>
            <MediaQuery maxWidth={550}>
                <div className={`drop-menu ${open ? 'open' : 'close'}`}>
                    <nav className='fw6 ttu tracked flex flex-column items-end f3'>
                        {
                            NAV &&
                            NAV.map((nav, i) => (
                                <Link 
                                    key={nav}
                                    className={`
                                        ttc no-underline black dib nav-item mr3 mb2
                                        ${open ? 'show-nav' : null}
                                    `} 
                                    to={`/${nav}`} 
                                    title={nav}
                                >
                                    {nav}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </MediaQuery>
            <Link to='/' className='z-5'>
                <img className='w3' src={logo} alt='logo' />
            </Link>
            <MediaQuery maxWidth={550}>
                <div className='w-10'>
                    <MenuButton showMenu={open} onClick={()=>setOpen(!open)} />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={551}>
                <nav className='fw6 ttu tracked f5 f4-l'>
                    {
                        NAV &&
                        NAV.map((nav, i) => (
                            <Link 
                                key={nav}
                                className={`
                                    ttc link dim black dib nav-item
                                    ${i === NAV.length - 1 ? null : 'mr3'}
                                `} 
                                to={`/${nav}`} 
                                title={nav}
                            >
                                {nav}
                            </Link>
                        ))
                    }
                </nav>
            </MediaQuery>
        </header>
     );
}
 
export default withRouter(Header);