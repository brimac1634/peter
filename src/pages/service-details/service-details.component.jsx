import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next'; 

import { ReactComponent as LogoApart } from '../../assets/logo-apart.svg';

import SERVICE_DATA from './service-details.data';

const ServiceDetails = ({ match }) => {
    const { t } = useTranslation();
    const service = useMemo(() => SERVICE_DATA[match.params.service], [match.params]);
    console.log(service);
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden'>
            {/* {
                service &&

            } */}
            {
                !service &&
                <div className='center flex flex-column items-center vh-100'>
                    <LogoApart className='w4 h4 mt6' />
                    <h1 className='f2 f1-l lh-title avenir fw4'>404</h1>
                    <span>Page not found</span>
                </div>
            }
        </div>
     );
}
 
export default ServiceDetails;