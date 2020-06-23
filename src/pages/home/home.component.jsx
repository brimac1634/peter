import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import Arrow from '../../components/arrow/arrow.component';
import Enter from '../../components/enter/enter.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import HOME_LIST from './home.data';

import './home.styles.scss';

const Home = ({ match, history }) => {
    const { t } = useTranslation();
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden '>
            <section className='home-hero w-100 min-vh-100'>
                <div className='w-100 min-vh-100 flex flex-column justify-center items-center pa4 pa6-ns relative'>
                    <Logo className='w4 h4' />
                    <div className='hovering flex flex-column'>
                        <h1 className="f2 f1-l lh-title avenir fw4 tc">
                            {t('HOME.PETER IP &')}<br/>{t('HOME.ASSOCIATES')}<br/>{t('HOME.LIMITED')}
                        </h1>
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
                </div>
            </section>
            <section className='slanted w-100 mb5 bg-near-black'>
                <div className="pa3 pa4-ns">
                    <h1 className='f2 f1-ns tc lh-copy white avenir'>{t('HOME.Hong Kongs F&B')}<br/>{t('HOME.consultancy group')}</h1>
                </div>
            </section>
            <section className='w-100 mb6 cf ph2-ns'>
                {
                    HOME_LIST &&
                    HOME_LIST.map(({ title, items }, i) => (
                        <Enter enterStyle={i % 2 ? 'fade-left' : 'fade-right'} key={title} className='fl w-50-ns ma0'>
                            <div className='fl w-100 pa4'>
                                <article  
                                    className='card w6-ns ma4s bg-white br3 pa3 pa4-ns ba b--black-10 pointer'
                                    onClick={() => history.push(`${match.path}/${title}`)}
                                >
                                    <h1 className='f3 mb2 ttc bb b--custom-yellow avenir pv1 bw1'>{t(`HEADER.${title}`)}</h1>
                                    <ul className='list flex flex-wrap items-center pa0'>
                                        {
                                            items &&
                                            items.map((item, i) => (
                                                <li key={i} className="ttc lh-copy fl w-50 pa2 tc">
                                                    <span className='fw9'>- </span>
                                                    {t(`${title.toUpperCase()}.${item}`)}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <span className='silver tcu tc center db'>{t('HOME.SEE MORE')} {'>'}</span>
                                </article>
                            </div>
                        </Enter>
                    ))
                }
            </section>
        </div>
     );
}
 
export default Home;