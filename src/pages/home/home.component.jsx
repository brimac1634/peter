import React from 'react';
import { useTranslation } from 'react-i18next'; 

import Arrow from '../../components/arrow/arrow.component';
import ContactPanel from '../../components/contact-panel/contact-panel.component';
import FlatButton from '../../components/flat-button/flat-button.component';
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
                        <h1 className="f2 f1-l lh-title jura fw4 tc white">
                            {t('HOME.PETER IP &')}<br/>{t('HOME.ASSOCIATES')}<br/>{t('HOME.LIMITED')}
                        </h1>
                    </div>
                    <div className='absolute bottom-2 left-50 center'>
                        <Arrow />
                    </div>
                </div>
            </section>
            <section className='w-100 mt5 mb5 bg-near-black'>
                <div className="w-100 w-30-ns pv3 ph4 bg-dark-gray">
                    <h1 className='f3 f2-ns ttc lh-copy white jura fw7'>{t('HOME.Hong Kongs F&B')}<br/>{t('HOME.consultancy group')}</h1>
                </div>
                <div className='w-100 pb4'>
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
                </div>
            </section>
            <section className='w-100'>
                {
                    HOME_LIST &&
                    HOME_LIST.map(({ title, items }, i) => (
                        <section className='w-100 mt5 mb5 bg-near-white' key={i}>
                            <div className="w-100 w-30-ns pv3 ph4 bg-dark-gray">
                                <h1 className='f3 f2-ns ttc lh-copy white jura fw7'>{t(`HEADER.${title}`)}</h1>
                            </div>
                            <div className='db flex-ns'>
                                <div className='dn db-ns w-30 bg-custom-green'/>
                                <div className='w-70-ns'>
                                    <ul className='list pa0 mb0 mt4'>
                                        {
                                            items &&
                                            items.map((item, i) => (
                                                <li key={i} className="ttc lh-copy pv3 tc f4 f3-ns relative mv2">
                                                    <div className='cross-line bg-custom-green'/>
                                                    <span className='absolute-item nowrap bg-near-white ph2'>{t(`${title.toUpperCase()}.${item}`)}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className='mb3 mt4 flex justify-center pb4'>
                                        <FlatButton type='button' onClick={() => history.push(`${match.path}/${title}`)} >
                                            {t('HOME.SEE MORE')}
                                        </FlatButton>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </section>
            <PageBottom className='bg-dark-gray'>
                <ContactPanel />
            </PageBottom>
        </div>
     );
}
 
export default Home;