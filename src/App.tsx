import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Providers from './hooks';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <Providers>
        <Routes />
        <GlobalStyles />
      </Providers>
    </Router>
  );
};

export default App;
