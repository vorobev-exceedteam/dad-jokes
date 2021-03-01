import { HTMLAttributes } from 'react';

export type JokeObject = {
  id: string;
  joke: string;
  status: number;
};

export type JokesListItemProps = {
  joke: string;
} & HTMLAttributes<HTMLLIElement>;
