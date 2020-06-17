import React from 'react';
import { useTranslation } from 'react-i18next'; 

import IconCircle from '../../components/icon-circle/icon-circle.component';
import { ReactComponent as QualificationIcon } from '../../assets/curriculum.svg'
import { ReactComponent as StructureIcon } from '../../assets/tie.svg'
import { ReactComponent as ExperienceIcon } from '../../assets/portfolio.svg'

import { TEAMS, SHOP_TYPES, QUALIFICATIONS } from './about.data';

const About = () => {
    const { t } = useTranslation();
    return ( 
        <div className='w-100 min-vh-100'>
            <section className='w-100 min-vh-100 flex items-center pa4'>
                <div className='flex flex-column'>
                    <h1 className="f2 f1-l lh-title avenir fw4">
                        {t('ABOUT US')}
                    </h1>
                    <span className='f4'>"We come from one of the biggest</span>
                    <span className='f4'>F&B companies in Hong Kong"</span>
                </div>
                
            </section>
            <section className='w-100 mb6 bg-moon-gray'>
                <div className="pa3 pa4-ns">
                    <h1 className='f2 tc lh-copy'>Who Are We</h1>
                    <p className="tc f4 lh-copy measure">
                        Peter Ip & Associates Limited is a multi-discipline consultancy company providing full professional services for
                        the F&B industry. Established by Mr. Peter Ip, the ex-senior catering expert from Café de Coral Holdings
                        Limited, we serve our clients who would like to setup and operate their F&B shops including restaurants,
                        fast-food shops, factories, hotels, etc.
                    </p>
                </div>
            </section>
            <section className='w-100 mb6'>
                <IconCircle>
                    <ExperienceIcon style={{width: '100%'}} />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='f2 tc lh-copy'>Experience</h1>
                    <p className='tc f4'>Our team is well-experienced in dealing<br/> with various types of F&B shops...</p>
                </div>
                <div className="ph3 ph4-ns">
                    <ul className="list pl0 measure center">
                        {
                            SHOP_TYPES &&
                            SHOP_TYPES.map(type => (
                                <li key={type} className="ttc lh-copy pa3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{type}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className='w-100 mb6'>
                <IconCircle>
                    <StructureIcon style={{width: '100%'}} />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='f2 tc lh-copy'>Organization Structure</h1>
                </div>
                <ul className="list ph3 ph4-ns">
                    {
                        TEAMS &&
                        TEAMS.map(({ title, details }, i) => (
                            <li key={i} className="pa3 pa4-ns bb b--black-10">
                                <b className="db f4 mb1">{title}</b>
                                <span className="f5 db lh-copy measure">
                                    {details}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className='w-100 mb6'>
                <IconCircle>
                    <QualificationIcon style={{width: '100%'}} />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='f2 tc lh-copy'>Professional Qualifications</h1>
                </div>
                <div className="ph3 ph4-ns">
                    <ul className="list pl0 measure center">
                        {
                            QUALIFICATIONS &&
                            QUALIFICATIONS.map((item, i) => (
                                <li key={i} className="ttc lh-copy pa3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
     );
}
 
export default About;