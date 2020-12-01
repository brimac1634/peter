import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Loader from '../../components/loader/loader.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';

const Home = lazy(() => import('../home/home.component'));
const About = lazy(() => import('../about/about.component'));
const Services = lazy(() => import('../services/services.component'));
const Contact = lazy(() => import('../contact/contact.component'));

const Content = ({ match }) => (
    <div>
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path={match.path} component={Home} />
                    <Route exact path={`${match.path}/about`} component={About} />
                    <Route path={`${match.path}/services`} component={Services} />
                    <Route path={`${match.path}/contact`} component={Contact} />
                    <Redirect to={match.path} />
                </Switch>
            </Suspense>
        </ErrorBoundary>
        <Header />
        <Footer />
    </div>
)
 
export default Content;