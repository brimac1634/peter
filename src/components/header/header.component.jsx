import React, { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import MenuButton from '../menu-button/menu-button.component';

import { useScrollY } from '../../utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';


const Header = ({ match, history, location }) => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const scrollY = useScrollY();

    const isHome = useMemo(() => location.pathname.slice(3, location.pathname.length) === '', [location]);

    useEffect(() => {
        setShow(scrollY >= window.innerHeight - 100)
    }, [setShow, scrollY])

    return ( 
        <header className={`header fixed z-max top-0 left-0 w-100 ph3 pv2 pv2-ns ph4-m ph5-l flex items-center justify-between ${(show || !isHome) ? 'opaque' : null}`}>
            {
                (show || !isHome) &&
                <div className='absolute top-0 left-0 w-100 h-100' style={{backdropFilter: 'blur(2px)'}} />
            }
            <div 
                onClick={() => {
                    history.push(match.path);
                    setOpen(false);
                }}  
                className={`logo z-5 pointer ${(show || !isHome) ? 'show' : null}`}
            >
                <Logo className='w3 h3' />
            </div>
            <div className='flex items-center flex-end'>
                <span className='menu-label mr2 silver f6'>{t('HEADER.MENU')}</span>
                <div className='w2 h2'>
                    <MenuButton open={open} setOpen={setOpen} />
                </div>
            </div>
        </header>
     );
}
 
export default withRouter(Header);