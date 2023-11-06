import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {RootNavigation} from './src/components/Routes';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <SafeAreaView style={style}>
          <StatusBar hidden />
          <RootNavigation />
        </SafeAreaView>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

const style: ViewStyle = {flex: 1};
export default App;
