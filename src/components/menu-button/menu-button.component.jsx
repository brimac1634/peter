import React, { useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import './menu-button.styles.scss'

const NAV = ['home', 'about', 'services', 'contact'];

const MenuButton = ({ location, history, match, open, setOpen }) => {
	const { t, i18n } = useTranslation();

	const isEnglish = useMemo(() => i18n.language === 'en', [i18n.language]);
	
	const handleNav = nav => {
        history.push(nav)
        setOpen(false);
    }

	return (
		<div className='w-100 h-100'>
			<div className={`drop-menu ${open ? 'open' : null}`}>
				<nav className='fw6 ttu tracked flex flex-column items-end f3 ph3 ph5-l ph4-m'>
					{
						NAV &&
						NAV.map((nav, i) => (
							<span 
								key={nav}
								className={`
									ttc no-underline black dib nav-item mb3 pointer f3 f1-ns
									${open ? 'show-nav' : null}
								`} 
								onClick={() => handleNav(`${match.url}/${nav}`)} 
								title={nav}
							>
								{t(`HEADER.${nav}`)}
							</span>
						))
					}
					<span 
						className={`
							f6 f5-ns fw6 ttc no-underline black dib nav-item mv3 pointer
							${open ? 'show-nav' : null}
						`} 
						onClick={() => {
							const page = location.pathname.slice(3, location.pathname.length);
							history.push(`/${isEnglish ? 'zh' : 'en'}${page}`)
						}}
					>
						{isEnglish ? '中文' : 'ENGLISH'}
					</span>
				</nav>
			</div>
			<div 
				className={`menu ${open ? 'close' : null}`}
				onClick={()=>setOpen(!open)}
			>
				<div className='menu-button' >
					<div className='menu-lines'>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(MenuButton);