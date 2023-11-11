export type OptionLabel = 'popular' | 'upcoming';

export type Option = {
  label: string;
  value: string;
};

export type CategoryOptions = {
  [Key: string]: Option;
};
