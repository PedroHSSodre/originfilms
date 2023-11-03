import React from 'react';
import {Flex, Text, View} from 'native-base';
import {type StyleProp, type ViewStyle} from 'react-native';

import {Wrapper} from '../components/Wrapper';
import {SearchInput} from '../components/SearchInpur';
import MovieList from '../components/Movie/MovieList';
import CategoryList from '../components/Movie/CategoryList';

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const Films = () => {
  return (
    <Wrapper flex={1} position="relative">
      <Flex flex={1} zIndex={2} style={flexStyle}>
        <Flex flexDirection="row" justifyContent="space-between">
          <View>
            <Text fontSize={14}>Explorar</Text>
          </View>
          <View>
            <Text>Português</Text>
          </View>
        </Flex>
        <View>
          <Text fontSize={32} bold>
            Origin Films
          </Text>
        </View>
        <View mt={8} mb={8}>
          <SearchInput
            backgroundColor="#F3F8FE"
            color="#B8B8B8"
            placeholder="Procure por um filme"
            borderRadius={24}
          />
        </View>

        <View mb={8}>
          <CategoryList />
        </View>

        <View mb={8}>
          <MovieList label="popular" />
        </View>

        <View mb={8}>
          <MovieList label="upcoming" />
        </View>
      </Flex>
    </Wrapper>
  );
};

const flexStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 20,
  paddingVertical: 44,
};
