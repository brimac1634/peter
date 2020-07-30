import React, { useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const Footer = ({ history, location }) => {
    const { t, i18n } = useTranslation();
    const isEnglish = useMemo(() => i18n.language === 'en', [i18n.language]);
    return ( 
        <footer className='pv4 ph3 ph5-m ph6-l black bg-custom-yellow'>
            <small className='f6 db tc'>© {new Date().getFullYear().toString()} <b className='ttu'>{t('FOOTER.Peter Ip & Associates Limited')}</b>{t('FOOTER., All Rights Reserved')}</small>
            <div className='tc mt3'>
                <span 
                    className='f6 dib ph2 link black dim pointer'
                    onClick={() => {
                        const page = location.pathname.slice(3, location.pathname.length);
                        history.push(`/${isEnglish ? 'zh' : 'en'}${page}`)
                    }}
                >
                    {isEnglish ? '中' : 'english'}
                </span>
                <a 
                    className='f6 dib ph2 link black dim'
                    href='mailto:peteripadm@gmail.com' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    admin@peterip.associates
                </a>
                <a className='f6 dib ph2 link black dim' href='tel:+852-3954-5730'>+852-5173-7769</a>
            </div>
        </footer>
    )
}
 
export default withRouter(Footer);