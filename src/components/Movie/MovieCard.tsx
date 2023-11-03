import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, Flex, Image, Text, View, theme} from 'native-base';
import {Movie} from '../../screens/Films';

type MovieCardProps = {
  item: Movie;
};

const MovieCard = (props: MovieCardProps) => {
  const {item} = props;
  return (
    <Card
      mr={8}
      p={0}
      borderRadius={24}
      w={250}
      h={350}
      shadow="none"
      position="relative">
      <Flex flex={1} zIndex={2} justifyContent="flex-end" p={6}>
        <View
          w="63%"
          mb={3}
          px={4}
          backgroundColor="#4D5652"
          py={2}
          borderRadius={58}>
          <Text color={theme.colors.white} fontSize={12}>
            {item.title}
          </Text>
        </View>
        <Flex
          mb={3}
          flexDirection="row"
          px={2}
          backgroundColor="#4D5652"
          py={1}
          justifyContent="space-between"
          alignItems="center"
          borderRadius={58}
          width={50}>
          <Icon name="star-sharp" color={theme.colors.yellow[500]} />
          <Text color={theme.colors.white} fontSize={12}>
            {item.vote_average.toFixed(2)}
          </Text>
        </Flex>
      </Flex>
      <Image
        source={{uri: imgPrefix + item.poster_path}}
        alt="poster_movie"
        width="full"
        height="full"
        borderRadius={24}
        position="absolute"
        top={0}
        resizeMode="cover"
        zIndex={1}
      />
    </Card>
  );
};

const imgPrefix = 'https://image.tmdb.org/t/p/w500';

export default MovieCard;
