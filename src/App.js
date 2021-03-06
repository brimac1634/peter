import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Language from './pages/language/language.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Loader from './components/loader/loader.component';

import './App.scss';

const App = () => (
  <div className='App'>
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/en' component={Language} />
          <Route path='/zh' component={Language} />
          <Redirect to='/zh' />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default App;
