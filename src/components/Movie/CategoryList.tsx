import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, View} from 'native-base';

import CategoriesCard from './CategoriesCard';

import {apiOptions} from '../../config/api';
import {MovieCategory} from '../../types/movie';
import {useQuery} from '@tanstack/react-query';

const CategoryList = () => {
  const [categorySelected, setCategorySelected] = useState<number | undefined>(
    undefined,
  );
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
          <TouchableOpacity onPress={() => setCategorySelected(item.id)}>
            <CategoriesCard item={item} categorySelected={categorySelected} />
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
