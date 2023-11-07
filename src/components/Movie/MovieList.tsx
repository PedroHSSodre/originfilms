import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {FlatList, Flex, Spinner, Text, View} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import MovieCard from './MovieCard';

import {apiOptions} from '../../config/api';
import {RootStackNavigation, Routes} from '../../types/navigation';
import {Movie} from '../../types/movie';
import useMovieCategory from '../../hooks/useMovieCategory';

type OptionLabel = 'popular' | 'upcoming';

type MovieListProps = {
  label?: OptionLabel;
  isDiscover?: boolean;
};

type Option = {
  label: string;
  value: string;
};

type CategoryOptions = {
  [Key: string]: Option;
};

const MovieList = (props: MovieListProps) => {
  const {label = 'popular', isDiscover = false} = props;
  const option = searchCategoryOptions[label];

  const {movieCategorySelected} = useMovieCategory();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackNavigation>>();

  const {data, isFetching} = useQuery({
    queryKey: [
      `${
        isDiscover
          ? `${movieCategorySelected?.id}-${movieCategorySelected?.name}`
          : label
      }:movieList`,
    ],
    queryFn: () =>
      getMovies(option, isDiscover, movieCategorySelected?.id ?? 0),
  });

  const handleDetail = (id: number) =>
    navigation.navigate(Routes.DETAIL, {film_id: id});

  return (
    <Flex justifyContent="center">
      <View mb={3}>
        <Text bold fontSize={18}>
          {isDiscover && movieCategorySelected
            ? movieCategorySelected.name
            : option.label}
        </Text>
      </View>
      <Flex h={350} justifyContent="center" alignItems="center">
        {isFetching ? (
          <Flex justifyContent="center" h={350}>
            <Spinner size="lg" />
          </Flex>
        ) : (
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleDetail(item.id)}>
                <MovieCard item={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </Flex>
    </Flex>
  );
};

const searchCategoryOptions: CategoryOptions = {
  popular: {
    label: 'Popular',
    value: 'popular',
  },
  upcoming: {
    label: 'Em breve',
    value: 'upcoming',
  },
};

const getMovies = (
  option: Option,
  isDiscover: boolean,
  category: number,
): Promise<Movie[]> => {
  const apiUrl = isDiscover
    ? `/discover/movie?with_genres=${category}&language=pt-BR&page=1`
    : `/movie/${option.value}?language=pt-BR&page=1`;

  return new Promise((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3${apiUrl}`, apiOptions)
      .then(response => response.json())
      .then(response => resolve(response.results))
      .catch(err => reject(err));
  });
};

export default MovieList;
