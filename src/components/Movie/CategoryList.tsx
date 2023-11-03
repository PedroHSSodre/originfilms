import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'native-base';
import CategoriesCard, {Category} from './CategoriesCard';
import {apiOptions} from '../../config/api';
import {TouchableOpacity} from 'react-native';

const CategoryList = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [categorySelected, setCategorySelected] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?language=pt',
      apiOptions,
    )
      .then(response => response.json())
      .then(response => setCategory(response.genres))
      .catch(err => console.error(err));
  }, []);

  return (
    <View>
      <FlatList
        data={category}
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

export default CategoryList;
