import React from 'react';
import { useTranslation } from 'react-i18next'; 

import ImageItem from '../../components/image-item/image-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import SERVICES from '../service-details/service-details.data';

import './services-overview.styles.scss';

const Services = ({ history, match }) => {
    const { t } = useTranslation();
    return ( 
        <div className='w-100 min-vh-100 bg-near-black'>
            <section className='db w-100 min-vh-100 flex items-center pa4 pa6-ns relative'>
                <div className='service-hero absolute top-0 left-0 w-100 h-100 z--1'/>
                <div className='service-gradient absolute top-0 left-0 w-100 h-100' />
                <div className='flex flex-column z-1'>
                    <h1 className='f2 f1-l lh-title avenir near-white fw4'>
                        {t('SERVICES.OUR SERVICES')}
                    </h1>
                </div>
            </section>
            <section className='w-100 pt5 pb6 flex-ns flex-wrap-ns justify-center-ns'>
                {
                    SERVICES &&
                    Object.keys(SERVICES).map(key => SERVICES[key]).map(({ title, detail, url, sections }, i) => (
                        <div className='pa4 w-30-ns' key={i}>
                            <ImageItem 
                                title={t(`SERVICES.${title}`)}
                                onClick={() => history.push(`${match.path}/${url}`)}
                            >
                                <div>
                                    <ul className='list pa0 mv0 flex flex-column items-center relative'>
                                        {
                                            detail &&
                                            detail.map((detail, i) => (
                                                <li key={i} className="ttc lh-copy mb2 tc f5">
                                                    {t(`SERVICES.${detail}`)}
                                                </li>
                                            ))
                                        }
                                        <div className='white-gradient absolute bottom-0 left-0 w-100 h-100'/>
                                    </ul>
                                    <CustomButton className='center db mt3' type='button' >
                                        {t('HOME.SEE MORE')}
                                    </CustomButton>
                                </div>
                            </ImageItem>
                        </div>
                    ))
                }
            </section>
        </div>
     );
}
 
export default Services;