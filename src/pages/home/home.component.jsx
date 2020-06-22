import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import Arrow from '../../components/arrow/arrow.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './home.styles.scss';

const Home = ({ match }) => {
    const { t } = useTranslation();
    return ( 
        <div className='home-hero vw-100 min-vh-100 overflow-hidden'>
            <section className='w-100 min-vh-100 flex flex-column justify-center items-center pa4 pa6-ns relative'>
                <Logo className='w4 h4' />
                <div className='hovering flex flex-column'>
                    <h1 className="f2 f1-l lh-title avenir fw4 tc">
                        {t('HOME.PETER IP &')}<br/>{t('HOME.ASSOCIATES')}<br/>{t('HOME.LIMITED')}
                    </h1>
                    {/* <span className='f4'>{t('HOME.-Since 2011')}</span> */}
                    {/* <Link 
                        className="tc ttc mv4 f4 link dim ph3 pv2 dib white bg-near-black pointer"
                        to={`${match.path}/contact`} 
                    >
                        Contact
                    </Link> */}
                </div>
                <div className='absolute bottom-2 left-50 center'>
                    <Arrow />
                </div>
            </section>
        </div>
     );
}
 
export default Home;