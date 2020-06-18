import React from 'react';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import './home.styles.scss';

const Home = ({ match }) => {
    const { t } = useTranslation();
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden'>
            <section className='w-100 min-vh-100 flex items-center pa4 pa6-ns'>
                <div className='hovering flex flex-column'>
                    <h1 className="f2 f1-l lh-title avenir fw4">
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
            </section>
        </div>
     );
}
 
export default Home;