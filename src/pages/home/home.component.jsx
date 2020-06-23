import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import Arrow from '../../components/arrow/arrow.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import HOME_LIST from './home.data';

import './home.styles.scss';

const Home = ({ match, history }) => {
    const { t } = useTranslation();
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden '>
            <section className='home-hero w-100 min-vh-100 flex flex-column justify-center items-center pa4 pa6-ns relative'>
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
            <section className='slanted w-100 mb6 bg-near-black mt6'>
                <div className="pa3 pa4-ns">
                    <h1 className='f2 f1-ns tc lh-copy white avenir'>Hong Kong's F&B<br/> consultancy group</h1>
                </div>
            </section>
            <section className='w-100 mb6 flex-ns justify-around-ns'>
                {
                    HOME_LIST &&
                    HOME_LIST.map(({ title, items }) => (
                        <article  
                            className='card w6-ns ma4 bg-white br3 pa3 pa4-ns ba b--black-10 pointer'
                            onClick={() => history.push(`${match.path}/${title}`)}
                        >
                            <h1 className='f3 mb2 ttc bb b--custom-yellow avenir pv1 bw1'>{t(`HEADER.${title}`)}</h1>
                            <ul className='list cf center pa0'>
                                {
                                    items &&
                                    items.map((item, i) => (
                                        <li key={i} className="ttc lh-copy fl w-50 pa2 tc">{t(`${title.toUpperCase()}.${item}`)}</li>
                                    ))
                                }
                            </ul>
                        </article>
                    ))
                }
            </section>
        </div>
     );
}
 
export default Home;