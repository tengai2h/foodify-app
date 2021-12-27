import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
};

export default App;
