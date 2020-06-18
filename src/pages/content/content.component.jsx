import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Home from '../home/home.component';
import About from '../about/about.component';
import Services from '../services/services.component';
import Loader from '../../components/loader/loader.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';

const Content = ({ match }) => (
    <div>
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path={match.path} component={Home} />
                    <Route exact path={`${match.path}/about`} component={About} />
                    <Route path={`${match.path}/services`} component={Services} />
                    <Redirect to={match.path} />
                </Switch>
            </Suspense>
        </ErrorBoundary>
        <Header />
        <Footer />
    </div>
)
 
export default Content;