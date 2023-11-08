import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import type {MovieCategory} from '@/types/movie';

type CategoryContext = {
  movieCategorySelected?: MovieCategory;
  setMovieCategory?: Dispatch<SetStateAction<MovieCategory>>;
};

const MovieCategoryContext = createContext<CategoryContext>({});

const useMovieCategory = () => useContext(MovieCategoryContext);

type CategoryProviderProps = {
  children: ReactNode;
};

export const CategoryProvider = ({children}: CategoryProviderProps) => {
  const [movieCategory, setMovieCategory] = useState<MovieCategory>({
    id: 28,
    name: 'Ação',
  });
  return (
    <MovieCategoryContext.Provider
      value={{movieCategorySelected: movieCategory, setMovieCategory}}>
      {children}
    </MovieCategoryContext.Provider>
  );
};

export default useMovieCategory;
