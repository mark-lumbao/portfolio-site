import React, {
  lazy, useState, Suspense, ComponentType,
} from 'react';
import {
  BrowserRouter, HashRouter, Switch, Route,
} from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import CenteredMessage from 'components/shared/centered-message';

const MainNavigation = lazy(() => import('components/main-navigation'));
const Footer = lazy(() => import('components/footer'));

const Home = lazy(() => import('components/home'));
const NotFound = lazy(() => import('components/not-found'));

const App = () => {
  /**
   * @TODO
   * Move theme functions to either react context or redux state
   */
  const initialThemeValue = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-light';
  const [theme, setTheme] = useState(initialThemeValue);

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'theme-light' ? 'theme-dark' : 'theme-light');
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  /**
   * This is a simple workaround for gh-pages BrowserRouter issue.
   * With this, I will only use Browser router when it is deployed in Heroku
   * where I can setup a server for it.
   */
  const Router: ComponentType = process.env.ENVIRONMENT === 'heroku' ? BrowserRouter : HashRouter;

  return (
    <div className={`${theme || 'theme-light'} transition duration-300 w-screen absolute top-0 bottom-0 flex flex-col bg-primary`}>
      <Suspense fallback={<CenteredMessage message="Loading Components ..." />}>
        <Router>
          <MainNavigation theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route path={ROUTES.HOME} exact component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
