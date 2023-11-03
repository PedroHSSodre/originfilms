import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base';

import {RootNavigation} from './src/components/Routes';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={style}>
        <StatusBar hidden />
        <RootNavigation />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const style: ViewStyle = {flex: 1};
export default App;
