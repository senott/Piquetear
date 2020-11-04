import React from 'react';
import { StatusBar } from 'react-native';

import Main from './pages/Main';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#17a65e" />
    <Main />
  </>
);

export default App;
