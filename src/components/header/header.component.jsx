import React, { useState, useEffect, useMemo } from 'react';
import MediaQuery from 'react-responsive';
import { Link, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import MenuButton from '../menu-button/menu-button.component';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const NAV = ['home', 'about', 'services', 'contact'];

const Header = ({ location, match, history }) => {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const isEnglish = useMemo(() => i18n.language === 'en', [i18n.language]);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname])

    return ( 
        <header className='fixed top-0 left-0 bg-white w-100 ph3 pv2 pv2-ns ph4-m ph5-l flex items-center justify-between'>
            <MediaQuery maxWidth={550}>
                <div className={`drop-menu ${open ? 'open' : 'close'}`}>
                    <nav className='fw6 ttu tracked flex flex-column items-end f3'>
                        {
                            NAV &&
                            NAV.map((nav, i) => (
                                <Link 
                                    key={nav}
                                    className={`
                                        ttc no-underline black dib nav-item mr4 mb3
                                        ${open ? 'show-nav' : null}
                                    `} 
                                    to={`${match.url}/${nav}`} 
                                    title={nav}
                                >
                                    {t(nav)}
                                </Link>
                            ))
                        }
                        <span 
                            className={`
                                ttc no-underline black dib nav-item mr4 mb3
                                ${open ? 'show-nav' : null}
                            `} 
                            onClick={() => {
                                const page = location.pathname.slice(3, location.pathname.length);
                                history.push(`/${isEnglish ? 'zh' : 'en'}${page}`)
                            }}
                        >
                            {isEnglish ? '中' : 'English'}
                        </span>
                    </nav>
                </div>
            </MediaQuery>
            <Link to='/' className='z-5'>
                <Logo className='w3 h3' />
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