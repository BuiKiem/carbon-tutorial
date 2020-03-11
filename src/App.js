import React, { Component } from 'react';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/es/components/UIShell';
import TutorialHeader from './components/TutorialHeader';

import './App.scss';

const App = () => {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
};

export default App;
