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
