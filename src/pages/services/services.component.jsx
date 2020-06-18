import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ServicesOverview from '../services-overview/services-overview.component';

const Services = ({ match }) => (
    <Switch>
        <Route exact path={match.path} component={ServicesOverview} />
        {/* <Route path={`${match.path}/licensing`} component={ServicesOverview} /> */}
        {/* <Route path={`${match.path}/interior-design`} component={Language} /> */}
        {/* <Route path={`${match.path}/e&m-design`} component={Language} /> */}
        {/* <Route path={`${match.path}/project-management`} component={Language} /> */}
        {/* <Route path={`${match.path}/other`} component={Language} /> */}
        <Redirect to={match.path} />
    </Switch>
)
 
export default Services;