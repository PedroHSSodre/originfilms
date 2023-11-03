import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Flex, Image, Text, View, theme} from 'native-base';
import IconMT from 'react-native-vector-icons/MaterialIcons';
import {useRoute, type RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Wrapper} from '../components/Wrapper';
import {Movie} from './Films';

import {apiOptions} from '../config/api';
import {RootStackNavigation} from '../types/navigation';

export const Detail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackNavigation>>();
  const route = useRoute<RouteProp<RootStackNavigation, 'Detail'>>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [seeMoreOverwiew, setSeeMoreOverwiew] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${route.params.film_id}?language=pt-BR`,
      apiOptions,
    )
      .then(response => response.json())
      .then(response => {
        setMovie(response);
      })
      .catch(err => console.error(err));
  }, [route.params]);

  const handleGoBack = () => navigation.goBack();

  return (
    <Wrapper withScrollView flex={1} position="relative">
      <Flex p={4} flex={1}>
        <View mb={8} position="relative" height="400px">
          <View p={2} zIndex={2}>
            <TouchableOpacity onPress={handleGoBack}>
              <Flex
                justifyContent="center"
                alignItems="center"
                w={16}
                h={16}
                backgroundColor="white"
                borderRadius={20}>
                <IconMT name={'keyboard-arrow-left'} size={38} color="blue" />
              </Flex>
            </TouchableOpacity>
          </View>
          <Image
            source={{uri: imgPrefix + movie?.poster_path}}
            w="full"
            height="full"
            alt="movie_banner"
            position="absolute"
            top={0}
            zIndex={1}
            borderRadius={20}
          />
        </View>
        <View>
          <Text color="black" bold fontSize={32}>
            {movie?.title}
          </Text>
        </View>
        <Flex flexDirection="row" alignItems="center" mt={2}>
          <Icon name="star-sharp" color={theme.colors.yellow[500]} />
          <Text ml={2}>
            {movie?.vote_average.toFixed(2)} ({movie?.vote_count} Reviews)
          </Text>
        </Flex>
        <View mt={4}>
          <View height={seeMoreOverwiew ? 'auto' : 75} overflow="hidden">
            <Text>{movie?.overview}</Text>
          </View>
          <TouchableOpacity onPress={() => setSeeMoreOverwiew(value => !value)}>
            <Flex flexDirection="row" mt={2} alignItems="flex-end">
              <Text bold color="blue.800" fontSize={16}>
                Ver {seeMoreOverwiew ? 'menos' : 'mais'}
              </Text>
              <IconMT
                name={
                  seeMoreOverwiew ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
                }
                size={24}
                color="blue"
              />
            </Flex>
          </TouchableOpacity>
        </View>
      </Flex>
    </Wrapper>
  );
};

const imgPrefix = 'https://image.tmdb.org/t/p/w500';
