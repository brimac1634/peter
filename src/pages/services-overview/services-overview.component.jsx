import React from 'react';
import { useTranslation } from 'react-i18next'; 

import IconCircle from '../../components/icon-circle/icon-circle.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import SERVICES from '../service-details/service-details.data';

import './services-overview.styles.scss';

const Services = ({ history, match }) => {
    const { t } = useTranslation();
    return ( 
        <div className='w-100 min-vh-100'>
            <section className='db w-100 min-vh-100 flex items-center pa4 pa6-ns relative'>
                <div className='service-hero absolute top-0 left-0 w-100 h-100 z--1'/>
                <div className='absolute top-0 left-0 w-100 h-100 bg-custom-yellow o-50'/>
                <div className='flex flex-column z-1'>
                    <h1 className='f2 f1-l lh-title avenir near-black fw4'>
                        {t('SERVICES.OUR SERVICES')}
                    </h1>
                </div>
            </section>
            <section className='w-100 mb6 flex-ns flex-wrap-ns justify-center-ns'>
                {
                    SERVICES &&
                    Object.keys(SERVICES).map(key => SERVICES[key]).map(({ title, icon, url, sections }, i) => (
                        <article 
                            key={i} 
                            className='card w5-ns ma4 bg-white br3 pa3 ba b--black-10 pointer'
                            onClick={() => history.push(`${match.path}/${url}`)}
                        >
                            <div className='flex flex-column justify-between h-100'>
                                {/* <div className='w-100 h3' style={{backgroundImage: url(`../../assets/floor-${i}.jpg`)}}/> */}
                                <h1 className='f2 f3-ns mb2 ttc tc'>{t(`SERVICES.${title}`)}</h1>
                                <CustomButton className='center db mt4 bg-moon-gray' type='button' >
                                    {t('HOME.SEE MORE')}
                                </CustomButton>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
     );
}
 
export default Services;