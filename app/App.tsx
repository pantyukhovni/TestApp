/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import CustomText from 'components/CustomText';
import CustomText from './common/components/CustomText';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import {NativeBaseProvider} from 'native-base';
import {store} from './redux/store';
import client from './services/apollo';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NativeBaseProvider>
          <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <Header />
              <View>
                <CustomText text="Супер текст" />
              </View>
            </ScrollView>
          </SafeAreaView>
        </NativeBaseProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
