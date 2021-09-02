import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './src/store';
const {persistor, store} = configureStore();

import Initial from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Initial />
      </PersistGate>
    </Provider>
  );
}
