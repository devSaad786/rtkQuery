import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {useGetPostByNameQuery} from './services';
import Page from './pages/Page';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
