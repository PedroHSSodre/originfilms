import React from 'react';
import {FlatList, View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import CategoriesCard from '@/components/Movie/CategoriesCard';

import {apiOptions} from '@/config/api';
import {MovieCategory} from '@/types/movie';
import useMovieCategory from '@/hooks/useMovieCategory';

const CategoryList = () => {
  const {
    movieCategorySelected: categorySelected,
    setMovieCategory: setCategorySelected,
  } = useMovieCategory();

  const {data} = useQuery({
    queryKey: ['movieCategoryList'],
    queryFn: () => getMovieCategory(),
  });

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setCategorySelected?.(item)}>
            <CategoriesCard
              item={item}
              categorySelected={categorySelected?.id ?? 0}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const getMovieCategory = (): Promise<MovieCategory[]> => {
  return new Promise((resolve, reject) => {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?language=pt',
      apiOptions,
    )
      .then(response => response.json())
      .then(response => resolve(response.genres))
      .catch(err => reject(err));
  });
};

export default CategoryList;
