import React from 'react';
import { useTranslation } from 'react-i18next'; 

import IconCircle from '../../components/icon-circle/icon-circle.component';

import SERVICES from './services-overview.data';

import './services-overview.styles.scss';

const Services = ({ history, match }) => {
    const { t } = useTranslation();
    console.log(match.path)
    return ( 
        <div className='w-100 min-vh-100'>
            <section className='w-100 min-vh-100 flex items-center pa4'>
                <div className='flex flex-column'>
                    <h1 className='f2 f1-l lh-title avenir fw4'>
                        {t('SERVICES.OUR SERVICES')}
                    </h1>
                </div>
            </section>
            <section className='w-100 mb6 flex-ns flex-wrap-ns justify-center-ns'>
                {
                    SERVICES &&
                    SERVICES.map(({ title, icon, url }, i) => (
                        <article 
                            key={i} 
                            className='w5-ns ma4 bg-white br3 pa3 pa4-ns ba b--black-10 shadow-4 pointer'
                            onClick={() => history.push(`${match.path}/${url}`)}
                        >
                            <div className='tc'>
                                <IconCircle>
                                    <img src={require(`../../assets/${icon}`)} alt={title} />
                                </IconCircle>
                                <h1 className='f3 mb2 ttc'>{title}</h1>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
     );
}
 
export default Services;