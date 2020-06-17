import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import Content from '../content/content.component';

const Language = ({ match }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (match.params.language !== i18n.language) {
            i18n.changeLanguage(match.params.language);
        }
    }, [i18n, match.params])

    return ( 
        <Route path={match.path} component={Content} />
    );
}
 
export default Language;