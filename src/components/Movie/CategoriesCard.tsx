import React from 'react';
import {Text, View} from 'native-base';

import {MovieCategory} from '@/types/movie';

type CategorCardProps = {
  item: MovieCategory;
  categorySelected?: number;
};

const CategoriesCard = (props: CategorCardProps) => {
  const {item, categorySelected = 28} = props;

  const isSelected = item.id === categorySelected;

  return (
    <View
      px={4}
      py={2}
      mr={2}
      borderRadius={16}
      backgroundColor={
        isSelected
          ? 'linear-gradient(271deg, rgba(23, 111, 242, 0.05) 1.64%, rgba(25, 110, 238, 0.05) 102.71%)'
          : 'transparent'
      }>
      <Text bold color={isSelected ? '#196EEE' : '#B8B8B8'}>
        {item.name}
      </Text>
    </View>
  );
};

export default CategoriesCard;
