import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, Text, View} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Movie} from '../../screens/Films';
import MovieCard from './MovieCard';

import {apiOptions} from '../../config/api';
import {RootStackNavigation, Routes} from '../../types/navigation';

type Option = 'popular' | 'upcoming';

type MovieListProps = {
  label?: Option;
};

const searchCategoryOptions = {
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
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackNavigation>>();

  const option = searchCategoryOptions[label];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${option.value}?language=pt-BR&page=1`,
      apiOptions,
    )
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, [option]);

  const handleDetail = (id: number) =>
    navigation.navigate(Routes.DETAIL, {film_id: id});

  return (
    <View>
      <View mb={3}>
        <Text bold fontSize={18}>
          {option.label}
        </Text>
      </View>
      <View>
        <FlatList
          data={movies}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleDetail(item.id)}>
              <MovieCard item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default MovieList;
