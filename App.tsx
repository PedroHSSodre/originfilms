import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={style}>
        <RootNavigation />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const style: ViewStyle = {flex: 1};
export default App;
