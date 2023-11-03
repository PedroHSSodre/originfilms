import React from 'react';
import {ImageBackground} from 'react-native';
import {type StyleProp, type ViewStyle} from 'react-native';
import {Flex, IFlexProps, IScrollViewProps, ScrollView} from 'native-base';

type WrapperProps = {bgImage?: boolean; withScrollView?: boolean} & IFlexProps;

export const Wrapper = (props: WrapperProps) => {
  const {children, bgImage = false, withScrollView = true, ...rest} = props;
  if (withScrollView) {
    return (
      <ScrollView {...scrollViewProps}>
        <Flex flexDirection="column" flex={1} w="full" {...rest}>
          {children}
          {bgImage ? (
            <ImageBackground
              source={require('../assets/images/mountains.png')}
              style={_imgBackgroundStyle}
              resizeMode="cover"
            />
          ) : null}
        </Flex>
      </ScrollView>
    );
  }

  return (
    <Flex flexDirection="column" flex={1} w="full" {...rest}>
      {children}
      {bgImage ? (
        <ImageBackground
          source={require('../assets/images/mountains.png')}
          style={_imgBackgroundStyle}
          resizeMode="cover"
        />
      ) : null}
    </Flex>
  );
};

const scrollViewProps: IScrollViewProps = {
  contentContainerStyle: {flexGrow: 1},
};

const _imgBackgroundStyle: StyleProp<ViewStyle> = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 1,
};
