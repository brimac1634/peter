import React from 'react';
import { useTranslation } from 'react-i18next'; 

import Arrow from '../../components/arrow/arrow.component';
import Enter from '../../components/enter/enter.component';
import ImageItem from '../../components/image-item/image-item.component';
import ContactPanel from '../../components/contact-panel/contact-panel.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import PageBottom from '../../components/page-bottom/page-bottom.component';
import CanvasContainer from '../../components/canvas-container/canvas-container.component';
import Carousel from '../../components/carousel/carousel.component';
import ProgressivePhoto from '../../components/progressive-photo/progressive-photo.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import HOME_LIST from './home.data';

import picture1 from '../../assets/Picture 1.png';
import picture2 from '../../assets/Picture 2.png';
import picture3 from '../../assets/Picture 3.png';
import picture4 from '../../assets/Picture 4.png';
import './home.styles.scss';

const Home = ({ match, history }) => {
    const { t } = useTranslation();
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden '>
            <div className='fixed top-0 left-0 w-100 vh-100 bg-mid-gray' style={{zIndex: -1}}>
                <CanvasContainer />
            </div>
            <section className='w-100 min-vh-100 relative'>
                <div className='w-100 min-vh-100 flex flex-column justify-center items-center pa4 pa6-ns relative'>
                    <Logo className='w4 h4' />
                    <div className='flex flex-column'>
                        <h1 className="f2 f1-l lh-title avenir fw4 tc white">
                            {t('HOME.PETER IP &')}<br/>{t('HOME.ASSOCIATES')}<br/>{t('HOME.LIMITED')}
                        </h1>
                    </div>
                    <div className='absolute bottom-2 left-50 center'>
                        <Arrow />
                    </div>
                </div>
            </section>
            <section className='w-100 mt5 mb5 bg-near-black pb4'>
                <div className="w-80 w-40-ns pa3 bg-dark-gray">
                    <h1 className='f3 tc ttc lh-copy white avenir fw4'>{t('HOME.Hong Kongs F&B')}<br/>{t('HOME.consultancy group')}</h1>
                </div>
                <Carousel showIndicator>
                    <ProgressivePhoto 
                        className='carousel-photo' 
                        src={picture1} 
                        // overlay={banner1Overlay} 
                        alt='banner' 
                    />
                    <ProgressivePhoto 
                        className='carousel-photo' 
                        src={picture2} 
                        // overlay={banner1Overlay} 
                        alt='banner' 
                    />
                    <ProgressivePhoto 
                        className='carousel-photo' 
                        src={picture3} 
                        // overlay={banner1Overlay} 
                        alt='banner' 
                    />
                    <ProgressivePhoto 
                        className='carousel-photo' 
                        src={picture4} 
                        // overlay={banner1Overlay} 
                        alt='banner' 
                    />
                </Carousel>
            </section>
            <section className='w-100 min-vh-100 vh-75-ns cf ph2-ns flex justify-center items-center'>
                <div className='center flex-ns'>
                    {
                        HOME_LIST &&
                        HOME_LIST.map(({ title, items, icon }, i) => (
                            <Enter enterStyle={i % 2 ? 'fade-left' : 'fade-right'} key={title} className='w-50-ns ma0'>
                                <section className='w-100 mt5 mb5 bg-near-black'>
                                    <div className="w-80 w-40-ns pa3 bg-dark-gray">
                                        <h1 className='f3 tc ttc lh-copy white avenir fw3'>{t(`HEADER.${title}`)}</h1>
                                    </div>
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
                                    <CustomButton className='center db mt3' type='button' onClick={() => history.push(`${match.path}/${title}`)} >
                                        {t('HOME.SEE MORE')}
                                    </CustomButton>
                                </section>
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