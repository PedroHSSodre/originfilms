import React from 'react';
import {IInputProps, Input, SearchIcon, View} from 'native-base';

type SearchInputProps = IInputProps;

export const SearchInput = (props: SearchInputProps) => {
  return (
    <>
      <Input
        {...props}
        w="full"
        InputLeftElement={
          <View ml={3}>
            <SearchIcon />
          </View>
        }
      />
    </>
  );
};
