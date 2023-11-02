import React from 'react';
import {Flex, IFlexProps} from 'native-base';

type WrapperProps = IFlexProps;

export const Wrapper = (props: WrapperProps) => {
  return (
    <>
      <Flex flexDirection="column" flex={1} w="full" {...props} />
    </>
  );
};
