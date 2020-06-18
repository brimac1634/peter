import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import Content from '../content/content.component';

const Language = ({ match }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const lang = match.path.slice(1, match.path.length);
        if (lang !== i18n.language) {
            i18n.changeLanguage(lang);
        }
    }, [i18n, match.path])

    return ( 
        <Route path={match.path} component={Content} />
    );
}
 
export default Language;