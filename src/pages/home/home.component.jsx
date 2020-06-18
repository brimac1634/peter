import React from 'react';
import { useTranslation } from 'react-i18next'; 

import './home.styles.scss';

const Home = () => {
    const { t } = useTranslation();
    return ( 
        <div className='w-100 min-vh-100'>
            {/* <div className='gradient w-50 vh-100 absolute top-0 right-0 z-0' /> */}
            <section className='w-100 min-vh-100 flex items-center pa4'>
                <div className='flex flex-column'>
                    <h1 className="f2 f1-l lh-title avenir fw4">
                        {t('HOME.PETER IP &')}<br/>{t('HOME.ASSOCIATES')}<br/>{t('HOME.LIMITED')}
                    </h1>
                    <span className='f4'>{t('HOME.-Since 2011')}</span>
                </div>
            </section>
        </div>
     );
}
 
export default Home;