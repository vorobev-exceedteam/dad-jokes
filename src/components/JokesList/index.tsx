import { memo } from 'react';
import JokesListItem from '../JokesListItem';
import { MAX_JOKES } from '../../config';
import { getRandomJoke } from '../../services/JokesService';
import { JokeObject } from '../../types';
import './styles.scss';
import useMultipleFetch from '../../hooks/useMultipleFetch';

const JokesList = () => {
  const [jokesData, isLoading] = useMultipleFetch<JokeObject>(
    getRandomJoke,
    MAX_JOKES
  );

  return (
    <>
      <ul className={'jokes-list'}>
        {jokesData.map((jokeObject, key) => (
          <JokesListItem joke={jokeObject.joke} key={key} />
        ))}
      </ul>
      <div hidden={!isLoading}>Loading...</div>
    </>
  );
};

export default memo(JokesList);
