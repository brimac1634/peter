import React from 'react';
import { useTranslation } from 'react-i18next'; 

import IconCircle from '../icon-circle/icon-circle.component';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as MailIcon } from '../../assets/mail.svg'

const ContactPanel = ({ ...otherProps }) => {
    const { t } = useTranslation();
    return (
        <div {...otherProps}>
            <h1 className='f2 tc lh-copy ttc avenir mt0 mb1 near-black'>{t('HEADER.contact')}</h1>
            <span className='tc f5 center db mb4 near-black'>{t('HOME.For enquiries, please contact us')}:</span>
            <div className='flex flex-column flex-row-ns justify-center items-center mt2'>
                <a
                    className='flex flex-column items-center w-50 no-underline link mh3 mt3 mb4'
                    href='mailto:peteripadm@gmail.com' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <IconCircle className='w3 h3 w4-ns h4-ns card shadow-4' black>
                        <MailIcon />
                    </IconCircle>
                    <span className='mt3 fw6 f5 near-black db-ns nowrap'>admin@peterip.associates</span>
                </a>
                <a
                    className='flex flex-column items-center w-50 no-underline link mh3 mt3'
                    href='tel:+852-3954-5730'
                >
                    <IconCircle className='w3 h3 w4-ns h4-ns card shadow-4' black>
                        <PhoneIcon />
                    </IconCircle>
                    <span className='mt3 fw6 f5 near-black db-ns nowrap'>+852-5173-7769</span>
                </a>
            </div>
        </div>
    )
}
 
export default ContactPanel;