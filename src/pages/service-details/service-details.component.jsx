import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next'; 

import CustomButton from '../../components/custom-button/custom-button.component';
import ContactPanel from '../../components/contact-panel/contact-panel.component';
import PageBottom from '../../components/page-bottom/page-bottom.component';
import IconCircle from '../../components/icon-circle/icon-circle.component';
import Carousel from '../../components/carousel/carousel.component';
import ProgressivePhoto from '../../components/progressive-photo/progressive-photo.component';
import { ReactComponent as LogoApart } from '../../assets/logo-apart.svg';

import SERVICE_DATA from './service-details.data';

import picture1 from '../../assets/Picture 1.png';
import picture2 from '../../assets/Picture 2.png';
import picture3 from '../../assets/Picture 3.png';
import picture4 from '../../assets/Picture 4.png';

const ServiceDetails = ({ match, history }) => {
    const { t, i18n } = useTranslation();
    const service = useMemo(() => SERVICE_DATA[match.params.service], [match.params]);
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden bg-near-white'>
            {
                service &&
                <section className='w-100 min-vh-100 flex flex-column flex-row-ns items-center justify-center bg-dark-gray mb4'>
                    <div className="w-100 w-30-ns pv3 ph4 bg-dark-gray">
                        <h1 className='f3 f2-ns ttc tc lh-copy near-white jura fw7'>{t(`SERVICES.${service.title}`)}</h1>
                    </div>
                    <div className='w-100 w-70-ns pb3 pv4-ns bg-dark-gray'>
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
                // <section className='w-100 min-vh-100 flex items-center pa4 pa6-ns'>
                //     <div className='absolute top-0 left-0 w-100 h-100 bg-near-white'>
                //         <Carousel showIndicator>
                //             <ProgressivePhoto 
                //                 className='carousel-photo' 
                //                 src={picture1} 
                //                 // overlay={banner1Overlay} 
                //                 alt='banner' 
                //             />
                //             <ProgressivePhoto 
                //                 className='carousel-photo' 
                //                 src={picture2} 
                //                 // overlay={banner1Overlay} 
                //                 alt='banner' 
                //             />
                //             <ProgressivePhoto 
                //                 className='carousel-photo' 
                //                 src={picture3} 
                //                 // overlay={banner1Overlay} 
                //                 alt='banner' 
                //             />
                //             <ProgressivePhoto 
                //                 className='carousel-photo' 
                //                 src={picture4} 
                //                 // overlay={banner1Overlay} 
                //                 alt='banner' 
                //             />
                //         </Carousel>
                //     </div>
                //     <div className='flex flex-column z-5'>
                //         <h1 className="f2 f1-l lh-title jura fw4 ttc">
                //             {t(`SERVICES.${service.title}`)}
                //         </h1>
                //     </div>
                // </section>
            }
            {
                service &&
                service.sections.map(({ title, items }, i) => (
                    <section className='w-100 mb6-ns mb5' key={title}>
                        <IconCircle className='w4 h4 bg-dark-gray shadow-4 flex justify-center items-center'>
                            <span className='f1 tc custom-green'>{i}</span>
                        </IconCircle>
                        <div className="ph2 pv1 ph3-ns">
                            <h1 className='f4 tc lh-copy ttc jura'>{t(`SERVICE DETAILS.${title}`)}</h1>
                        </div>
                        <div className="ph3 ph4-ns">
                            <ul className="list pl0 measure center">
                                {
                                    items &&
                                    items.map((item, i) => (
                                        <li key={i} className="ttc lh-copy pa3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{t(`SERVICE DETAILS.${item}`)}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </section>
                ))
            }
            {
                !service &&
                <div className='center flex flex-column items-center vh-100'>
                    <LogoApart className='w4 h4 mt6' />
                    <h1 className='f2 f1-l lh-title jura fw4 mb1'>404</h1>
                    <span className='f5 mb4 fw5'>Page not found</span>
                    <CustomButton type='button' onClick={()=>history.push(`/${i18n.language}/`)}>{t('HEADER.home')}</CustomButton>
                </div>
            }
            <PageBottom className='bg-dark-gray'>
                <ContactPanel />
            </PageBottom>
        </div>
     );
}
 
export default ServiceDetails;