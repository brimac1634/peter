import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next'; 

import CustomButton from '../../components/custom-button/custom-button.component';
import ContactPanel from '../../components/contact-panel/contact-panel.component';
import PageBottom from '../../components/page-bottom/page-bottom.component';
import { ReactComponent as LogoApart } from '../../assets/logo-apart.svg';

import SERVICE_DATA from './service-details.data';

const ServiceDetails = ({ match, history }) => {
    const { t, i18n } = useTranslation();
    const service = useMemo(() => SERVICE_DATA[match.params.service], [match.params]);
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden'>
            {
                service &&
                <section className='w-100 min-vh-100 flex items-center pa4 pa6-ns'>
                    <div className='flex flex-column'>
                        <h1 className="f2 f1-l lh-title avenir fw4 ttc">
                            {t(`SERVICES.${service.title}`)}
                        </h1>
                    </div>
                </section>
            }
            {
                service &&
                service.sections.map(({ title, items }) => (
                    <section className='w-100 mb6-ns mb5' key={title}>
                        <div className="ph2 pv1 ph3-ns">
                            <h1 className='f4 tc lh-copy ttc avenir'>{t(`SERVICE DETAILS.${title}`)}</h1>
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
                    <h1 className='f2 f1-l lh-title avenir fw4 mb1'>404</h1>
                    <span className='f5 mb4 fw5'>Page not found</span>
                    <CustomButton type='button' onClick={()=>history.push(`/${i18n.language}/`)}>{t('HEADER.home')}</CustomButton>
                </div>
            }
            <PageBottom className='bg-moon-gray'>
                <ContactPanel />
            </PageBottom>
        </div>
     );
}
 
export default ServiceDetails;