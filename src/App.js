import React, { Component } from 'react';
import { Content } from 'carbon-components-react/es/components/UIShell';
import { Route, Switch } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './pages/LandingPage';
import RepoPage from './pages/RepoPage';

import './App.scss';

const App = () => {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </Content>
    </>
  );
};

export default App;
