import React, { useState, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import MenuButton from '../menu-button/menu-button.component';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const NAV = ['home', 'about', 'services', 'contact'];

const Header = ({ location, match, history }) => {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const isEnglish = useMemo(() => i18n.language === 'en', [i18n.language]);

    const handleNav = nav => {
        history.push(nav)
        setOpen(false);
    }

    return ( 
        <header className='fixed top-0 left-0 w-100 ph3 pv2 pv2-ns ph4-m ph5-l bg-white-90 flex items-center justify-between shadow-4'>
            <div className={`drop-menu ${open ? 'open' : 'close'}`}>
                <nav className='fw6 ttu tracked flex flex-column items-end f3'>
                    {
                        NAV &&
                        NAV.map((nav, i) => (
                            <span 
                                key={nav}
                                className={`
                                    ttc no-underline black dib nav-item mr4 mb3 pointer
                                    ${open ? 'show-nav' : null}
                                `} 
                                onClick={() => handleNav(`${match.url}/${nav}`)} 
                                title={nav}
                            >
                                {t(`HEADER.${nav}`)}
                            </span>
                        ))
                    }
                    <span 
                        className={`
                            f6 fw6 ttc no-underline black dib nav-item mr4 mv3 pointer
                            ${open ? 'show-nav' : null}
                        `} 
                        onClick={() => {
                            const page = location.pathname.slice(3, location.pathname.length);
                            history.push(`/${isEnglish ? 'zh' : 'en'}${page}`)
                        }}
                    >
                        {isEnglish ? '中' : 'ENGLISH'}
                    </span>
                </nav>
            </div>
            <div onClick={() => handleNav(match.path)}  className='z-5'>
                <Logo className='w3 h3' />
            </div>
            <div className='w2 h2'>
                <MenuButton showMenu={open} onClick={()=>setOpen(!open)} />
            </div>
        </header>
     );
}
 
export default withRouter(Header);