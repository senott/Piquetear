import React from 'react';
import { View, StatusBar } from 'react-native';

import Main from './pages/Main';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#17a65e" />
    <View style={{ flex: 1, backgroundColor: '#17a65e' }}>
      <Main />
    </View>
  </>
);

export default App;
