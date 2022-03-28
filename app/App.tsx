/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import {NativeBaseProvider} from 'native-base';
import {store} from './redux/store';
import client from './services/apollo';
import RootNavigation from './navigation/RootNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <NativeBaseProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </NativeBaseProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
