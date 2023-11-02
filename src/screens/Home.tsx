import React from 'react';
import {Wrapper} from '../components/Wrapper';
import {ImageBackground, type StyleProp, type ViewStyle} from 'react-native';

export const Home = () => {
  return (
    <Wrapper flex={1} position="relative">
      <ImageBackground
        source={require('../assets/images/mountains.png')}
        style={_imgBackgroundStyle}
        resizeMode="cover"
      />
    </Wrapper>
  );
};

const _imgBackgroundStyle: StyleProp<ViewStyle> = {
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: 3,
};
