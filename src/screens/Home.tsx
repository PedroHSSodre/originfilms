import React, {useEffect} from 'react';
import {Button, Flex, Text, View, theme} from 'native-base';
import {type StyleProp, type ViewStyle} from 'react-native';

import {Wrapper} from '@/components/Wrapper';

import {PageProps, Routes} from '@/types/navigation';
import {apiOptions} from '@/config/api';

type HomePageProps = PageProps<Routes.HOME> & {};

export const Home = (props: HomePageProps) => {
  const {navigation} = props;

  const handleExplore = () => navigation.navigate(Routes.FILMS);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/authentication', apiOptions)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <Wrapper flex={1} position="relative" bgImage>
      <Flex
        flex={1}
        zIndex={2}
        style={flexStyle}
        borderColor={'red'}
        borderWidth={2}
        justifyContent="space-between">
        <View w="full" textAlign="center">
          <Text textAlign="center" color={theme.colors.white} fontSize={52}>
            Origin Films
          </Text>
        </View>
        <View>
          <Text fontSize={20} color={theme.colors.white} mb={6}>
            Catálogo de Filmes
          </Text>
          <Button
            borderRadius={16}
            backgroundColor="#196EEE"
            onPress={handleExplore}>
            Explorar
          </Button>
        </View>
      </Flex>
    </Wrapper>
  );
};

const flexStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 55,
  paddingTop: 93,
  paddingBottom: 48,
};
