import React from 'react';
import {Text, View} from 'native-base';

export type Category = {
  id: number;
  name: string;
};

type CategoryItemProps = {
  item: Category;
  categorySelected?: number;
};

const CategoriesCard = (props: CategoryItemProps) => {
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
