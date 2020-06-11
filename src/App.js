import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Loader from './components/loader/loader.component';
import Home from './pages/home/home.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.css';

const App = () => (
  <div className='App'>
    <Header />
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/about' component={BeASidekick} /> */}
            <Redirect to='/' />
        </Switch>
      </Suspense>
    </ErrorBoundary>
    <Footer />
  </div>
);

export default App;
