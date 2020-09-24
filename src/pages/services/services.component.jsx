import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ServicesOverview from '../services-overview/services-overview.component';
import ServiceDetails from '../service-details/service-details.component';

const Services = ({ match }) => (
    <Switch>
        <Route exact path={match.path} component={ServicesOverview} />
        <Route path={`${match.path}/:service`} component={ServiceDetails} />
        <Redirect to={match.path} />
    </Switch>
)
 
export default Services;