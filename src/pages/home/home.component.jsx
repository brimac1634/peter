import React from 'react';
import { useTranslation } from 'react-i18next'; 

import Arrow from '../../components/arrow/arrow.component';
import Enter from '../../components/enter/enter.component';
import ImageItem from '../../components/image-item/image-item.component';
import ContactPanel from '../../components/contact-panel/contact-panel.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import PageBottom from '../../components/page-bottom/page-bottom.component';
import CanvasContainer from '../../components/canvas-container/canvas-container.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import HOME_LIST from './home.data';

const Home = ({ match, history }) => {
    const { t } = useTranslation();
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden '>
            <section className='w-100 min-vh-100 relative'>
                <div className='absolute top-0 left-0 w-100 vh-100'>
                    <CanvasContainer />
                </div>
                <div className='w-100 min-vh-100 flex flex-column justify-center items-center pa4 pa6-ns relative'>
                    <Logo className='w4 h4' />
                    <div className='flex flex-column'>
                        <h1 className="f2 f1-l lh-title avenir fw4 tc near-black">
                            {t('HOME.PETER IP &')}<br/>{t('HOME.ASSOCIATES')}<br/>{t('HOME.LIMITED')}
                        </h1>
                    </div>
                    <div className='absolute bottom-2 left-50 center'>
                        <Arrow />
                    </div>
                </div>
            </section>
            <section className='slanted w-100 mt5 mb5 bg-near-black'>
                <div className="pa3 pa4-ns">
                    <h1 className='f2 f1-ns tc lh-copy white avenir'>{t('HOME.Hong Kongs F&B')}<br/>{t('HOME.consultancy group')}</h1>
                </div>
            </section>
            <section className='w-100 min-vh-100 vh-75-ns cf ph2-ns flex justify-center items-center'>
                <div className='center flex-ns'>
                    {
                        HOME_LIST &&
                        HOME_LIST.map(({ title, items, icon }, i) => (
                            <Enter enterStyle={i % 2 ? 'fade-left' : 'fade-right'} key={title} className='w-50-ns ma0'>
                                <div className='h-100 w-100 pa4'>
                                    <ImageItem 
                                        index={i} 
                                        title={t(`HEADER.${title}`)}
                                        onClick={() => history.push(`${match.path}/${title}`)}
                                    >
                                        <ul className='list flex flex-wrap items-center pa0 mv0'>
                                            {
                                                items &&
                                                items.map((item, i) => (
                                                    <li key={i} className="ttc lh-copy w-50 pa2 tc f5">
                                                        {t(`${title.toUpperCase()}.${item}`)}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <CustomButton className='center db mt3' type='button' >
                                            {t('HOME.SEE MORE')}
                                        </CustomButton>
                                    </ImageItem>
                                </div>
                            </Enter>
                        ))
                    }
                </div>
            </section>
            <PageBottom className='bg-moon-gray'>
                <ContactPanel />
            </PageBottom>
        </div>
     );
}
 
export default Home;