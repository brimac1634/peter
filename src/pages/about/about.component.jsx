import React from 'react';
import { useTranslation } from 'react-i18next'; 

import IconCircle from '../../components/icon-circle/icon-circle.component';
import PageBottom from '../../components/page-bottom/page-bottom.component';
import FlatButton from '../../components/flat-button/flat-button.component';
import Carousel from '../../components/carousel/carousel.component';
import ProgressivePhoto from '../../components/progressive-photo/progressive-photo.component';
import { ReactComponent as QualificationIcon } from '../../assets/curriculum.svg'
import { ReactComponent as StructureIcon } from '../../assets/tie.svg'
import { ReactComponent as ExperienceIcon } from '../../assets/portfolio.svg'

import { TEAMS, SHOP_TYPES, QUALIFICATIONS } from './about.data';

import picture1 from '../../assets/Picture 5.png';
import picture2 from '../../assets/Picture 6.png';
import picture3 from '../../assets/Picture 7.png';
import './about.styles.scss';

const About = ({ match, history }) => {
    const { t } = useTranslation();
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden'>
            <section className='w-100 min-vh-100 flex items-center pa4 pa6-ns relative'>
                <div className='about-hero absolute top-0 left-0 w-100 h-100 z--2'/>
                <div className='flex flex-column'>
                    <h1 className="f2 f1-l lh-title jura fw4 white">
                        {t('ABOUT.ABOUT US')}
                    </h1>
                </div>
            </section>
            <section className='slanted w-100 mb6 bg-dark-gray'>
                <div className="pv3 pv4-ns">
                    <div className='relative h3 pv3 mv2'>
                        <div className='cross-line bg-custom-green'/>
                        <div className='absolute-item'>
                            <h1 className='f3 f2-ns tc lh-copy jura ttu near-white fw7 bg-dark-gray ph3'>{t('ABOUT.who are we')}</h1>
                        </div>
                    </div>
                    <p className="ph3 ph4-ns tc f4 f3-ns lh-copy measure center jura near-white">
                        {t('ABOUT.description')}
                    </p>
                </div>
            </section>
            <section className='w-100 mb6-ns mb5 bg-near-black'>
                <div className='w-100 w-70-ns pv4 bg-near-black center'>
                    <Carousel showIndicator>
                        <ProgressivePhoto 
                            className='carousel-photo' 
                            src={picture2} 
                            // overlay={banner1Overlay} 
                            alt='banner' 
                        />
                        <ProgressivePhoto 
                            className='carousel-photo' 
                            src={picture1} 
                            // overlay={banner1Overlay} 
                            alt='banner' 
                        />
                        <ProgressivePhoto 
                            className='carousel-photo' 
                            src={picture3} 
                            // overlay={banner1Overlay} 
                            alt='banner' 
                        />
                    </Carousel>
                </div>
            </section>
            <section className='w-100 mb6-ns mb5'>
                <IconCircle className='w4 h4 bg-dark-gray shadow-4'>
                    <ExperienceIcon fill={`#94bd5e`} />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='f2 tc lh-copy ttc jura'>{t('ABOUT.experience')}</h1>
                    <p className='tc f4'>{t('ABOUT.our team 1')}<br/> {t('ABOUT.our team 2')}</p>
                </div>
                <div className="ph3 ph4-ns">
                    <ul className="list pl0 measure center">
                        {
                            SHOP_TYPES &&
                            SHOP_TYPES.map(type => (
                                <li key={type} className="ttc lh-copy pa3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{t(`ABOUT.SHOP_TYPES.${type}`)}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className='w-100 mb6-ns mb5 pv4 arch-back'>
                <IconCircle className='w4 h4 b--white'>
                    <StructureIcon fill={'#ffffff'} />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='white f2 tc lh-copy ttc jura'>{t('ABOUT.organization structure')}</h1>
                </div>
                <ul className="list ph3 ph4-ns measure center">
                    {
                        TEAMS &&
                        TEAMS.map(({ title, details }, i) => (
                            <li key={i} className="pa3 pa4-ns bb b--white-30">
                                <b className="db f4 mb1 white">{t(`ABOUT.TEAMS.${title}`)}</b>
                                <span className="f5 db lh-copy measure white">
                                    {t(`ABOUT.TEAMS.${details}`)}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className='w-100 mb6-ns mb5'>
                <IconCircle className='w4 h4 bg-dark-gray shadow-4'>
                    <QualificationIcon fill={`#94bd5e`} />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='f2 tc lh-copy ttc jura'>{t('ABOUT.professional qualifications')}</h1>
                </div>
                <div className="ph3 ph4-ns">
                    <ul className="list pl0 measure center">
                        {
                            QUALIFICATIONS &&
                            QUALIFICATIONS.map((item, i) => (
                                <li key={i} className="ttc lh-copy pa3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{t(`ABOUT.QUALIFICATIONS.${item}`)}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <PageBottom className='bg-moon-gray flex flex-column items-center pt3'>
                <span className='tc fw6 f3 f2-ns center db dark-gray'>{t('ABOUT.we have a diverse')}</span>
                <span className='tc fw6 f3 f2-ns center db mb4 dark-gray'>{t('ABOUT.range of expertise')}</span>
                <FlatButton 
                    type='button' 
                    onClick={()=>history.push(`${match.url.slice(0,3)}/services`)}
                >
                    {t('ABOUT.see services')}
                </FlatButton>
            </PageBottom>
        </div>
     );
}
 
export default About;