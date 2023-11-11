import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMT from 'react-native-vector-icons/MaterialIcons';
import {useRoute, type RouteProp} from '@react-navigation/native';
import {Flex, Image, Spinner, Text, View, theme} from 'native-base';

import {Wrapper} from '@/components/Wrapper';

import {apiOptions} from '@/config/api';
import {imgPrefix} from '@/config/constants';
import type {Movie} from '@/types/movie';
import type {PageProps, RootStackNavigation, Routes} from '@/types/navigation';

type DetailPageProps = PageProps<Routes.DETAIL> & {};

export const Detail = (props: DetailPageProps) => {
  const {navigation} = props;

  const route = useRoute<RouteProp<RootStackNavigation, 'Detail'>>();
  const [seeMoreOverwiew, setSeeMoreOverwiew] = useState(false);

  const {data, isFetching} = useQuery({
    queryKey: ['movieDetail'],
    queryFn: () => getMovieDetail(route.params.film_id),
  });

  const handleGoBack = () => navigation.goBack();

  if (isFetching) {
    return (
      <Wrapper flex={1} justifyContent="center">
        <Spinner size="lg" />
      </Wrapper>
    );
  }

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
            source={{uri: imgPrefix + data?.poster_path}}
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
            {data?.title}
          </Text>
        </View>
        <Flex flexDirection="row" alignItems="center" mt={2}>
          <Icon name="star-sharp" color={theme.colors.yellow[500]} />
          <Text ml={2}>
            {data?.vote_average.toFixed(2)} ({data?.vote_count} Reviews)
          </Text>
        </Flex>
        <View mt={4}>
          <View height={seeMoreOverwiew ? 'auto' : 75} overflow="hidden">
            <Text>{data?.overview}</Text>
          </View>
          {data?.overview ? (
            <TouchableOpacity
              onPress={() => setSeeMoreOverwiew(value => !value)}>
              <Flex flexDirection="row" mt={2} alignItems="flex-end">
                <Text bold color="blue.800" fontSize={16}>
                  Ver {seeMoreOverwiew ? 'menos' : 'mais'}
                </Text>
                <IconMT
                  name={
                    seeMoreOverwiew
                      ? 'keyboard-arrow-up'
                      : 'keyboard-arrow-down'
                  }
                  size={24}
                  color="blue"
                />
              </Flex>
            </TouchableOpacity>
          ) : null}
        </View>
      </Flex>
    </Wrapper>
  );
};

const getMovieDetail = (film_id: Movie['id']): Promise<Movie> => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${film_id}?language=pt-BR`,
      apiOptions,
    )
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};
