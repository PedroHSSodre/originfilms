import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {FlatList, Flex, Spinner, Text, View} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Movie} from '../../screens/Films';
import MovieCard from './MovieCard';

import {apiOptions} from '../../config/api';
import {RootStackNavigation, Routes} from '../../types/navigation';

type OptionLabel = 'popular' | 'upcoming';

type MovieListProps = {
  label?: OptionLabel;
};

type Option = {
  label: string;
  value: string;
};

type CategoryOptions = {
  [Key: string]: Option;
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

const MovieList = (props: MovieListProps) => {
  const {label = 'popular'} = props;
  const option = searchCategoryOptions[label];

  const {data, isFetching} = useQuery({
    queryKey: ['movieList'],
    queryFn: () => getMovies(option),
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackNavigation>>();

  const handleDetail = (id: number) =>
    navigation.navigate(Routes.DETAIL, {film_id: id});

  return (
    <Flex justifyContent="center">
      <View mb={3}>
        <Text bold fontSize={18}>
          {option.label}
        </Text>
      </View>
      <Flex h={350} justifyContent="center" alignItems="center">
        {isFetching ? (
          <View>
            <Spinner size="lg" />
          </View>
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

const getMovies = (option: Option): Promise<Movie[]> => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${option.value}?language=pt-BR&page=1`,
      apiOptions,
    )
      .then(response => response.json())
      .then(response => resolve(response.results))
      .catch(err => reject(err));
  });
};

export default MovieList;
