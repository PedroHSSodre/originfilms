import React from 'react';
import {Flex, Text, View} from 'native-base';
import {TouchableOpacity, type StyleProp, type ViewStyle} from 'react-native';

import {Wrapper} from '@/components/Wrapper';
import MovieList from '@/components/Movie/MovieList';
import CategoryList from '@/components/Movie/CategoryList';

export const Films = () => {
  return (
    <Wrapper flex={1} position="relative">
      <Flex flex={1} zIndex={2} style={flexStyle}>
        <Flex flexDirection="row" justifyContent="space-between">
          <View>
            <Text fontSize={14}>Explorar</Text>
          </View>
          <TouchableOpacity>
            <View bg="red.500" borderRadius={16} px={6} py={2}>
              <Text color="white">Favoritos</Text>
            </View>
          </TouchableOpacity>
        </Flex>
        <View mb={8}>
          <Text fontSize={32} bold>
            Origin Films
          </Text>
        </View>

        <View mb={8}>
          <CategoryList />
        </View>

        <View mb={8}>
          <MovieList isDiscover />
        </View>

        <View mb={8}>
          <MovieList label="popular" />
        </View>
      </Flex>
    </Wrapper>
  );
};

const flexStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 20,
  paddingVertical: 44,
};
