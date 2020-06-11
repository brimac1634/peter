import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Loader from './components/loader/loader.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Services from './pages/services/services.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Redirect to='/' />
        </Switch>
      </Suspense>
    </ErrorBoundary>
    <Footer />
  </div>
);

export default App;
