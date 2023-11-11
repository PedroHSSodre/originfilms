import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackNavigation = {
  Home: undefined;
  Films: undefined;
  Detail: {
    film_id: number;
  };
};

export enum Routes {
  HOME = 'Home',
  FILMS = 'Films',
  DETAIL = 'Detail',
}

export interface PageProps<T extends keyof RootStackNavigation>
  extends NativeStackScreenProps<RootStackNavigation, T> {}
