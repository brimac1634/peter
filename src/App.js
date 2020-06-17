import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Footer from './components/footer/footer.component';
import Language from './pages/language/language.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Loader from './components/loader/loader.component';

import './App.scss';

const App = () => (
  <div className='App'>
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/:language' component={Language} />
          <Redirect to='/en' />
        </Switch>
      </Suspense>
    </ErrorBoundary>
    <Footer />
  </div>
);

export default App;
