import React from 'react';
import { useTranslation } from 'react-i18next'; 

import IconCircle from '../../components/icon-circle/icon-circle.component';
import PageBottom from '../../components/page-bottom/page-bottom.component';
import CanvasContainer from '../../components/canvas-container/canvas-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { ReactComponent as QualificationIcon } from '../../assets/curriculum.svg'
import { ReactComponent as StructureIcon } from '../../assets/tie.svg'
import { ReactComponent as ExperienceIcon } from '../../assets/portfolio.svg'

import { TEAMS, SHOP_TYPES, QUALIFICATIONS } from './about.data';

import './about.styles.scss';

const About = ({ match, history }) => {
    const { t } = useTranslation();
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden'>
            <section className='w-100 min-vh-100 flex items-center pa4 pa6-ns bg-near-black'>
                <CanvasContainer />
                <div className='flex flex-column'>
                    <h1 className="f2 f1-l lh-title avenir fw4 white">
                        {t('ABOUT.ABOUT US')}
                    </h1>
                    <span className='f4 white'>{t('ABOUT.since 2011')}</span>
                </div>
            </section>
            <section className='slanted w-100 mb6 bg-moon-gray'>
                <div className="pa3 pa4-ns">
                    <h1 className='f2 tc lh-copy avenir ttu'>{t('ABOUT.who are we')}</h1>
                    <p className="tc f4 lh-copy measure center avenir">
                        Peter Ip & Associates Limited is a multi-discipline consultancy company providing full professional services for
                        the F&B industry. Established by Mr. Peter Ip, the ex-senior catering expert from Café de Coral Holdings
                        Limited, we serve our clients who would like to setup and operate their F&B shops including restaurants,
                        fast-food shops, factories, hotels, etc.
                    </p>
                </div>
            </section>
            <section className='w-100 mb6-ns mb5'>
                <IconCircle className='w4 h4'>
                    <ExperienceIcon />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='f2 tc lh-copy ttc avenir'>{t('ABOUT.experience')}</h1>
                    <p className='tc f4'>Our team is well-experienced in dealing<br/> with various types of F&B shops...</p>
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
            <section className='w-100 mb6-ns mb5 bg-near-black pv4'>
                <IconCircle className='w4 h4 b--white'>
                    <StructureIcon fill={'#ffffff'} />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='white f2 tc lh-copy ttc avenir'>{t('ABOUT.organization structure')}</h1>
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
                <IconCircle className='w4 h4'>
                    <QualificationIcon />
                </IconCircle>
                <div className="ph2 pv1 ph3-ns">
                    <h1 className='f2 tc lh-copy ttc avenir'>{t('ABOUT.professional qualifications')}</h1>
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
            <PageBottom className='bg-moon-gray flex flex-column items-center'>
                <span className='tc fw6 f3 f2-ns center db near-black'>{t('ABOUT.we have a diverse')}</span>
                <span className='tc fw6 f3 f2-ns center db mb4 near-black'>{t('ABOUT.range of expertise')}</span>
                <CustomButton 
                    type='button' 
                    onClick={()=>history.push(`${match.url.slice(0,3)}/services`)}
                >
                    {t('HEADER.services')}
                </CustomButton>
            </PageBottom>
        </div>
     );
}
 
export default About;