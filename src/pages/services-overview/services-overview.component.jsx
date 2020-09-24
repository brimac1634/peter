import React from 'react';
import { useTranslation } from 'react-i18next'; 

import FlatButton from '../../components/flat-button/flat-button.component';
import FloorImage from '../../components/floor-image/floor-image.component';
import CanvasContainer from '../../components/canvas-container/canvas-container.component';

import SERVICES from '../service-details/service-details.data';

import './services-overview.styles.scss';

const Services = ({ history, match }) => {
    const { t } = useTranslation();
    return ( 
        <div className='w-100 min-vh-100'>
            <div className='fixed top-0 left-0 w-100 vh-100 bg-near-black' style={{zIndex: -1}}>
                <CanvasContainer color='rgb(148,189,94, 0.4)' />
            </div>
            <section className='db w-100 min-vh-100 flex items-center pa4 pa6-ns relative'>
                <div className='flex flex-column z-1'>
                    <h1 className='f2 f1-l lh-title jura near-white fw4'>
                        {t('SERVICES.OUR SERVICES')}
                    </h1>
                </div>
            </section>
            <section className='w-100 pt5 pb6'>
                {
                    SERVICES &&
                    Object.keys(SERVICES).map(key => SERVICES[key]).map(({ title, detail, url, sections }, i) => (
                        <section className='w-100 bg-near-white mv5' key={i}>
                            <div className="w-100 w-40-ns pv2 ph4 bg-dark-gray">
                                <h1 className='f3 f2-ns ttc lh-copy near-white jura fw7'>{t(`SERVICES.${title}`)}</h1>
                            </div>
                            <div className='db flex-ns'>
                                <FloorImage className='dn db-ns w-40 bg-custom-green' />
                                <div className='w-60-ns'>
                                    <ul className='list pa0 mb0 mt4'>
                                        {
                                            detail &&
                                            detail.map((detail, i) => (
                                                <li key={i} className="ttc lh-copy pv3 tc f4 f3-ns relative mv2">
                                                    <div className='cross-line bg-custom-green'/>
                                                    <span className='absolute-item nowrap bg-near-white ph2'>{t(`SERVICES.${detail}`)}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className='mb3 mt4 flex justify-center pb4'>
                                        <FlatButton type='button' onClick={() => history.push(`${match.path}/${url}`)} >
                                            {t('HOME.SEE MORE')}
                                        </FlatButton>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </section>
        </div>
     );
}
 
export default Services;