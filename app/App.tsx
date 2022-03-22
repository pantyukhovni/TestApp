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

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NativeBaseProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </NativeBaseProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
